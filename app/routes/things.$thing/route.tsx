import {
	json,
	type LinksFunction,
	type LoaderFunction,
	type LoaderFunctionArgs,
} from "@remix-run/node";
import { getThingByName } from "../../libs/getThingByName";
import type { Frontmatter } from "../../types/thing";
import { formatDate } from "../../libs/formatDate";
import { useLoaderData, type MetaFunction } from "@remix-run/react";
import { Layout } from "../../components/Layout";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";

import prism from "../../styles/prism.css?url";
import { getMetas } from "../../libs/getMetas";

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: prism,
	},
];

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const title = data?.frontmatter.title;
	const description = data?.frontmatter.description;
	return getMetas({
		type: "article",
		title: `${title} - ${import.meta.env.VITE_SITE_NAME}`,
		description,
		url: `${import.meta.env.VITE_SITE_URL}/things/${title?.replaceAll(" ", "-").toLowerCase()}`,
	});
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const thingName = params.thing ?? "";
	const { frontmatter, content } = await getThingByName(thingName);
	const formattedFrontmatter: Frontmatter<string> = {
		...frontmatter,
		date: formatDate(frontmatter.date),
	};

	return json({
		frontmatter: formattedFrontmatter,
		content,
	});
};

export default function Route() {
	const data = useLoaderData<typeof loader>();
	const frontmatter = data.frontmatter;
	const content = data.content;
	const Content = useMemo(() => getMDXComponent(content), [content]);

	return (
		<Layout>
			<h1 className="border-none p-0 font-title">{frontmatter.title}</h1>
			<p>{frontmatter.date}</p>
			<article className="pt-8">
				<Content />
			</article>
		</Layout>
	);
}
