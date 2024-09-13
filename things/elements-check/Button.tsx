import clsx from "clsx";
import { type ReactElement, useState } from "react";

interface ButtonProps {
	children: ReactElement;
}

export function Button({ children }: ButtonProps) {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<button
			className={clsx("rounded-xl px-4 py-2", [
				isClicked ? "bg-green-500" : "bg-blue-500",
			])}
			onClick={() => setIsClicked((props) => !props)}
			type="button"
		>
			{children}
		</button>
	);
}
