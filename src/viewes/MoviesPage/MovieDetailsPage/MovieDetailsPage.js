import { useParams, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { detailsMovieSearchApi } from '../../../api/api';
import { useEffect, useState } from 'react';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const params = useParams();
  const [film, setFilm] = useState({});
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    detailsMovieSearchApi(params.movieId)
      .then(responce => {
        setFilm(responce);
        setGenres(responce.genres);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function onBackBtnClick() {
    navigate(-1);
  }

  return (
    <section>
      <button className={css.button} type="button" onClick={onBackBtnClick}>
        Go back
      </button>
      <h2 className={css.title}>{film.original_title}</h2>
      <div className={css.information}>
        <div className={css.thumb}>
          {film.poster_path && (
            <img
              className={css.poster}
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt="film poster"
              width="250px"
            />
          )}
        </div>
        <div>
          <p className={css.vote}>vote_average {film.vote_average}</p>
          <h3 className={css.overview}>Overview</h3>
          <p className={css.text}>{film.overview}</p>
          <p className={css.date}>release date {film.release_date}</p>
          <h4 className={css.genres}>Genres</h4>
          <ul className={css['genres-list']}>
            {genres.length > 0 &&
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={`cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`reviews`}>Reviews </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};
export default MovieDetailsPage;
