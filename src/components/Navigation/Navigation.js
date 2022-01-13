import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigation}>
        <li className={css['navigation-item']}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css['link--active'] : css['link']
            }
          >
            Home
          </NavLink>
        </li>
        <li className={css['navigation-item']}>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? css['link--active'] : css['link']
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export { Navigation };
