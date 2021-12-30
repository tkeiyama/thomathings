import { readdir } from "fs/promises";

import { ContentType, Frontmatter } from "../@types/thing";
import { getThingByName } from "./getThingByName";

interface Options {
  /**
   * @default 'date'
   */
  sortBy?: keyof Frontmatter;
  /**
   * @default 'desc'
   */
  sortType?: "asc" | "desc";
}

const initialOptions: Options = {
  sortBy: "date",
  sortType: "desc",
};

/**
 * getThings gets all things from the things directory.
 *
 * @param contentType The purpose of the reeturned value.
 * @param options To operate returned things.
 * @returns The returned value is determined by contentType and options.
 */
export async function getThings<K extends keyof ContentType>(
  contentType: K,
  options: Options = initialOptions,
): Promise<ContentType[K][]> {
  const { sortBy, sortType } = options;

  const thingsName = await readdir(`${process.cwd()}/things`);
  const things = await Promise.all(
    thingsName.flatMap(async (thingName) => {
      const thing = await getThingByName(thingName, contentType);
      return thing;
    }),
  );

  const sortedThings = things.sort((a, b) => {
    if (sortType === "asc") {
      return a[sortBy] < b[sortBy] ? -1 : 1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });

  return sortedThings;
}
