"""
Download and optimize hero + product images for Pollygram & General Supplies.
Each product image is chosen to show the *actual product* (ball, kit, shoes, barbell, etc.),
not generic match atmosphere — see assets/images/ATTRIBUTION.txt.
Run from repo root: python scripts/build_site_images.py
"""
from __future__ import annotations

import io
import json
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT_HERO = ROOT / "assets" / "images" / "hero"
OUT_PRODUCTS = ROOT / "assets" / "images" / "products"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

PEXELS_BASE = "https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&w=2000"


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def open_image(data: bytes) -> Image.Image:
    im = Image.open(io.BytesIO(data))
    if im.mode in ("RGBA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.split()[3])
        im = bg
    elif im.mode != "RGB":
        im = im.convert("RGB")
    return im


def resize_cover(im: Image.Image, tw: int, th: int) -> Image.Image:
    w, h = im.size
    scale = max(tw / w, th / h)
    nw = max(1, int(round(w * scale)))
    nh = max(1, int(round(h * scale)))
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return im.crop((left, top, left + tw, top + th))


def save_pair(im: Image.Image, base: Path, jpg_q: int = 86, webp_q: int = 82) -> None:
    base.parent.mkdir(parents=True, exist_ok=True)
    jpg_path = base.with_suffix(".jpg")
    webp_path = base.with_suffix(".webp")
    im.save(jpg_path, "JPEG", quality=jpg_q, optimize=True, progressive=True)
    im.save(webp_path, "WEBP", quality=webp_q, method=6)


# (output_basename, url, width, height)
JOBS: list[tuple[str, str, int, int]] = [
    (
        "kenya-nairobi-night-football-hero",
        "https://images.unsplash.com/photo-1768492263433-b81fdcdce0e9?auto=format&fit=max&w=2400&q=88",
        1600,
        900,
    ),
    # Match football — literal soccer ball product (Mitre macro on grass)
    (
        "kenya-grassroots-football-match",
        PEXELS_BASE.format(pid=102448),
        1200,
        900,
    ),
    # Team kits — youth player in football jersey (kit visible)
    (
        "east-africa-academy-football-team-kits",
        PEXELS_BASE.format(pid=10329718),
        1200,
        900,
    ),
    # Track spikes / athletics shoes — running shoes on tartan track
    (
        "athletics-track-running-spikes",
        PEXELS_BASE.format(pid=235922),
        1200,
        900,
    ),
    # Tracksuits — athletes in tracksuits / track wear (training hall)
    (
        "track-sprint-training-institutional",
        PEXELS_BASE.format(pid=3764014),
        1200,
        900,
    ),
    # Hex / pro dumbbells — close product shot of dumbbells
    (
        "gym-hex-dumbbells-pe-conditioning",
        PEXELS_BASE.format(pid=4793233),
        1200,
        900,
    ),
    # Olympic barbell — loaded bar on gym floor
    (
        "gym-olympic-barbell-training",
        PEXELS_BASE.format(pid=1552252),
        1200,
        900,
    ),
    # Badminton — racket + shuttlecock (sport product)
    (
        "badminton-racket-sports-hall",
        PEXELS_BASE.format(pid=12887090),
        1200,
        900,
    ),
    # Aquatics — swimmer with goggles (goggles + pool context)
    (
        "aquatics-swim-training-pool",
        PEXELS_BASE.format(pid=3775140),
        1200,
        900,
    ),
    # School PE — youth soccer / school-age sport (PE programme context)
    (
        "school-pe-uniforms-students",
        PEXELS_BASE.format(pid=31683971),
        1200,
        900,
    ),
    # Equipment bundle — gym floor with racks, dumbbells, varied gear
    (
        "institutional-sports-equipment-bundle",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=max&w=2200&q=88",
        1200,
        900,
    ),
    # Portable / pitch goals — soccer goal net on grass pitch
    (
        "grassroots-portable-football-goals",
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=max&w=2200&q=88",
        1200,
        900,
    ),
    # Exercise mat — woman training on fitness/yoga mat
    (
        "pe-conditioning-exercise-mat",
        PEXELS_BASE.format(pid=7663234),
        1200,
        900,
    ),
]

ATTRIBUTION = """Image credits (retain per licence terms — Unsplash & Pexels)

Hero — Nairobi night football training (scene): Unsplash, Dwayne joe.

Products (product-forward picks):
- kenya-grassroots-football-match — Macro soccer ball on grass (Mitre-style). Pexels.
- east-africa-academy-football-team-kits — Youth football / jersey kit. Pexels.
- athletics-track-running-spikes — Running shoes on athletics track. Pexels.
- track-sprint-training-institutional — Athletes in tracksuits / track training wear. Pexels.
- gym-hex-dumbbells-pe-conditioning — Dumbbells close-up (commercial gym equipment). Pexels.
- gym-olympic-barbell-training — Olympic barbell on gym floor. Pexels.
- badminton-racket-sports-hall — Badminton racket and shuttlecock. Pexels.
- aquatics-swim-training-pool — Swimmer with goggles at pool. Pexels.
- school-pe-uniforms-students — Youth soccer / school sports activity. Pexels.
- institutional-sports-equipment-bundle — Gym interior with racks and mixed equipment. Unsplash.
- grassroots-portable-football-goals — Soccer goal on pitch. Unsplash.
- pe-conditioning-exercise-mat — Exercise / fitness mat in use. Pexels.

Replace with your own product photography when available.
"""


def main() -> None:
    OUT_HERO.mkdir(parents=True, exist_ok=True)
    OUT_PRODUCTS.mkdir(parents=True, exist_ok=True)
    meta = []

    for name, url, tw, th in JOBS:
        print("Fetching", name, "...")
        raw = fetch(url)
        im = open_image(raw)
        im = resize_cover(im, tw, th)
        out_dir = OUT_HERO if "hero" in name else OUT_PRODUCTS
        base = out_dir / name
        save_pair(im, base)
        meta.append({"file": str(base.relative_to(ROOT)), "source": url.split("?")[0], "size": [tw, th]})

    (ROOT / "assets" / "images" / "ATTRIBUTION.txt").write_text(ATTRIBUTION, encoding="utf-8")
    (ROOT / "assets" / "images" / "sources.json").write_text(json.dumps(meta, indent=2), encoding="utf-8")
    print("Wrote hero + product JPG/WebP and ATTRIBUTION.txt")

    # Lighter hero WebP for LCP
    hero_webp = OUT_HERO / "kenya-nairobi-night-football-hero.webp"
    if hero_webp.exists():
        im = Image.open(hero_webp)
        im.save(hero_webp, "WEBP", quality=74, method=6)
        print("Recompressed hero WebP")


if __name__ == "__main__":
    main()
