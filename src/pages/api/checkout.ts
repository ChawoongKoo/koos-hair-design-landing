import type {APIRoute} from 'astro';

export const GET: APIRoute = () => {
    let x = 2;
    return new Response(
        JSON.stringify({
            message: (x**2) * Math.PI
        }),
        {headers: {'Content-Type': 'application/json'}}
    )
};
