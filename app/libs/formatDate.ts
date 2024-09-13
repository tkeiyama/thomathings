const initialOptions: Intl.DateTimeFormatOptions = {
	year: "numeric",
	month: "short",
	day: "numeric",
};

/**
 * formatDate formats a given date into string by following `options`.
 * The default format is like "Dec 29, 2021".
 *
 * @param date A date that is going to be formatted.
 * @param options The date format options which are followed by {@link Intl.DateTimeFormatOptions}.
 * @returns Format the given date by following options.
 */
export function formatDate(
	date: Date,
	options: Intl.DateTimeFormatOptions = initialOptions,
): string {
	const locale = "en-US";
	return date.toLocaleDateString(locale, options);
}
