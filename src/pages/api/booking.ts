import type {APIRoute} from 'astro';
import { createClient } from '@supabase/supabase-js';
export const prerender = false;

const supabase = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_SERVER_ROLE_KEY
)

export const GET: APIRoute = () => {
    let x = 2;
    return new Response(
        JSON.stringify({
            message: (x**2) * Math.PI
        }),
        {headers: {'Content-Type': 'application/json'}}
    )
};

export const POST: APIRoute = async ({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    await supabase.from('bookings').insert({
        service: data.service,
        date: data.date,
        time: data.time,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone_number: data.phone_number,
        notes: data.notes
    });

    return new Response( JSON.stringify(data),
        {headers: {'content-type': 'application/json'}}
    );
};