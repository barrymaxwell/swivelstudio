# Brand source

`swivel-logo.ai` — the original Illustrator lockup (mark + "swivel"), Illustrator
CC 22, 2017. Kept here because it is the only copy; it was recovered from a
Downloads folder, not from a managed library.

`ai2svg.py` converted it to `public/brand/swivel-logo.svg`. The .ai is a
PDF 1.5 container, so the script decompresses the page content stream and
translates the path operators (`m l c v h re`) into a single SVG path, flipping
PDF's y-up space and flattening the `cm` transforms. Colour is forced to the
brand hex rather than the file's CMYK (100% cyan).

Re-run from the repo root:

    python3 brand-source/ai2svg.py     # expects content.txt alongside it

No Illustrator, Inkscape or poppler needed.
