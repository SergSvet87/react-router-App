import { LESSONS_URL } from "./urls";

export const loaderLessons = async ({ request }) => {
  // const url = new URL(request.url);
  // const searchTerm = url.searchParams.get(`lessons=${textSearch}`);
  const res = await fetch(LESSONS_URL + 'react');

  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }

  if (res.status === 500) {
    throw new Error("Try again!", { status: 500 });
  }

  if (res.status !== 200) {
    throw new Error('Oh, No!!! Something went wrong: 💥!!!', {
      cause: res.status,
    })
  }

  if (res.status === 200) {
    return res.json();
  }
}
