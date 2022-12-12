import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import { LessonInfo } from '../components/lesson-info/lesson-info';

export const LessonInfoPage = () => {
  const lesson = useLoaderData();
  const nameLesson = useParams();
  console.log(lesson);
  console.log(nameLesson);

  return (
    <section id="lesson-info" className="lesson-info">
      <h2 className="title-h2">Lesson Info</h2>

      {lesson ? <LessonInfo lesson={lesson} /> : ''}
    </section>
  );
};
