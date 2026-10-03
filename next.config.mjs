/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },

  // Squarespace URLs → new structure. Every old slug has inbound links
  // (LinkedIn, proposals, email signatures) and is the only link equity the
  // site has. See Swivel Studio/Site-Map.md.
  async redirects() {
    return [
      { source: "/work-1", destination: "/work", permanent: true },
      { source: "/work-1/project-one-m2b9b", destination: "/work/plum-creek-sustainability-report", permanent: true },
      { source: "/work-1/project-one-m2b9b-ma9kx", destination: "/work/pacific-crest-savings-bank", permanent: true },
      { source: "/work-1/project-one-m2b9b-ma9kx-78yz6", destination: "/work/trueblue-stronger-together", permanent: true },
      { source: "/work-1/project-one-m2b9b-ma9kx-hr35m", destination: "/work/concord-international-school", permanent: true },
      { source: "/work-1/project-one-m2b9b-ma9kx-78yz6-kt3e8", destination: "/work/identities", permanent: true },
      { source: "/cart", destination: "/", permanent: true },
    ];
  },
};
export default nextConfig;
