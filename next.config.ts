import nextra from "nextra"

const withNextra = nextra({})

export default withNextra({
    // basePath: "/guide",
    output: "export",
    images: { unoptimized: true },
})
