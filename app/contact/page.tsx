import { Header, Footer } from "@/components/chrome";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Robin Maxwell at Swivel Studio in Seattle.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="font-display text-4xl tracking-tight">Let&rsquo;s work together.</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-2">
          Tell me about your project or goals &mdash; I look forward to talking.
        </p>
        <dl className="mt-10 grid max-w-md gap-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-ink-3">Email</dt>
            <dd className="mt-1.5">
              <a className="font-medium text-crest-700 underline underline-offset-4" href="mailto:robin@swivelstudio.com">
                robin@swivelstudio.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-ink-3">Phone</dt>
            <dd className="mt-1.5">
              <a className="text-crest-700 underline underline-offset-4" href="tel:+12063563063">(206) 356-3063</a>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-ink-3">Studio</dt>
            <dd className="mt-1.5 text-ink-2">Seattle, Washington</dd>
          </div>
        </dl>
      </main>
      <Footer />
    </>
  );
}
