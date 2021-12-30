import { ReactElement } from "react";

export function Pwa(): ReactElement {
  return (
    <>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#171a1c" />

      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="120x120"
        href="/icons/icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        href="/icons/icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="72x72"
        href="/icons/icon-72x72.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/icons/icon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href="/icons/icon-128x128.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="144x144"
        href="/icons/icon-144x144.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="152x152"
        href="/icons/icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/icons/icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="384x384"
        href="/icons/icon-384x384.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/icons/icon-512x512.png"
      />
    </>
  );
}
