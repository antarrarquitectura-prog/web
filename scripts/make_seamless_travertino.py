import numpy as np
from PIL import Image

def make_seamless_h(src_path, out_path, feather=90):
    im = Image.open(src_path).convert("RGB")
    arr = np.array(im, dtype=np.float32)
    h, w, c = arr.shape

    # S-curve fade
    t = np.linspace(0, 1, feather)
    # Cosine S-curve from 0 to 1
    s_curve = 0.5 * (1 - np.cos(t * np.pi))
    alpha = s_curve[np.newaxis, :, np.newaxis]

    # Target: arr[:, 0] and arr[:, -1] should transition seamlessly into each other.
    # We take the right feather strip and left feather strip:
    left_strip = arr[:, :feather, :].copy()
    right_strip = arr[:, -feather:, :].copy()

    # The wrap target profile is a weighted blend
    # At the seam, the color should be (left_col_0 + right_col_last)/2
    seam_profile = 0.5 * (left_strip[:, [0], :] + right_strip[:, [-1], :])

    # Left edge: fades from seam_profile (at x=0) to left_strip (at x=feather-1)
    arr[:, :feather, :] = seam_profile * (1.0 - alpha) + left_strip * alpha

    # Right edge: fades from right_strip (at x=-feather) to seam_profile (at x=-1)
    arr[:, -feather:, :] = right_strip * (1.0 - alpha) + seam_profile * alpha

    # Exact col 0 and col -1 matching
    arr[:, 0, :] = seam_profile[:, 0, :]
    arr[:, -1, :] = seam_profile[:, 0, :]

    result = np.clip(arr, 0, 255).astype(np.uint8)
    out_im = Image.fromarray(result)
    out_im.save(out_path, quality=96, subsampling=0)
    print(f"Generated 100% seamless tile {out_path} with size {out_im.size}")

if __name__ == "__main__":
    make_seamless_h("public/assets/navbar-travertino.jpg", "public/assets/navbar-travertino.jpg", feather=90)
