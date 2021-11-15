import React, { useState } from 'react';

function Movies({ seat }) {
  const [movieClass, setMovieClass] = useState('');

  const seatHandler = (e) => {
    if (e.target.className === 'seat ') {
      setMovieClass('selected');
    } else {
      setMovieClass('');
    }
  };

  return (
    <div
      onClick={seatHandler}
      className={seat == 1 ? 'seat ' + movieClass : 'seat occupied'}
    ></div>
  );
}

export default Movies;
