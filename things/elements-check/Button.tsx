import clsx from "clsx";
import { ReactElement, useState } from "react";

interface ButtonProps {
  children: ReactElement;
}

export function Button({ children }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      className={clsx("py-2 px-4 rounded-xl", [
        isClicked ? "bg-green-500" : "bg-blue-500",
      ])}
      onClick={() => setIsClicked((props) => !props)}
    >
      {children}
    </button>
  );
}
