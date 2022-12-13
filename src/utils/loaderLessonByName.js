
export const loaderLessonByName = ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get(`/lessonName`);

  console.dir(request.url);
  console.log(searchTerm);
  const data = JSON.parse(localStorage.getItem('lessons'));
  const lesson = data.find((lesson) => lesson.name === searchTerm)
  return lesson
}
