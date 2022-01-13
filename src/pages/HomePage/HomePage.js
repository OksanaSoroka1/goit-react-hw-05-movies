import { filmTrendSearchApi } from '../../api/api';
import { useState, useEffect } from 'react';
import { FilmList } from '../../components/FilmsList';

const HomePage = () => {
  const [trendingArr, setTrendingArr] = useState([]);
  useEffect(() => {
    filmTrendSearchApi()
      .then(filmArr => {
        setTrendingArr(filmArr);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section>
      <h2>The trending films of the day</h2>
      {trendingArr.length > 0 && (
        <FilmList filmArr={trendingArr} path={'movies/'} />
      )}
    </section>
  );
};
export default HomePage;
