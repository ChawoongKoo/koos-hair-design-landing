export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = () => {
  let x = 2;
  return new Response(
    JSON.stringify({
      message: x ** 2 * Math.PI
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
const POST = async ({ request }) => {
  console.log("Content-Type:", request.headers.get("content-type"));
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  console.log({
    name: formData.get("firstName")
  });
  return new Response(
    JSON.stringify(data),
    { headers: { "content-type": "application/json" } }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
