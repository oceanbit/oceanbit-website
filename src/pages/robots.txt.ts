export const GET = () => {
  const body = `
User-agent: *
Disallow: /
`.trim();

  return new Response(body);
};
