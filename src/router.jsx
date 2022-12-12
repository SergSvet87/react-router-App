import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PATHS } from './utils/urls';
import { Layout } from './components/layout';
import { Loader } from './components/loader/loader';
import { loaderLessons } from './utils/loaderLessons';
// import { loaderLesson } from './utils/loaderLesson';

import { ErrorPage } from './pages/error-page';
import { SearchPage } from './pages/search-page';
import { LessonsPage } from './pages/lessons-page';
import { LessonInfoPage } from './pages/lesson-info-page';
import { NotFoundPage } from './pages/not-found-page';

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
      {
        path: PATHS.lessons(),
        element: <LessonsPage />,
        loader: loaderLessons,
      },
      {
        path: PATHS.lesson(),
        element: <LessonInfoPage />,
        loader: loaderLessons,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const App = () => (
  <RouterProvider router={router} fallbackElement={<Loader />}></RouterProvider>
);
