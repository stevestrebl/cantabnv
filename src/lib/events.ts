/**
 * Events data for the Cambridge Alumni Society of Nevada.
 * Edit this file to add or update events; the Events page will reflect changes.
 */
import { pacificCalendarToday } from '$lib/pacific-date';

export interface Event {
	title: string;
	date: string;
	location: string;
	description: string;
	slug?: string;
	/** Optional link to a map or venue page */
	mapUrl?: string;
	/** Optional local start time shown after the date */
	time?: string;
	/** When true, list only under past events (allows same-day or manual archival). */
	past?: boolean;
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
		time: '10am',
		slug: 'founding-committee-2026-05',
		mapUrl: 'https://maps.app.goo.gl/MqeuJcVJmkLGarYJ8',
		past: true
	},
	{
		title: 'Lunch',
		date: '2026-05-21',
		location: 'Town Square',
		description: 'Meet outside the front entrance of Brio.',
		time: '11am–1pm',
		slug: 'lunch-town-square-2026-05',
		mapUrl:
			'https://www.google.com/maps/search/?api=1&query=Brio+Italian+Grille+6653+Las+Vegas+Blvd+S'
	}
];

export function upcomingEvents(): Event[] {
	const now = pacificCalendarToday();
	return events.filter((e) => !e.past && e.date >= now);
}

export function pastEvents(): Event[] {
	const now = pacificCalendarToday();
	return events.filter((e) => e.past === true || e.date < now);
}
