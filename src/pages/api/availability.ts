import type { APIRoute } from 'astro';
import { google } from 'googleapis';
export const prerender = false;

const CALENDAR_ID = 'fa60ed19932a78ad53e6ceaf547a506a7967c35948656e0280368def2f9c86aa@group.calendar.google.com';
const ALL_SLOTS = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

export const GET: APIRoute = async ({ url }) => {
    const date = url.searchParams.get('date');
    if (!date) {
        return new Response(JSON.stringify({ error: 'date required' }), { status: 400 });
    }

    const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(import.meta.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
        scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    // Determine ET offset: EDT = -04:00 (Mar–Nov), EST = -05:00 (Dec–Feb)
    const month = new Date(date).getMonth() + 1;
    const offset = month >= 3 && month <= 11 ? '-04:00' : '-05:00';

    const freebusyRes = await calendar.freebusy.query({
        requestBody: {
            timeMin: `${date}T00:00:00${offset}`,
            timeMax: `${date}T23:59:59${offset}`,
            timeZone: 'America/New_York',
            items: [{ id: CALENDAR_ID }],
        },
    });

    const busySlots = freebusyRes.data.calendars?.[CALENDAR_ID]?.busy ?? [];

    const available = ALL_SLOTS.filter(slot => {
        const slotStart = new Date(`${date}T${slot}:00${offset}`);
        const slotEnd = new Date(slotStart.getTime() + 60 * 60 * 1000);
        return !busySlots.some(busy => {
            const busyStart = new Date(busy.start!);
            const busyEnd = new Date(busy.end!);
            return slotStart < busyEnd && slotEnd > busyStart;
        });
    });

    return new Response(JSON.stringify({ available }), {
        headers: { 'content-type': 'application/json' },
    });
};
