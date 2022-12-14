import { createBrowserRouter } from 'react-router-dom';

import { PATHS } from './utils/urls';
import { loaderLesson } from './utils/loaderLesson';
import { Layout } from './components/layout';

import { ErrorPage } from './components/pages/error-page';
import { SearchPage } from './components/pages/search-page';
import { LessonInfoPage } from './components/pages/lesson-info-page';
import { NotFoundPage } from './components/pages/not-found-page';

export const router = createBrowserRouter([
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
        path: PATHS.lesson(),
        element: <LessonInfoPage />,
        loader: loaderLesson,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
