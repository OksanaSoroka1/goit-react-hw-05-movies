import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Fragment } from 'react';
import { Navigation } from './components/Navigation';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./viewes/MoviesPage/MovieDetailsPage'),
);
const Cast = lazy(() => import('./viewes/MoviesPage/Cast'));
const Reviews = lazy(() => import('./viewes/MoviesPage/Reviews'));

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
