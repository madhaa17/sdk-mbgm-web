import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import TanstackProvider from "@/components/tanstack-provider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange>
        <TanstackProvider>
          <Head>
            <title>Dashboard Monitor MBGM</title>
          </Head>
          <Component {...pageProps} />
          <Toaster position="top-center" />
        </TanstackProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
