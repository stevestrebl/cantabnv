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
	/** Optional link to a map or venue page */
	mapUrl?: string;
}

export const events: Event[] = [
	{
		title: 'Inaugural meeting',
		date: '2026-02-16',
		location: 'Las Vegas',
		description: 'Inaugural meeting of the Cambridge Alumni Society of Nevada.',
		slug: 'inaugural-2026'
	},
	{
		title: 'Working open meeting of the Founding committee',
		date: '2026-05-09',
		location: 'Mothership Coffee — The Bend',
		description:
			'Open working meeting of the founding committee. All interested alumni are welcome.',
		slug: 'founding-committee-2026-05',
		mapUrl: 'https://maps.app.goo.gl/MqeuJcVJmkLGarYJ8'
	}
];

const now = new Date().toISOString().slice(0, 10);

export function upcomingEvents(): Event[] {
	return events.filter((e) => e.date >= now);
}

export function pastEvents(): Event[] {
	return events.filter((e) => e.date < now);
}
