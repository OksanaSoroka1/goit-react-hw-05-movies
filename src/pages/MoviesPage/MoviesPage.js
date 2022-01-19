import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchBar } from '../../components/Searchbar';
import { filmByNameSearchApi } from '../../api/api';
import { FilmList } from '../../components/FilmsList';

const MoviesPage = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    const searchMarkup = new URLSearchParams(location.search).get(`searchFilm`);
    if (searchMarkup !== null) {
      setSearch(searchMarkup);
    }
  }, []);

  useEffect(() => {
    if (location.search === '') {
      setFilmList([]);
      setSearch('');
    }
  }, [location]);

  useEffect(() => {
    if (search === '') {
      return;
    }
    filmByNameSearchApi(search)
      .then(arr => {
        if (arr.length > 0) {
          setFilmList(arr);
        }
      })
      .then(navigate({ ...location, search: `searchFilm=${search}` }))
      .catch(error => {
        alert(error.message);
      });
  }, [search]);

  function onSearchSubmit(data) {
    setSearch(data);
  }
  return (
    <section>
      <SearchBar onSubmit={onSearchSubmit} />
      <FilmList filmArr={filmList} path={''} />
    </section>
  );
};

export default MoviesPage;
