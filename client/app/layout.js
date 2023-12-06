import "./globals.css";
import ThemeProviders from "./theme/providers";
import Provider from "@/redux/provider";
import Navigation from "./(front)/common/Navigation/Navigation";
import Footer from "./(front)/common/Navigation/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Ecommerce site",
  description: "Creating ecommerce site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:!bg-black bg-white text-black dark:!text-white">
        <Provider>
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={false}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          <ThemeProviders>
            <Navigation />
            {children}
            <Footer />
          </ThemeProviders>
        </Provider>
      </body>
    </html>
  );
}
