import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "next-themes";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    subsets: ["latin"],
});
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata = {
    title: "</Sajid> - Portfolio",
    description:
        "Welcome to my portfolio! I'm Md Sajiul Islam, a passionate developer specializing in building modern web applications.",
    keywords:
        "Md Sajiul Islam, portfolio, developer, web development, next.js, react, frontend, backend , Sajid Islam, Sajid, Md Sajid, Md Sajidul, Web Developer, Web Developer in Bangladesh, Web Developer in khulna, React Developer, Next.js Developer, Sajiul Islam Web Developer, Md Sajiul Islam Portfolio, Sajid Islam React Developer",
    authors: [{ name: "Md Sajiul Islam", url: "https://sajid-islam.vercel.app" }],
    creator: "Md Sajiul Islam",
    publisher: "Md Sajiul Islam",
    icons: {
        icon: "/me.png",
        shortcut: "/me.png",
        apple: "/me.png",
    },
    openGraph: {
        title: "Md Sajiul Islam - Portfolio",
        description:
            "Welcome to my portfolio! I'm Md Sajiul Islam, a passionate developer specializing in building modern web applications.",
        url: "https://sajid-islam.vercel.app",
        siteName: "Md Sajiul Islam",
        images: [
            {
                url: "/me.png",
                width: 1200,
                height: 630,
                alt: "Md Sajiul Islam's Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: "index, follow",
    category: "Technology",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <main className="max-w-6xl mx-auto">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem={true}
                        disableTransitionOnChange
                    >
                        {children}
                        <Footer />
                    </ThemeProvider>
                </main>
            </body>
        </html>
    );
}
