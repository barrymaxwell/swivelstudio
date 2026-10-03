import { Stub } from "../../_stub";

// Catches inbound links from the old Squarespace slugs so redirects
// land somewhere useful instead of a 404 during the transition.
export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <Stub
      title={name}
      note="This case study is being rebuilt. Happy to walk you through the project in the meantime."
    />
  );
}
