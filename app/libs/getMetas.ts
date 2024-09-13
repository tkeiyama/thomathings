import type { MetaFunction } from "@remix-run/react";

interface Params {
	type?: "article" | "website";
	title?: string;
	description?: string;
	url?: string;
}

type GetMetas = (params?: Params) => ReturnType<MetaFunction>;

export const getMetas: GetMetas = (
	params,
	// type = 'website',
	// title = import.meta.env.VITE_SITE_NAME,
	// description = "Peronal things by Thomas.",
	// url = import.meta.env.VITE_SITE_URL
) => {
	const title = params?.title ?? import.meta.env.VITE_SITE_NAME;
	const description = params?.description ?? "Personal things by Thomas.";
	const url = params?.url ?? import.meta.env.VITE_SITE_URL;
	const type = params?.type ?? "website";
	const image = import.meta.env.VITE_SITE_IMAGE;
	const alt = "The Site Image";

	return [
		{ title },
		{
			name: "description",
			content: description,
		},
		// OGP
		{
			property: "og:type",
			content: type,
		},
		{
			property: "og:title",
			content: title,
		},
		{ property: "og:description", content: description },
		{
			property: "og:url",
			content: url,
		},
		{
			property: "og:image",
			content: image,
		},
		{
			property: "og:image:alt",
			content: alt,
		},
		// Twitter Card
		{
			name: "twitter:card",
			content: "summary",
		},
		{
			name: "twitter:title",
			content: title,
		},
		{
			name: "twitter:description",
			content: description,
		},
		{
			name: "twitter:image",
			content: image,
		},
		{
			name: "twitter:image:alt",
			content: alt,
		},
	];
};
