import Link from "next/link";
import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props): ReactElement {
  return (
    <div className="py-8 px-6 mx-auto md:max-w-2xl">
      <header>
        <Link href="/">
          <h2 className="inline-block py-0 my-0 font-title text-white border-none">
            Thomathings
          </h2>
        </Link>
      </header>
      <main className="mt-16">{children}</main>
    </div>
  );
}
