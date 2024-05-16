import "@/styles/globals.css";
import "@/public/icon-font/iconfont.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
