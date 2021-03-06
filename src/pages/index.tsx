import { GetStaticPropsResult } from "next";
import Link from "next/link";
import { ReactElement } from "react";

import { Thing } from "../@types/thing";
import { Layout } from "../components/Layout";
import { Meta } from "../components/Meta";
import { formatDate } from "../libs/formatDate";
import { getThings } from "../libs/getThings";
import { replaceAll } from "../libs/replaceAll";

interface Props {
  things: Thing<string>["frontmatter"][];
}

export default function Index({ things }: Props): ReactElement {
  return (
    <Layout>
      <Meta />

      <ul className="p-0 m-0 list-none">
        {things.flatMap(({ title, date, description }) => (
          <li key={title} className="mt-10 first:mt-0">
            <Link href={`/things/${replaceAll(title, " ", "-")}`}>
              <a className="block p-4 text-white rounded-lg border border-gray-800 shadow-2xl">
                <h2 className="p-0 m-0 font-title text-brand border-none">
                  {title}
                </h2>
                <small>{date}</small>
                <p className="m-0">{description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const rawThings = await getThings("frontmatter");
  const things = rawThings.flatMap((thing) => {
    return {
      ...thing,
      date: formatDate(thing.date),
    };
  });

  return {
    props: {
      things,
    },
  };
}
