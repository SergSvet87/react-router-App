import { LESSONS_URL } from "./urls";

export const loaderLesson = (data) => {
  return fetch(LESSONS_URL + data.params.nameLesson)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      if (res.status === 404) {
        throw new Error('Oh, No!!! Not Found! 💥')
      }

      if (res.status === 500) {
        throw new Error('Oh, No!!! Try again! 💥')
      }

      if (res.status === 502) {
        throw new Error('Oh, No!!! Bad Gateway failed! 💥')
      }

      throw new Error('Oh, No!!! Something went wrong: 💥')
    })
    .then((data) => data[0])
    .catch((err) => {
      console.log(err);
    })
}

