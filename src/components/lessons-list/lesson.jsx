import React from 'react';
import { Link } from 'react-router-dom';

import './lesson.scss';

export const Lesson = ({ lesson }) => {
  return (
    <>
      <div className="lesson__description">
        <h2 className="lesson__title">{lesson.title}</h2>
        <p className="lesson__published">
          {lesson.published ? 'Published' : 'Unpublished'}
        </p>
      </div>
      <h5>
        <i>{lesson.name}</i>
      </h5>
      <p className="lesson__type">{lesson.type}</p>
      {lesson.youtube ? (
        <Link
          className="lesson__link"
          to={lesson.youtube}
          target="_blank"
          rel="noreferrer"
        >
          Youtube link
        </Link>
      ) : (
        'Link under development'
      )}
    </>
  );
};
