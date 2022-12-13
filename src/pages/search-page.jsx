import { useSearchParams } from 'react-router-dom';
import { LessonsList } from '../components/lessons-list/lessons-list';

import { SearchForm } from '../components/search-form/search-form';

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lessonsQuery = searchParams.get('lessons') || '';

  return (
    <section id="search-form" className="search-form">
      <h2 className="title-h2">Search Lesson</h2>
      <SearchForm
        lessonsQuery={lessonsQuery}
        setSearchParams={setSearchParams}
      />
      {searchParams ? <LessonsList /> : null}
    </section>
  );
};
