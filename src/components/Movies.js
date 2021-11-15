import React, { useState } from 'react';

import MovieList from './MovieList';

function Movies(props) {
  return (
    <>
      {props.list.map((sear) => {
        return <MovieList seat={sear} />;
      })}
    </>
  );
}

export default Movies;
