import { useState } from 'react';

import { LESSONS_URL } from '../../utils/urls';
import { useFetchGetData } from '../../hooks/useFetchGetData';
import { ErrorMessage } from '../error/ErrorMessage';
import { Loader } from '../loader/loader';
import { Input } from './input';
import { Button } from './button';

import './search-form.scss';

export const SearchForm = ({ setLessons }) => {
  const [textSearch, setTextSearch] = useState('');
  const [textSearchBlur, setTextInputBlur] = useState(false);
  const [textSearchError, setTextInputError] = useState(
    'The search field cannot be empty!'
  );

  const { response, loading, error, errorMessage } = useFetchGetData(
    LESSONS_URL + textSearch
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (e.target.value < 1 || e.target.value > 10) {
      setTextInputError('The password is not correct');

      if (!e.target.value) {
        setTextInputError('The password field cannot be empty!');
      }
    } else {
      setTextInputError('');
    }

    setLessons(response);
    setTextSearch('');

    setTextInputBlur(true);

    if (response) {
      return response;
    }
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <label htmlFor="form-input_text">
        Enter the name or title of the lesson
      </label>
      <Input
        className="form__input-search"
        id="input-search"
        name="input-search"
        type="search"
        placeholder="Enter text"
        value={textSearch}
        onChange={(e) => setTextSearch(e.target.value)}
      />
      {!response && textSearchError
        ? textSearchBlur &&
          textSearchError && (
            <h6 style={{ color: 'orangered', marginBottom: '15px' }}>
              {textSearchError}
            </h6>
          )
        : ''}
      <Button className="form__btn" type="submit" text="Search" />

      {loading ? <Loader /> : ''}

      {textSearch && error ? (
        <div className="form__error">
          {errorMessage} <ErrorMessage errorNumber={error.cause} />
        </div>
      ) : (
        ''
      )}
    </form>
  );
};
