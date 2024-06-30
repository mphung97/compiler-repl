import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: {
      compilationMode: "annotation",
    },
  },
};

const millionConfig = {};

export default million.next(nextConfig);
