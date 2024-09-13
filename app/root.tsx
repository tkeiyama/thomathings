import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

import tailwind from "./styles/tailwind.css?url";
import global from "./styles/global.css?url";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: tailwind,
	},
	{
		rel: "stylesheet",
		href: global,
	},
	{
		rel: "icon",
		href: "/favicon.ico",
		type: "image/x-icon",
	},
];

export default function Root() {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="data:image/x-icon;base64,AA" />
				<Meta />
				<Links />
			</head>
			<body className="bg-dark text-white">
				<Outlet />
				<Scripts />
			</body>
		</html>
	);
}
