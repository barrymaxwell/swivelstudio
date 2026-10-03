import re, sys

SRC   = open('content.txt').read()
ART   = (28.8267, 93.2373, 562.805, 217.363)   # ArtBox from the page object
BRAND = "#24AAE3"

X0, Y0, X1, Y1 = ART
W, H = X1 - X0, Y1 - Y0

def mul(a, b):                      # 2x3 affine, PDF order
    a0,a1,a2,a3,a4,a5 = a; b0,b1,b2,b3,b4,b5 = b
    return (a0*b0+a1*b2, a0*b1+a1*b3, a2*b0+a3*b2, a2*b1+a3*b3, a4*b0+a5*b2+b4, a4*b1+a5*b3+b5)

def pt(m, x, y):                    # apply CTM, then flip into SVG space
    ux = m[0]*x + m[2]*y + m[4]
    uy = m[1]*x + m[3]*y + m[5]
    return (ux - X0, Y1 - uy)

def f(v):                           # trim float noise
    s = f"{v:.3f}".rstrip('0').rstrip('.')
    return "0" if s in ("-0", "") else s

tokens = re.findall(r'-?\d*\.?\d+|[A-Za-z\*\'"]+|/\w+', SRC)
stack, ctm, nums = [], (1,0,0,1,0,0), []
subpaths, cur, start = [], [], None
clip_pending = False

i = 0
while i < len(tokens):
    t = tokens[i]; i += 1
    if re.fullmatch(r'-?\d*\.?\d+', t):
        nums.append(float(t)); continue
    if t.startswith('/'):
        nums = []; continue

    if   t == 'q':  stack.append(ctm)
    elif t == 'Q':  ctm = stack.pop() if stack else (1,0,0,1,0,0)
    elif t == 'cm': ctm = mul(tuple(nums[-6:]), ctm)
    elif t == 'm':
        if cur: subpaths.append(cur)
        x, y = pt(ctm, nums[-2], nums[-1]); start = (x, y)
        cur = [f"M{f(x)} {f(y)}"]
    elif t == 'l':
        x, y = pt(ctm, nums[-2], nums[-1]); cur.append(f"L{f(x)} {f(y)}")
    elif t == 'c':
        a = pt(ctm, nums[-6], nums[-5]); b = pt(ctm, nums[-4], nums[-3]); c = pt(ctm, nums[-2], nums[-1])
        cur.append(f"C{f(a[0])} {f(a[1])} {f(b[0])} {f(b[1])} {f(c[0])} {f(c[1])}")
    elif t == 'v':
        b = pt(ctm, nums[-4], nums[-3]); c = pt(ctm, nums[-2], nums[-1])
        cur.append(f"S{f(b[0])} {f(b[1])} {f(c[0])} {f(c[1])}")
    elif t == 'h':
        if cur: cur.append("Z")
    elif t == 're':
        x, y, w, h = nums[-4:]
        corners = [pt(ctm, x, y), pt(ctm, x+w, y), pt(ctm, x+w, y+h), pt(ctm, x, y+h)]
        if clip_pending or (abs(w) >= W and abs(h) >= H):
            clip_pending = False          # page clip box, not artwork
        else:
            if cur: subpaths.append(cur); cur = []
            d = "M" + " L".join(f"{f(px)} {f(py)}" for px, py in corners) + " Z"
            subpaths.append([d])
    elif t == 'W':
        clip_pending = True
    elif t in ('f', 'f*', 'n', 'B', 'b'):
        if cur: subpaths.append(cur); cur = []
        clip_pending = False          # painting ends any pending `W` clip
        nums = []; continue
    nums = []

if cur: subpaths.append(cur)

d = " ".join(" ".join(sp) for sp in subpaths)
svg = (
 f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {f(W)} {f(H)}" '
 f'role="img" aria-label="Swivel Studio">\n'
 f'  <title>Swivel Studio</title>\n'
 f'  <path fill="{BRAND}" fill-rule="nonzero" d="{d}"/>\n'
 f'</svg>\n')
open('swivel-logo.svg','w').write(svg)
print(f"subpaths: {len(subpaths)}  viewBox: 0 0 {f(W)} {f(H)}  bytes: {len(svg)}")
