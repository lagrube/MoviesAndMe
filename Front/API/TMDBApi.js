import axios from "axios";

const API_TOKEN = "15b88cd7d9dcf1c9a2eebab76150f223";

export function getFilmsFromApiWithSearchedText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text +
    "&page=" +
    page;
  return (
    axios(url)
      // .then((res) => console.log(res))
      .catch((error) => console.error(error))
  );
}

export function getImageFromApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name;
}
