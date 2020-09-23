import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from '../pages/404';
import CharacterPage from '../pages/Character';
import DetailCharacterPage from '../pages/DetailCharacter';
import MoviePage from '../pages/Movie';

const Navigation = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <MoviePage />
      </Route>
      <Route exact path='/character'>
        <CharacterPage />
      </Route>
      <Route path='/character/:id'>
        <DetailCharacterPage />
      </Route>
      <Route path='*'>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Navigation;
