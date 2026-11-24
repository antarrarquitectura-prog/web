import numpy as np
from PIL import Image
import scipy.ndimage as nd

def find_vertical_seam(patch_a, patch_b):
    """
    Finds the minimum error boundary cut between patch_a and patch_b
    using dynamic programming (Seam Carving / Image Quilting).
    """
    diff = np.sum((patch_a - patch_b) ** 2, axis=-1)
    grad = np.abs(patch_b[:, 1:, :] - patch_b[:, :-1, :]).sum(axis=-1)
    grad = np.pad(grad, ((0, 0), (0, 1)), mode='edge')
    cost_map = diff / (grad + 10.0)
    
    h, w = cost_map.shape
    cost = np.zeros((h, w), dtype=np.float32)
    cost[0] = cost_map[0]
    track = np.zeros((h, w), dtype=np.int32)
    
    for i in range(1, h):
        c_prev = cost[i - 1]
        c_left = np.pad(c_prev[:-1], (1, 0), constant_values=1e9)
        c_mid = c_prev
        c_right = np.pad(c_prev[1:], (0, 1), constant_values=1e9)
        stacked = np.stack([c_left, c_mid, c_right], axis=0)
        best_idx = np.argmin(stacked, axis=0)
        cost[i] = cost_map[i] + np.min(stacked, axis=0)
        track[i] = np.arange(w) + (best_idx - 1)
        
    path = np.zeros(h, dtype=np.int32)
    path[-1] = np.argmin(cost[-1])
    for i in range(h - 2, -1, -1):
        path[i] = track[i + 1, path[i + 1]]
    return path

def blend_along_vertical_seam(patch_left, patch_right, seam_path, feather_sigma=3.0):
    """
    Blends two patches along a seam path with multiresolution frequency separation:
    - Low-frequency (macro illumination) is smoothly blended.
    - High-frequency (grain, micro-fissures) switches sharply along the minimum error cut.
    """
    h, w, c = patch_left.shape
    mask = np.zeros((h, w), dtype=np.float32)
    for y in range(h):
        mask[y, :seam_path[y]] = 1.0
        
    smooth_mask = nd.gaussian_filter(mask, sigma=feather_sigma)[:, :, np.newaxis]
    hard_mask = (mask >= 0.5)[:, :, np.newaxis]
    
    sigma_lf = 3.0
    lf_l = np.stack([nd.gaussian_filter(patch_left[:, :, i], sigma=sigma_lf) for i in range(3)], axis=-1)
    lf_r = np.stack([nd.gaussian_filter(patch_right[:, :, i], sigma=sigma_lf) for i in range(3)], axis=-1)
    
    hf_l = patch_left - lf_l
    hf_r = patch_right - lf_r
    
    lf_blend = lf_l * smooth_mask + lf_r * (1.0 - smooth_mask)
    hf_blend = np.where(hard_mask, hf_l, hf_r)
    
    return np.clip(lf_blend + hf_blend, 0, 255)

def generate_longitudinal_marble():
    src_path = "public/assets/marmol-verde.jpg"
    out_path = "public/assets/marmol-verde-panoramico.jpg"
    
    im = Image.open(src_path).convert("RGB")
    # Rotate 90 degrees clockwise so veins flow longitudinally (horizontal/soft diagonal)
    rot = im.rotate(270, expand=True)  # 800 x 400
    
    target_w = 2400
    target_h = 500
    overlap_w = 200
    
    print(f"Loaded source image: {im.size[0]}x{im.size[1]} -> Rotated to: {rot.size[0]}x{rot.size[1]}")
    print(f"Synthesizing longitudinal panoramic green marble: {target_w}x{target_h} px...")
    
    # Scale rotated slab to height 500 (1000 x 500 px)
    base = rot.resize((1000, 500), Image.Resampling.LANCZOS)
    arr_base = np.array(base, dtype=np.float32)
    
    # 3 varied panels across the 2400px width to avoid repeating landmarks:
    p0 = arr_base
    p1 = np.roll(arr_base, shift=150, axis=0)
    p2 = np.roll(np.roll(arr_base, shift=280, axis=0), shift=200, axis=1)
    
    canvas = np.zeros((target_h, 2600, 3), dtype=np.float32)
    canvas[:, 0:1000] = p0
    
    # Blend p0 and p1 at [800, 1000]
    patch_l1 = canvas[:, 800:1000]
    patch_r1 = p1[:, 0:overlap_w]
    seam1 = find_vertical_seam(patch_l1, patch_r1)
    canvas[:, 800:1000] = blend_along_vertical_seam(patch_l1, patch_r1, seam1)
    canvas[:, 1000:1800] = p1[:, overlap_w:1000]
    
    # Blend p1 and p2 at [1600, 1800]
    patch_l2 = canvas[:, 1600:1800]
    patch_r2 = p2[:, 0:overlap_w]
    seam2 = find_vertical_seam(patch_l2, patch_r2)
    canvas[:, 1600:1800] = blend_along_vertical_seam(patch_l2, patch_r2, seam2)
    canvas[:, 1800:2600] = p2[:, overlap_w:1000]
    
    final = canvas[:, :target_w, :]
    final_img = Image.fromarray(np.clip(final, 0, 255).astype(np.uint8))
    final_img.save(out_path, quality=98, subsampling=0)
    print(f"SUCCESS: Generated {out_path} ({final_img.size[0]}x{final_img.size[1]} px)")
    print(f"Mean RGB: {final.mean(axis=(0,1))}")

if __name__ == "__main__":
    generate_longitudinal_marble()
