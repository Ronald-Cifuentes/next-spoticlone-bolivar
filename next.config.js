const path = require("path");

module.exports = {
  images: {
    domains: [
      "t.scdn.co",
      "i.scdn.co",
      "mosaic.scdn.co",
      "thisis-images.scdn.co",
      "charts-images.scdn.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-ak.spotifycdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  exclude: ["node_modules", "templates"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
