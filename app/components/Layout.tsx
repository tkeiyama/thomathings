import { Link } from "@remix-run/react";
import type { ReactElement, ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export function Layout({ children }: Props): ReactElement {
	return (
		<div className="mx-auto px-6 py-8 md:max-w-2xl">
			<header>
				<Link to="/">
					<h2 className="my-0 inline-block border-none py-0 font-title text-white">
						Thomathings
					</h2>
				</Link>
			</header>
			<main className="mt-16">{children}</main>
		</div>
	);
}
