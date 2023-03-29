import { bundleMDX } from "mdx-bundler";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeVideo from "rehype-video";

import { Frontmatter, Thing } from "../@types/thing";

/**
 * getThingByName gets a thing from the things directory by the given name.
 *
 * @param thingName A thing name.
 * @returns The MDX content and frontmatter which has title, description and date.
 */
export async function getThingByName(
  thingName: string,
): Promise<Thing> {
  const file = `${process.cwd()}/things/${thingName}/thing.mdx`;
  const cwd = `${process.cwd()}/things/${thingName}`;

  const { code, frontmatter } = await bundleMDX<Frontmatter>({
    file,
    cwd,
    mdxOptions: (options) => {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: {
              class: "text-white",
            },
          },
        ],
        rehypeCodeTitles,
        [rehypeVideo, { details: false }],
        rehypePrism,
      ];

      return options;
    },
  });

  return {
    frontmatter,
    content: code,
  };
}
