import { getMDXComponent } from "mdx-bundler/client";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { ReactElement, useMemo } from "react";

import { Frontmatter, Thing } from "../../@types/thing";
import { Layout } from "../../components/Layout";
import { Meta } from "../../components/Meta";
import { formatDate } from "../../libs/formatDate";
import { getThingByName } from "../../libs/getThingByName";
import { getThings } from "../../libs/getThings";
import { replaceAll } from "../../libs/replaceAll";

interface Props {
  frontMatter: Thing<string>["frontmatter"];
  content: Thing["content"];
}

export default function Component({
  frontMatter,
  content,
}: Props): ReactElement {
  const Content = useMemo(() => getMDXComponent(content), [content]);

  return (
    <Layout>
      <Meta
        type="article"
        title={`${frontMatter.title} - ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description={frontMatter.description}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/things/${
          replaceAll(
            frontMatter.title,
            " ",
            "-",
          )
        }`}
      />

      <h1 className="p-0 font-title border-none">{frontMatter.title}</h1>
      <p>{frontMatter.date}</p>
      <article className="pt-8">
        <Content />
      </article>
    </Layout>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const things = await getThings();
  const paths = things.flatMap(({frontmatter}) => {
    return {
      params: { thing: frontmatter.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  const { frontmatter, content } = await getThingByName(
    params.thing as string,
  );
  const formattedFrontMatter: Frontmatter<string> = {
    ...frontmatter,
    date: formatDate(frontmatter.date),
  };

  return {
    props: {
      frontMatter: formattedFrontMatter,
      content,
    },
  };
}
