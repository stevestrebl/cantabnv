/**
 * Events data for the Cambridge Alumni Society of Nevada.
 * Edit this file to add or update events; the Events page will reflect changes.
 */
export interface Event {
	title: string;
	date: string;
	location: string;
	description: string;
	slug?: string;
}

export const events: Event[] = [
	{
		title: 'Inaugural meeting',
		date: '2026-02-16',
		location: 'Las Vegas',
		description: 'Inaugural meeting of the Cambridge Alumni Society of Nevada.',
		slug: 'inaugural-2026'
	}
];

const now = new Date().toISOString().slice(0, 10);

export function upcomingEvents(): Event[] {
	return events.filter((e) => e.date >= now);
}

export function pastEvents(): Event[] {
	return events.filter((e) => e.date < now);
}
