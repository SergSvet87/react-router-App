import { React } from 'react';
import { Link } from 'react-router-dom';

import './lesson-info.scss';

export const LessonInfo = ({ lesson }) => {

  return (
    <div className="container">
      <div className="lesson-info__description">
        <div className="lesson-info__top">
          <h5>
            <i>{lesson.name}</i>
          </h5>
          <p className="lesson-info__type">{lesson.type}</p>
        </div>
        <h2 className="lesson-info__title">{lesson.title}</h2>
        <p className="lesson-info__published">
          {lesson.published ? 'Published' : 'Unpublished'}
        </p>
      </div>

      {lesson.youtube ? (
        <Link
          className="lesson-info__link"
          to={lesson.youtube}
          target="_blank"
          rel="noreferrer"
        >
          Youtube link
        </Link>
      ) : (
        'Link under development'
      )}
    </div>
  );
};
