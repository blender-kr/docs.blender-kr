import { Footer, Layout, Navbar } from "nextra-theme-docs"
import { Head, Search } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import { inter } from "./fonts"

import "./style.css"
import "nextra-theme-docs/style.css"
import "../public/fonts/stylesheet.css"
import { Metadata } from "next"

export const metadata: Metadata = {
    icons: {
        icon: "/logo.svg",
    },
    title: "blender",
}

const navbar = <Navbar logo={<b>Nextra</b>} />
const footer = <Footer>© {new Date().getFullYear()} </Footer>

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="ko"
            dir="ltr"
            className={inter.variable}
            suppressHydrationWarning
        >
            <Head
                color={{
                    hue: 30,
                    saturation: 100,
                    lightness: {
                        light: 46,
                        dark: 65,
                    },
                }}
            ></Head>
            <body>
                <Layout
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    footer={footer}
                    search={<Search placeholder={"문서를 검색하세요"} />}
                    editLink={null}
                    feedback={{ content: null }}
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}
