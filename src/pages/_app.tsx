import { SSRProvider } from "@react-aria/ssr";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Nav } from "src/components/Nav";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <ThemeProvider storageKey="theme" attribute="class">
        <Nav />
        <Component {...pageProps} />
        {process.env.NODE_ENV === "production" ? (
          <script
            async
            defer
            data-website-id={process.env.UMAMI_SITE_ID}
            src={process.env.UMAMI_URL}
          />
        ) : null}
      </ThemeProvider>
    </SSRProvider>
  );
}

export default MyApp;
