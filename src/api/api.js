const key = 'b6be36a5da27d5ea7b8b28c63f72e28e';

const filmTrendSearchApi = () => {
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
    .then(responce => {
      return responce.json();
    })
    .then(responce => {
      return responce.results;
    });
};

const filmByNameSearchApi = search => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&query=${search}&include_adult=false`,
  )
    .then(responce => {
      return responce.json();
    })
    .then(responce => {
      if (responce.results.length === 0) {
        return Promise.reject(new Error('Nothing was founded'));
      }
      return responce.results;
    });
};

const detailsMovieSearchApi = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,
  )
    .then(responce => {
      return responce.json();
    })
    .then(responce => {
      return responce;
    });
};

const castSearchApi = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`,
  )
    .then(responce => {
      return responce.json();
    })
    .then(responce => {
      return responce.cast;
    });
};
const reviewsSearchApi = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`,
  )
    .then(responce => {
      return responce.json();
    })
    .then(responce => {
      return responce.results;
    });
};
export {
  filmTrendSearchApi,
  filmByNameSearchApi,
  detailsMovieSearchApi,
  castSearchApi,
  reviewsSearchApi,
};
