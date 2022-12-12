// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { PATHS } from '../../utils/urls';
import { Lesson } from './lesson';

import './lessons-list.scss';

export const LessonsList = ({ lessons }) => {

  return (
    <ul className="list">
      {lessons.map((lesson, index) => (
        <li className="list__item lesson" key={index}>
          <NavLink to={PATHS.lesson(index)}>
            <Lesson lesson={lesson} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
