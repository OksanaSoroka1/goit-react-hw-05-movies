import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { castSearchApi } from '../../../api/api';
import { CastList } from './castList';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const params = useParams();

  useEffect(() => {
    castSearchApi(params.movieId)
      .then(responce => {
        setCastList(responce);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <h2>Cast</h2>
      <ul>
        <CastList castArr={castList} />
      </ul>
    </section>
  );
};
export default Cast;
