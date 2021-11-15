import React, { useState } from 'react';
import Movies from './components/Movies';
import './style.css';

function App() {
  const [seatList, setSeatList] = useState([
    [1, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1],
  ]);

  return (
    <>
      <div className="movie-container">
        <label htmlFor="movie">Pick a movie:</label>
        <select name="movie">
          <option value="10">Shang Chi ($10)</option>
          <option value="12">Red Notice ($12)</option>
          <option value="8">Eternals ($8)</option>
        </select>
      </div>
      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>N/A</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>

      <div className="container">
        <div className="screen"></div>

        <div className="row">
          <Movies list={seatList[0]} />
        </div>
        <div className="row">
          <Movies list={seatList[1]} />
        </div>
        <div className="row">
          <Movies list={seatList[2]} />
        </div>
        <div className="row">
          <Movies list={seatList[3]} />
        </div>
        <div className="row"></div>
        <div className="row">
          <Movies list={seatList[4]} />
        </div>
      </div>
    </>
  );
}

export default App;
