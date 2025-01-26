export async function POST(request: Request) {
  const url = new URL(request.url);
  const targetPath = url.pathname.replace('/api/', '');
  const targetUrl = `https://geese.bananotes.com/${targetPath}?${url.search}`;
  const body = await request.json();
  console.log(body);
  const response = await fetch(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: JSON.stringify(body),
  });

  return response;
}

// Handle all HTTP methods
export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const targetPath = url.pathname.replace('/api/', '');
  const targetUrl = `https://geese.bananotes.com/${targetPath}?${url.search}`;
  const response = await fetch(targetUrl, {
    method: request.method,
    headers: request.headers,
  });

  return response;
};
export const PUT = POST;
export const DELETE = POST;
export const PATCH = POST;
