import { GetStaticPropsResult } from "next";
import Link from "next/link";
import { ReactElement } from "react";

import { Layout } from "../components/Layout";
import { Meta } from "../components/Meta";
import { formatDate } from "../libs/formatDate";
import { getThings } from "../libs/getThings";
import { Thing } from "../types/thing";

interface Props {
  things: Thing<string>["frontmatter"][];
}

export default function Index({ things }: Props): ReactElement {
  return (
    <Layout>
      <Meta />

      <ul className="p-0 m-0 list-none">
        {things.flatMap(({ id, title, date, description }) => (
          <li key={title} className="mt-10 first:mt-0">
            <Link
              href={`/things/${id}`}
              className="block p-4 text-white rounded-lg border border-gray-800 shadow-2xl"
            >
              <small>{date}</small>
              <h2 className="p-0 m-0 mt-1 font-title text-brand border-none">
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

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const rawThings = await getThings();
  const things = rawThings.flatMap(({ frontmatter }) => {
    return {
      ...frontmatter,
      date: formatDate(frontmatter.date),
    };
  });

  return {
    props: {
      things,
    },
  };
}
