import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Cta, Footer } from "@/components/chrome";
import { projects, bySlug, sectionId } from "@/lib/work";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = bySlug((await params).slug);
  if (!p) return {};
  // "Identities — Identities" when the client and title match.
  const title = p.client === p.title ? p.title : `${p.client} — ${p.title}`;
  return {
    title,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    // JPG cards from scripts/og-images.mjs. LinkedIn won't show the WebP heroes.
    openGraph: { title, description: p.summary, images: [{ url: `/og/${p.slug}.jpg`, width: 1200, height: 630 }] },
  };
}

const paras = (body: string | string[]) => (Array.isArray(body) ? body : [body]);

function bookTitle(text: string) {
  return text.split(/(Breakwater|Stronger You, Stronger Blue)/g).map((part, i) =>
    part === "Breakwater" || part === "Stronger You, Stronger Blue" ? <em key={i}>{part}</em> : part
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={"h-4 w-4 shrink-0 " + (dir === "left" ? "rotate-180" : "")}
    >
      <path d="M3.5 10h13M11.5 5l5 5-5 5" />
    </svg>
  );
}

/** Only genuinely panoramic artwork earns the full measure. A 2:1 logo does
 *  not need 976px, and tall phone screens run away without a cap. */
const isWide = (w: number, h: number) => w / h >= 1.9;
/** Only genuinely extreme shapes - roll-up banners, phone screens. At 0.75 the
 *  threshold split a matched pair of report spreads, capping one and not the
 *  other. */
const isTall = (w: number, h: number) => w / h < 0.6;

type Img = { src: string; alt: string; caption?: string; w: number; h: number; breathingRoom?: boolean; fullWidth?: boolean; square?: boolean; landscape?: boolean; keyline?: boolean | "subtle"; credits?: { role: string; name: string }[] };

/**
 * Group consecutive images by whether they span. A plain two-column grid
 * stretches every row to its tallest figure, which left a 360px void under
 * short artwork; the narrow runs are packed as masonry columns instead.
 */
function runs(images: Img[]) {
  const out: { wide: boolean; items: Img[] }[] = [];
  for (const img of images) {
    const wide = img.fullWidth || isWide(img.w, img.h);
    const last = out[out.length - 1];
    if (last && last.wide === wide) last.items.push(img);
    else out.push({ wide, items: [img] });
  }
  return out;
}

