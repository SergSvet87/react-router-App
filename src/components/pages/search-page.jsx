import { useState } from 'react';
import { LessonsList } from '../lessons-list/lessons-list';

import { SearchForm } from '../search-form/search-form';

export const SearchPage = ({ data }) => {
  const [lessons, setLessons] = useState(data);
  return (
    <section id="search-form" className="search-form">
      <h2 className="title-h2">Search Lesson</h2>
      <SearchForm setLessons={setLessons} />
      {lessons ? <LessonsList lessons={lessons} /> : ''}
    </section>
  );
};
