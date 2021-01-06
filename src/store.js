import { createStore } from "redux";
import axios from "axios";

const initialMovies = async () => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(
    "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
  );
};

export const moviesReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case "LOADING":
      return { isLoading: false, movies: [...state.movies] };
    default:
      return state;
  }
};

const store = createStore(moviesReducer);

export default store;
