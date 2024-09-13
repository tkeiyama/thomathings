import { json } from "@remix-run/node";
import { formatDate } from "../../libs/formatDate";
import { getThings } from "../../libs/getThings";
import { Layout } from "../../components/Layout";
import { Link, useLoaderData, type MetaFunction } from "@remix-run/react";
import { getMetas } from "../../libs/getMetas";

export const meta: MetaFunction = () => {
	return getMetas();
};

export const loader = async () => {
	const rawThings = await getThings();
	const things = rawThings.flatMap(({ frontmatter }) => {
		return {
			...frontmatter,
			date: formatDate(frontmatter.date),
		};
	});

	return json({
		things,
	});
};

export default function Route() {
	const data = useLoaderData<typeof loader>();
	const things = data.things;

	return (
		<Layout>
			<ul className="m-0 list-none p-0">
				{things.flatMap(({ id, title, date, description }) => (
					<li key={title} className="mt-10 first:mt-0">
						<Link
							to={`/things/${id}`}
							className="block rounded-lg border border-gray-800 p-4 text-white shadow-2xl"
						>
							<small>{date}</small>
							<h2 className="m-0 mt-1 border-none p-0 font-title text-brand">
								{title}
							</h2>
							<p className="m-0 mt-1">{description}</p>
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
}
