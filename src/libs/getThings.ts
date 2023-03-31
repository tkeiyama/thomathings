import { readdir } from "fs/promises";

import { Frontmatter, Thing } from "../types/thing";
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
 * @param options To operate returned things.
 * @returns The returned value is determined by options.
 */
export async function getThings(
  options: Options = initialOptions,
): Promise<Thing[]> {
  const { sortBy, sortType } = options;

  const thingsName = await readdir(`${process.cwd()}/things`);
  const things = await Promise.all(
    thingsName.flatMap(async (thingName) => {
      const thing = await getThingByName(thingName);
      return thing;
    }),
  );

  const sortedThings = things.sort((a, b) => {
    if (sortType === "asc") {
      return a["frontmatter"][sortBy] < b["frontmatter"][sortBy] ? -1 : 1;
    } else {
      return a["frontmatter"][sortBy] < b["frontmatter"][sortBy] ? 1 : -1;
    }
  });

  return sortedThings;
}
