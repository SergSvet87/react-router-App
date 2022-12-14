import { React } from 'react';
import { Link } from 'react-router-dom';

import './lesson-info.scss';

export const LessonInfo = ({ lesson }) => {
  return (
    <div className="container lesson-info__container">
      <div className="lesson-info__description">
        <div className="lesson-info__top">
          <p className="lesson-info__published">
            {lesson.published ? 'Published' : 'Unpublished'}
          </p>
          <p className="lesson-info__type">{lesson.type}</p>
        </div>
        <h2 className="lesson-info__title title-h2">{lesson.title}</h2>
        <ul className="lesson-info__point">
          <h6 className="title-h6">Key Points:</h6>
          {lesson.keyPoints
            ? lesson.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))
            : 'Missing'}
        </ul>
      </div>
      <ul className="lesson-info__takeaways">
        <h6 className="title-h6">Takeaways:</h6>
        {lesson.takeaways
          ? lesson.takeaways.map((takeaways, index) => (
              <li key={index}>{takeaways}</li>
            ))
          : 'Missing'}
      </ul>
      <ul className="lesson-info__prerequisite">
        <h6 className="title-h6">Prerequisites:</h6>
        {lesson.prerequisite
          ? lesson.prerequisite.map((pre, index) => <li key={index}>{pre}</li>)
          : 'Missing'}
      </ul>

      {lesson.youtube ? (
        <Link
          className="lesson-info__link"
          to={lesson.youtube}
          target="_blank"
          rel="noreferrer"
        >
          Video link
        </Link>
      ) : (
        'Link under development'
      )}
    </div>
  );
};
