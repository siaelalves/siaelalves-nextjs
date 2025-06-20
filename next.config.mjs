/** @type {import('next').NextConfig} */
const nextConfig = {
 output: "export",
 trailingSlash: false, // Optional: adds a trailing slash to the end of URLs
  // Other configurations can go here
rewrites: async () => {
    return [
      {
        source: '/:path/index.html',
        destination:'/:path',
      }
    ];
  },

};

export default nextConfig;
