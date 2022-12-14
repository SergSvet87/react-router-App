import { useState, useEffect } from 'react';

export const useFetchGetData = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        if (res.status === 404) {
          throw new Response('Not Found', { status: 404 });
        }

        if (res.status === 500) {
          throw new Error('Try again!', { status: 500 });
        }

        throw new Error('Oh, No!!! Something went wrong: 💥!!!', {
          cause: res.status,
        });
      })
      .then((data) => {
        setResponse(data);
        setError(null);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
        setErrorMessage(e.message);
      });
  }, [url]);

  return { response, loading, error, errorMessage };
};
