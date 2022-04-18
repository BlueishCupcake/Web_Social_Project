import { Global } from "themes/globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
}
