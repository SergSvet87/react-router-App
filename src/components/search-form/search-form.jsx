import { useState } from 'react';

// import { useInput } from '../../hooks/useInput'
import { Input } from './input';
import { Button } from './button';

import './search-form.scss';

export const SearchForm = ({ lessonsQuery, setSearchParams }) => {
  const [textSearch, setTextSearch] = useState(lessonsQuery);
  const [textSearchBlur, setTextInputBlur] = useState(false);
  const [textSearchError, setTextInputError] = useState(
    'The search field cannot be empty!'
  );

  const onChangeHandler = (e) => {
    let valueInput = e.target.value;

    setTextSearch(valueInput);

    if (valueInput.length < 1 || valueInput.length > 10) {
      setTextInputError('Incorrect name length!');

      if (!valueInput) {
        setTextInputError('The search field cannot be empty!');
      }
    } else {
      setTextInputError('');
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const query = textSearch;

    const params = {};

    if (query.length) params.lessons = query;
    setSearchParams(params);
    setTextSearch('');

    setTextInputBlur(true);
  };

  // React.useEffect(() => {
  //   if (textSearchError) {
  //     setButtonValid(false);
  //   } else {
  //     setButtonValid(true);
  //   }
  // }, [textSearchError]);

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
        onChange={onChangeHandler}
        // onBlur={onBlurHandler}
      />
      {textSearchBlur && textSearchError && (
        <h6 style={{ color: 'orangered', marginBottom: '15px' }}>
          {textSearchError}
        </h6>
      )}

      <Button className="form__btn" type="submit" text="Search" />
    </form>
  );
};
