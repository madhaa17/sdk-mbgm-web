import "@/styles/globals.css";
import type { AppProps } from "next/app";
import TanstackProvider from "@/components/tanstack-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TanstackProvider>
      <Component {...pageProps} />
    </TanstackProvider>
  );
}