function Figure({ img, sizes, hideCaption = false, fitCell = false, columnSpan = 1 }: { img: Img; sizes: string; hideCaption?: boolean; fitCell?: boolean; columnSpan?: number }) {
  const tall = !fitCell && isTall(img.w, img.h);
  const caption = img.caption ?? img.alt;
  return (
    <figure className={"mb-8 break-inside-avoid" + (columnSpan === 2 ? " sm:col-span-2" : "")}>
      <div
        className={
          "overflow-hidden " + (img.keyline ? "" : "rounded-xs ") +
          (img.landscape ? "aspect-4/3 bg-rule-2" : tall ? "flex justify-center" : img.breathingRoom ? "p-5 sm:p-8" : "bg-rule-2")
        }
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={img.w}
          height={img.h}
          sizes={sizes}
          className={
            // Fixed height, not max-height: a low-res tall source was rendering
            // at its natural 267px beside 476px siblings.
            (img.landscape ? "h-full w-full object-cover" : img.square ? "aspect-square w-full object-cover" : tall ? "h-[40rem] w-auto object-contain" : "h-auto w-full") +
            (img.keyline ? (img.keyline === "subtle" ? " border border-[#a6a6a6]" : " border border-black") : tall ? " rounded-xs" : "")
          }
        />
      </div>
      {!hideCaption && caption && <figcaption className="mt-2.5 text-mid text-ink-3">{bookTitle(caption)}</figcaption>}
    </figure>
  );
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) notFound();

  const hideCaptions = slug === "breakwater-special-edition" || slug === "pacific-crest-savings-bank";
  const i = projects.findIndex((x) => x.slug === slug);
  const prev = projects[i - 1];
  const next = projects[i + 1];

  return (
    <>
      <Header />
      <main>
        {/* Summary block — the five-second read, above the hero. */}
        <div className="mx-auto max-w-5xl px-6 pt-14 pb-10">
          {(p.eyebrow || p.client !== p.title) && (
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">
              {p.eyebrow ?? p.client}
            </p>
          )}
          <h1 className="mt-4 max-w-[20ch] font-display text-[2.5rem] leading-[1.08] tracking-[-0.02em] text-balance sm:text-5xl">
            {bookTitle(p.title)}
          </h1>
          <p className="mt-5 max-w-[46ch] text-lede text-ink-2">{bookTitle(p.summary)}</p>
        </div>

        <div className="relative aspect-21/9 w-full overflow-hidden bg-rule-2">
          <Image src={p.hero.src} alt={p.hero.alt} fill priority sizes="100vw" className="object-cover"
            style={{ objectPosition: p.hero.position, transform: p.hero.scale ? `scale(${p.hero.scale})` : undefined }} />
        </div>

        {/* Intro: disciplines rail on the left, the setup on the right. */}
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="grid gap-6 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-14">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">
                What I did
              </h2>
              <ul className="mt-3 flex flex-col gap-1 text-mid text-ink-2">
                {p.disciplines.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
            <p className="max-w-[58ch] text-lede leading-[1.65] text-ink-2">{bookTitle(p.intro)}</p>
          </div>
        </div>

        {p.sections.map((s) => (
          <section
            key={s.heading}
            id={sectionId(s.heading)}
            className={
              "scroll-mt-28 border-t border-rule py-14 " +
              // Marks are white-backed rasters; on the off-white ground each one
              // read as a faint rectangle. A white band removes the edge without
              // touching the artwork.
              (s.gallery ? "bg-surface" : "")
            }
          >
            <div className="mx-auto max-w-5xl px-6">
              <div className="grid gap-4 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-14">
                <h2 className="font-display text-h2 tracking-tight text-balance">{bookTitle(s.heading)}</h2>
                <div className="flex max-w-[58ch] flex-col gap-4">
                  {paras(s.body).filter(Boolean).map((t) => (
                    <p key={t} className="leading-[1.7] text-ink-2">{bookTitle(t)}</p>
                  ))}
                </div>
              </div>

              {s.images && s.gallery && (
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                  {s.images.map((img) => (
                    <figure key={img.src} className={img.fullWidth ? "sm:col-span-2" : undefined}>
                      {/* No cell background: the marks are composited on the page ground, so a
                          white panel would reintroduce the edge we just removed. */}
                      <div className={"flex items-center justify-center overflow-hidden " + (img.fullWidth ? "aspect-8/3" : "aspect-4/3")}>
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={img.w}
                          height={img.h}
                          sizes={img.fullWidth ? "(max-width: 1024px) 100vw, 650px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"}
                          className="h-full w-full object-contain"
                          style={img.galleryScale ? { transform: `scale(${img.galleryScale})` } : undefined}
                        />
                      </div>
                      {!hideCaptions && !s.hideCaptions && (
                        <figcaption className="mt-2.5 text-center text-mid text-ink-3">
                          {img.caption ?? img.alt}
                          {img.credits?.map((credit) => (
                            <span key={`${credit.role}-${credit.name}`} className="mt-1 block text-sm">
                              {credit.role}: {credit.name}
                            </span>
                          ))}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}

              {s.images && !s.gallery && s.imageRows && (
                <div className="mt-10">
                  {s.imageRows.map((row, rowIndex) => {
                    const spans = typeof row === "number" ? Array.from({ length: row }, () => 1) : row;
                    const columns = spans.reduce((sum, span) => sum + span, 0);
                    const start = s.imageRows!.slice(0, rowIndex).reduce<number>((sum, size) => sum + (typeof size === "number" ? size : size.length), 0);
                    return (
                      <div key={rowIndex} className={"grid grid-cols-1 gap-x-6 " + (columns === 3 ? "sm:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1")}>
                        {s.images!.slice(start, start + spans.length).map((img, imageIndex) => (
                          <Figure key={img.src} img={img} fitCell columnSpan={spans[imageIndex]} hideCaption={hideCaptions || s.hideCaptions}
                            sizes={`(max-width: 640px) 100vw, ${columns === 1 ? 976 : columns === 2 ? 480 : spans[imageIndex] === 2 ? 643 : 310}px`} />
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}

              {s.images && !s.gallery && !s.imageRows && (
                <div className="mt-10">
                  {runs(s.images).map((run, i) =>
                    run.wide ? (
                      <div key={i}>
                        {run.items.map((img) => (
                          <Figure key={img.src} hideCaption={hideCaptions || s.hideCaptions} img={img} sizes="(max-width: 640px) 100vw, 976px" />
                        ))}
                      </div>
                    ) : s.leftColumnImages ? (
                      <div key={i} className="grid gap-x-6 sm:grid-cols-2">
                        {[run.items.slice(0, s.leftColumnImages), run.items.slice(s.leftColumnImages)].map((column, columnIndex) => (
                          <div key={columnIndex} className="min-w-0">
                            {column.map((img) => (
                              <Figure key={img.src} hideCaption={hideCaptions || s.hideCaptions} img={img} sizes="(max-width: 640px) 100vw, 480px" />
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div key={i} className={s.orderedImages ? "grid gap-x-6 sm:grid-cols-2" : "gap-x-6 sm:columns-2"}>
                        {run.items.map((img) => (
                          <Figure
                            key={img.src}
                            hideCaption={hideCaptions || s.hideCaptions}
                            img={img}
                            sizes={
                              isTall(img.w, img.h)
                                ? "(max-width: 640px) 70vw, 320px"
                                : "(max-width: 640px) 100vw, 480px"
                            }
                          />
                        ))}
                      </div>
                    )
                  )}
                </div>
              )}

              {s.imagePlaceholders && (
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {s.imagePlaceholders.map((label) => (
                    <div key={label}>
                      <div className="flex aspect-4/3 items-center justify-center rounded-xs border border-dashed border-rule-2 bg-rule-2/30 px-4 text-center">
                        <span className="text-sm text-ink-3">Image placeholder</span>
                      </div>
                      <p className="mt-2.5 text-mid text-ink-3">{label}</p>
                    </div>
                  ))}
                </div>
              )}

              {s.subsections?.map((subsection) => (
                <div key={subsection.heading} className="mt-14 border-t border-rule pt-10">
                  <div className="grid gap-4 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-14">
                    <h3 className="font-display text-xl tracking-tight">{subsection.heading}</h3>
                    <p className="max-w-[58ch] leading-[1.7] text-ink-2">{subsection.body}</p>
                  </div>
                  {subsection.images && (
                    <div className="mt-8 grid gap-x-6 sm:grid-cols-2">
                      {subsection.images.map((img) => (
                        <div key={img.src} className={img.fullWidth === false ? undefined : "sm:col-span-2"}>
                          <Figure hideCaption={hideCaptions || s.hideCaptions} img={img} sizes={img.fullWidth === false ? "(min-width: 640px) 480px, 100vw" : "(min-width: 1024px) 976px, 100vw"} />
                        </div>
                      ))}
                    </div>
                  )}
                  {subsection.imagePlaceholders && (
                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                      {subsection.imagePlaceholders.map((label) => (
                        <div key={label}>
                          <div className="flex aspect-4/3 items-center justify-center rounded-xs border border-dashed border-rule-2 bg-rule-2/30 px-4 text-center">
                            <span className="text-sm text-ink-3">Image placeholder</span>
                          </div>
                          <p className="mt-2.5 text-mid text-ink-3">{label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {(p.credits?.length || p.creditNote) && (
          <section className="border-t border-rule py-12">
            <div className="mx-auto max-w-5xl px-6">
              <div>
                {p.credits?.length ? (
                  <>
                    <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">Credits</h2>
                    <ul className="mt-3 flex flex-col gap-2 text-mid text-ink-2">
                      {p.credits.map((credit) => (
                        <li key={credit.role}><span className="font-medium text-ink">{credit.role}:</span> {credit.name}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {p.creditNote && (
                  <p className={`${p.credits?.length ? "mt-4 " : ""}text-mid text-ink-2`}>{p.creditNote}</p>
                )}
              </div>
            </div>
          </section>
        )}

        <nav
          aria-label="More work"
          className="mx-auto flex max-w-5xl items-center justify-between gap-6 border-t border-rule px-6 py-6 text-mid"
        >
          {prev ? (
            <Link
              className="inline-flex max-w-[46%] items-center gap-2 text-ink-2 transition-colors hover:text-crest-700 sm:max-w-none"
              href={`/work/${prev.slug}`}
            >
              <Arrow dir="left" />
              {prev.client}
            </Link>
          ) : <span />}
          {/* Three items don't fit at 375px; the footer nav covers this link. */}
          <Link
            className="hidden text-ink-3 transition-colors hover:text-crest-700 sm:inline"
            href="/work"
          >
            All work
          </Link>
          {next ? (
            <Link
              className="inline-flex max-w-[46%] items-center gap-2 text-ink-2 transition-colors hover:text-crest-700 sm:max-w-none"
              href={`/work/${next.slug}`}
            >
              {next.client}
              <Arrow dir="right" />
            </Link>
          ) : <span />}
        </nav>
      </main>
      <Cta />
      <Footer />
    </>
  );
}
