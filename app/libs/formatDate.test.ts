import { formatDate } from "./formatDate";

describe("formatDate", () => {
	it("Formats date from ISO8601 to LLLL d, yyyy", () => {
		const result = formatDate(new Date("2021-11-12T01:23:45"));
		expect(result).toBe("Nov 12, 2021");
	});

	it("Formats date from ISO8601 to MM/dd/yyyy", () => {
		const result = formatDate(new Date("2021-11-12T01:23:45"), {
			formatMatcher: "best fit",
		});
		expect(result).toBe("11/12/2021");
	});
});
