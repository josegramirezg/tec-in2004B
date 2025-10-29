export default {
    output: 'standalone',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    }
}