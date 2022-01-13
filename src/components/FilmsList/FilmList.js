import { Link } from 'react-router-dom';
import css from './FilmList.module.css';

const FilmList = ({ filmArr, path }) => {
  return (
    <>
      <ul>
        {filmArr.map(item => (
          <li key={item.id} className={css.item}>
            <Link to={`${path}${item.id}`} className={css.link}>
              {item.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export { FilmList };
