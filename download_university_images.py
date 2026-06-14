"""
Abroad Visions — University Image Downloader
=============================================
Run this script on your LOCAL machine (not Claude).
It will download all 170 university logos + photos from studyabroadsystem.com
and save them to: public/university-images/logos/ and public/university-images/photos/

Usage:
  1. Copy this file and image_manifest.json to your project root
  2. pip install requests
  3. python download_university_images.py

After running, commit the downloaded images to your repo.
Then update PHOTO_BASE in lib/data.ts to '/university-images/'
"""

import json, os, time
import requests
from pathlib import Path

BASE_URL = "https://studyabroadsystem.com/storage/"
OUTPUT_DIR = Path("public/university-images")
LOGOS_DIR = OUTPUT_DIR / "logos"
PHOTOS_DIR = OUTPUT_DIR / "photos"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Referer": "https://studyabroadsystem.com/",
    "Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
}

def download(url, dest_path):
    try:
        r = requests.get(url, headers=HEADERS, timeout=15, stream=True)
        if r.status_code == 200:
            with open(dest_path, 'wb') as f:
                for chunk in r.iter_content(8192):
                    f.write(chunk)
            return True, os.path.getsize(dest_path)
        return False, f"HTTP {r.status_code}"
    except Exception as e:
        return False, str(e)

def main():
    LOGOS_DIR.mkdir(parents=True, exist_ok=True)
    PHOTOS_DIR.mkdir(parents=True, exist_ok=True)

    with open("image_manifest.json") as f:
        manifest = json.load(f)

    total = len(manifest)
    success_logo = 0
    success_photo = 0
    failed = []

    print(f"Starting download: {total} universities × 2 images = {total*2} files\n")

    for i, uni in enumerate(manifest, 1):
        uid = uni['id']
        name = uni['name'][:45]
        country = uni['country']

        print(f"[{i}/{total}] {country} | {name}")

        # --- Logo ---
        logo_path = uni.get('logo_path', '')
        if logo_path:
            ext = logo_path.split('.')[-1]
            dest = LOGOS_DIR / f"{uid}.{ext}"
            if dest.exists():
                print(f"  ✓ Logo (cached)")
                success_logo += 1
            else:
                ok, info = download(BASE_URL + logo_path, dest)
                if ok:
                    print(f"  ✓ Logo ({info} bytes)")
                    success_logo += 1
                else:
                    print(f"  ✗ Logo: {info}")
                    failed.append(f"ID {uid} logo: {info}")
        else:
            print(f"  — No logo path")

        # --- Photo ---
        photo_path = uni.get('photo_path', '')
        if photo_path:
            ext = photo_path.split('.')[-1]
            dest = PHOTOS_DIR / f"{uid}.{ext}"
            if dest.exists():
                print(f"  ✓ Photo (cached)")
                success_photo += 1
            else:
                ok, info = download(BASE_URL + photo_path, dest)
                if ok:
                    print(f"  ✓ Photo ({info} bytes)")
                    success_photo += 1
                else:
                    print(f"  ✗ Photo: {info}")
                    failed.append(f"ID {uid} photo: {info}")
        else:
            print(f"  — No photo path")

        time.sleep(0.3)  # be polite to server

    print(f"\n{'='*50}")
    print(f"Done. Logos: {success_logo}/{total} | Photos: {success_photo}/{total}")
    if failed:
        print(f"\nFailed ({len(failed)}):")
        for f in failed:
            print(f"  {f}")

    # Write path update instructions
    print(f"""
NEXT STEPS:
1. Commit downloaded images:
   git add public/university-images/
   git commit -m "Add university logos and photos (170 universities)"
   git push

2. Update lib/data.ts:
   Change: export const PHOTO_BASE = "https://studyabroadsystem.com/storage/"
   To:     export const PHOTO_BASE = "/university-images/"

3. Update your university detail page to use:
   Logo:  PHOTO_BASE + "logos/" + id + ".jpg"  (or .png)
   Photo: PHOTO_BASE + "photos/" + id + ".jpg"
""")

if __name__ == "__main__":
    main()
