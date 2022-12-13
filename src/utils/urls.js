export const PATHS = {
  home: '/',
  lessons: (textSearch = null) => (textSearch ? `lessons=${textSearch}` : 'lessons=react'),
  lesson: (nameLesson) => (nameLesson ? `lessonName:${nameLesson}` : 'lessonName:lessonName'),
};

export const LESSONS_URL = 'https://react-course-api.azurewebsites.net/lesson/';

export const CV = 'https://sergsvet87.github.io/My_RESUME/';

export const MY_PORTFOLIO = 'https://sergsvet87.github.io/My_Portfolio/';