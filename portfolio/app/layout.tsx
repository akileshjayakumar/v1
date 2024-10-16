import "@/app/globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/portfolio/context/active-section-context";
import Footer from "@/portfolio/components/footer";
import ThemeContextProvider from "@/portfolio/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akilesh Jayakumar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-black text-gray-950 relative pt-28 sm:pt-36 dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="background-animation"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* <Header /> */}
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
