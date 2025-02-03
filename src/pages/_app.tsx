import "@/styles/globals.css";
import type { AppProps } from "next/app";
import TanstackProvider from "@/components/tanstack-provider";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TanstackProvider>
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </TanstackProvider>
  );
}
