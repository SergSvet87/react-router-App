// import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import { LessonsList } from '../components/lessons-list/lessons-list';

export const LessonsPage = () => {
  const lessons = useLoaderData();

  return (
    <section id="lessons" className="lessons">
      <h2 className="title-h2">Lessons List</h2>

      <LessonsList lessons={lessons} />
    </section>
  );
};
