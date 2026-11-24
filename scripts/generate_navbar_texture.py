import numpy as np
from PIL import Image

def create_panoramic_texture():
    src_path = "public/assets/navbar-travertino.jpg"
    out_path = "public/assets/navbar-travertino-panoramico.jpg"

    im = Image.open(src_path).convert("RGB")
    src = np.array(im, dtype=np.float32)
    src_h, src_w, _ = src.shape  # 512, 1024

    target_w = 2560
    target_h = 160
    feather = 100  # 100px smooth feather cross-fade

    # We want 2560px width.
    # We can take three strips from different vertical bands of the travertine:
    # This ensures high diversity of natural travertine grain across the 2560px width
    # without repetitive landmarks.
    #
    # Strip 1: y in [60, 220]
    # Strip 2: y in [176, 336]
    # Strip 3: y in [290, 450]
    #
    # Each strip is 1024 x 160.
    s1 = src[60:220, :, :]
    s2 = src[176:336, :, :]
    s3 = src[290:450, :, :]

    # Let's normalize the subtle vertical color/brightness difference between strips
    # so the blend is 100% invisible:
    # Compute mean color of each strip
    mean_all = (np.mean(s1) + np.mean(s2) + np.mean(s3)) / 3.0
    s1 = s1 * (mean_all / np.mean(s1))
    s2 = s2 * (mean_all / np.mean(s2))
    s3 = s3 * (mean_all / np.mean(s3))

    # Also make sure values stay in [0, 255]
    s1 = np.clip(s1, 0, 255)
    s2 = np.clip(s2, 0, 255)
    s3 = np.clip(s3, 0, 255)

    # Now let's blend them into a 2560-wide canvas:
    # Strip 1: covers x from 0 to 1024
    # Overlap 1: x from (1024 - feather) to 1024  (e.g. 924 to 1024)
    # Strip 2 starts at 924, covers up to 924 + 1024 = 1948
    # Overlap 2: x from (1948 - feather) to 1948  (e.g. 1848 to 1948)
    # Strip 3 starts at 1848, covers up to 1848 + 1024 = 2872
    # We crop the final result cleanly to target_w = 2560.

    canvas = np.zeros((target_h, target_w + 350, 3), dtype=np.float32)
    weights = np.zeros((target_h, target_w + 350, 1), dtype=np.float32)

    # Helper to generate smooth cosine / S-curve alpha mask for a strip
    def make_strip_mask(w, left_feather, right_feather):
        mask = np.ones((target_h, w, 1), dtype=np.float32)
        if left_feather > 0:
            t = np.linspace(0, np.pi, left_feather)
            fade_in = 0.5 * (1 - np.cos(t))  # 0 to 1 S-curve
            mask[:, :left_feather, 0] = fade_in[np.newaxis, :]
        if right_feather > 0:
            t = np.linspace(0, np.pi, right_feather)
            fade_out = 0.5 * (1 + np.cos(t))  # 1 to 0 S-curve
            mask[:, -right_feather:, 0] = fade_out[np.newaxis, :]
        return mask

    # Strip 1: left edge has no feather (it's the start), right edge has feather
    m1 = make_strip_mask(1024, 0, feather)
    canvas[:, 0:1024] += s1 * m1
    weights[:, 0:1024] += m1

    # Strip 2: starts at 1024 - feather = 924. Left edge has feather, right edge has feather
    start2 = 1024 - feather
    m2 = make_strip_mask(1024, feather, feather)
    canvas[:, start2:start2+1024] += s2 * m2
    weights[:, start2:start2+1024] += m2

    # Strip 3: starts at start2 + 1024 - feather = 1848. Left edge has feather, right edge no feather
    start3 = start2 + 1024 - feather
    m3 = make_strip_mask(1024, feather, 0)
    canvas[:, start3:start3+1024] += s3 * m3
    weights[:, start3:start3+1024] += m3

    # Normalize by weights to guarantee seamless 1.0 total alpha at all pixel columns
    weights[weights == 0] = 1.0
    result = canvas / weights

    # Crop to exact target_w (2560)
    result = result[:, :target_w, :]
    result = np.clip(result, 0, 255).astype(np.uint8)

    out_im = Image.fromarray(result)
    out_im.save(out_path, quality=96, subsampling=0)
    print(f"Successfully generated {out_path} with size: {out_im.size}")

if __name__ == "__main__":
    create_panoramic_texture()

