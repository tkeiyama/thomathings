import { replaceAll } from "./replaceAll";

describe("replaceAll", () => {
  it.concurrent("Converts to string with lowercase and hyphens", () => {
    const result = replaceAll("foo bar baz", " ", "-");
    expect(result).toBe("foo-bar-baz");
  });
});
