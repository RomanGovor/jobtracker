import React from 'react';
import moment from 'moment';
import './jog.scss';

const Jog: React.FC = () => {
  const speed = 454.43;
  const distance = 4646;
  const time = 'y56:4343';
  // const date = '45.32.1';

  return (
    <div className="jog">
      <div className="jog__img" />
      <div className="jog__text">
        <p className="jog__date jog__info">{moment(new Date(4 * 1e3)).format('MM.DD.YYYY')}</p>
        <p className="jog__info">
          <span className="jog__inside-text">Speed:</span> {speed.toPrecision(2)}
        </p>
        <p className="jog__info">
          <span className="jog__inside-text">Distance:</span> {distance} km
        </p>
        <p className="jog__info">
          <span className="jog__inside-text">Time:</span> {time} min
        </p>
      </div>
    </div>
  );
};

export default Jog;
