import React from 'react';
import moment from 'moment';
import './jog.scss';
import { PropsType } from './types';

const Jog: React.FC<PropsType> = (props) => {
  const { jog } = props;
  const { distance, time, date } = jog;
  const speed = time ? distance / time : 0;

  return (
    <div className="jog">
      <div className="jog__img" />
      <div className="jog__text">
        <p className="jog__date jog__info">{moment(new Date(date * 1e3)).format('MM.DD.YYYY')}</p>
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
