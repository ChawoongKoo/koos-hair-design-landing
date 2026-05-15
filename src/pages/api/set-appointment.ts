import type {APIRoute} from 'astro';
import { google } from 'googleapis';
export const prerender = false;
console.log('trying to authenticate')
//authenticate service account
const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(import.meta.env.GOOGLE_SERVICE_ACCOUNT_KEY!), // or use env var
    // keyFile: './koos-wigs-7cac1743d5d3.json',
    // credentials: import.meta.env.GOOGLE_SERVICE_ACCOUNT_KEY!, // or use env var
    scopes: ['https://www.googleapis.com/auth/calendar'],
});
console.log('authenticated successfully')
export const POST: APIRoute = async ({request}) => {
    const { service, first_name, last_name, email, phone_number, date, time, notes } = await request.json();

    //create calendar object
    const calendar = google.calendar({ version: 'v3', auth });

    //create event
    //create end time first
    const [hours, minutes] = time.split(':').map(Number);
    const endTime = `${String(hours + 1).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    //insert the event into the calendar
    const res = await calendar.events.insert({
        calendarId: 'fa60ed19932a78ad53e6ceaf547a506a7967c35948656e0280368def2f9c86aa@group.calendar.google.com',
        requestBody: {
            summary: `${service} Appointment with ${first_name} ${last_name}`,
            description: `Name: ${first_name} ${last_name}\nEmail: ${email}\nPhone: ${phone_number}\nAdditional Notes: ${notes}`,
            start: {
                dateTime: `${date}T${time}:00`,
                timeZone: 'America/New_York',
            },
            end: {
                dateTime: `${date}T${endTime}:00`,
                timeZone: 'America/New_York',
            },
        },
    });

    return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'content-type': 'application/json' }
        });
};