/**
 * replaceSpaces will replace all spaces into hyphens.
 *
 * @param target A given string for replacing.
 * @param from A string that is going to be replaced.
 * @param to A string after being replaced.
 * @returns The replaced string.
 */
export function replaceAll(target: string, from: string, to: string) {
  // TODO Replace the methods with replaceAll after vercel uses over Node.js v15.0.0.
  return target.split(from).join(to).toLowerCase();
}
