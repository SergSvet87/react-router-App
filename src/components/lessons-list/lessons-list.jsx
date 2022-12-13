// import { useState, useEffect } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';

import { PATHS } from '../../utils/urls';
import { Lesson } from './lesson';

import './lessons-list.scss';

export const LessonsList = () => {
  const lessons = useLoaderData();
  const nameLesson = useParams();
  const data = localStorage.setItem('lessons', JSON.stringify(lessons));

  return (
    <ul className="list">
      {lessons.map((lesson, index) => (
        <li className="list__item lesson" key={index}>
          <NavLink to={PATHS.lesson(lesson.name)}>
            <Lesson lesson={lesson} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
