import Head from "next/head";
import { ReactElement } from "react";

interface Props {
  type?: "article" | "website";
  title?: string;
  description?: string;
  url?: string;
}

export function Meta({
  type = "website",
  title = process.env.NEXT_PUBLIC_SITE_NAME,
  description = "Personal things by Thomas.",
  url = process.env.NEXT_PUBLIC_SITE_URL,
}: Props): ReactElement {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OGP */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={process.env.NEXT_PUBLIC_SITE_IMAGE} />
      <meta property="og:image:alt" content="A Site Image" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={process.env.NEXT_PUBLIC_SITE_IMAGE} />
      <meta name="twitter:image:alt" content="A Site Image" />
    </Head>
  );
}
