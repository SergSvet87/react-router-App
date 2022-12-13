import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { LessonInfo } from '../components/lesson-info/lesson-info';

export const LessonInfoPage = () => {
  const lesson = useLoaderData();

  return (
    <section id="lesson-info" className="lesson-info">
      <h2 className="title-h2">Lesson Info</h2>

      <LessonInfo lesson={lesson} />
    </section>
  );
};
