/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: [
//             "uploadthing.com",
//             "utfs.io"
//         ]
//     }
// }

// module.exports = nextConfig

// next 14
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploadthing.com.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '**',
      },
    ],
  },
}