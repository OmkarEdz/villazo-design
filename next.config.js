/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "villazzo-backend.herokuapp.com"],
  },
}

module.exports = nextConfig

// module.exports = {
//   reactStrictMode: false,
//   webpack5: true,
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false};

//     return config;
//   },
// }
