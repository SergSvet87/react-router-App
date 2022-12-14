export const PATHS = {
  home: '/',
  // lessons: (textSearch = null) => (textSearch ? `lesson=${textSearch}` : 'lesson=react'),
  lesson: (nameLesson) => (nameLesson ? `lesson/${nameLesson}` : 'lesson/:nameLesson'),
};

export const LESSONS_URL = 'https://react-course-api.azurewebsites.net/lesson/';

export const CV = 'https://sergsvet87.github.io/My_RESUME/';

export const MY_PORTFOLIO = 'https://sergsvet87.github.io/My_Portfolio/';

