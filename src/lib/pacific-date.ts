/** IANA zone for Nevada / Pacific (handles PST and PDT). */
export const PACIFIC_TZ = 'America/Los_Angeles';

/** Today's calendar date (YYYY-MM-DD) in Pacific time. */
export function pacificCalendarToday(): string {
	return new Date().toLocaleDateString('en-CA', { timeZone: PACIFIC_TZ });
}

/**
 * Format a stored YYYY-MM-DD value for display. Treated as a Pacific calendar date
 * (not UTC midnight) so the label matches the date you entered in `events.ts`.
 */
export function formatPacificCalendarDateLong(isoDate: string): string {
	const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
	if (!m) return isoDate;
	const y = Number(m[1]);
	const mon = Number(m[2]);
	const d = Number(m[3]);
	const instant = new Date(Date.UTC(y, mon - 1, d, 12, 0, 0));
	return new Intl.DateTimeFormat('en-US', {
		dateStyle: 'long',
		timeZone: PACIFIC_TZ,
	}).format(instant);
}
