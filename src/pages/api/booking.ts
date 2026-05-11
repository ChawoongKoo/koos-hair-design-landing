import type {APIRoute} from 'astro';
export const prerender = false;

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
    console.log('Content-Type:', request.headers.get('content-type'));
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    console.log({
        name: formData.get('firstName')
    });
    // Process the form data here
    return new Response( JSON.stringify(data),
        {headers: {'content-type': 'application/json'}}
    );
};