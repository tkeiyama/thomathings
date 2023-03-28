import { bundleMDX } from "mdx-bundler";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeVideo from "rehype-video";

import { ContentType } from "../@types/thing";

/**
 * getThingByName gets a thing from the things directory by the given name.
 *
 * @param thingName A thing name.
 * @param contentType The purpose of the reeturned value.
 * @returns The returned value is determined by contentType.
 */
export async function getThingByName<K extends keyof ContentType>(
  thingName: string,
  contentType: K,
): Promise<ContentType[K]> {
  const file = `${process.cwd()}/things/${thingName}/${thingName}.mdx`;
  const cwd = `${process.cwd()}/things/${thingName}`;

  const { code, frontmatter } = await bundleMDX({
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

  switch (contentType) {
    case "frontmatter":
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return frontmatter;
    case "thing":
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return {
        frontmatter,
        content: code,
      };
    default:
      throw new Error("The content type is invalid.");
  }
}
