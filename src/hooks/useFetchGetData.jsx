import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import { LESSONS_URL } from '../utils/urls';

export const useFetchGetData = () => {
  // const { params } = useParams();
  // const [response, setResponse] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // setLoading(true);

    fetch(LESSONS_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Oh, No!!! Something went wrong: 💥!!!', {
          cause: res.status,
        });
      })
  //     .then((data) => {
  //       setResponse(data);
  //       setError(null);
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       setLoading(false);
  //       setError(e);
  //       setErrorMessage(e.message);
  //     });
  }, []);

  // return { response, loading, error, errorMessage };
  return { };
};
