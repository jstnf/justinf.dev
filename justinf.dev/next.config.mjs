/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Emit about/index.html rather than about.html, so GitHub Pages never
  // resolves /about to the route-data folder of the same name.
  trailingSlash: true,
  reactStrictMode: false,
};

export default nextConfig;
