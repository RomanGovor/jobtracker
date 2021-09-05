import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './createJog.scss';
import { useDispatch } from 'react-redux';
import exitIcon from '../../assets/images/exit.svg';
import { actionsCommon } from '../../redux/commonReducer';
import { jogType } from '../../types';
import { PropsType } from './types';

const CreateJog: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const { isSuccessSendJog } = props;

  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>, setState: any) => {
    setState(e.target.value);
  };

  const onSubmitClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const jog = {
      distance: Number(distance),
      time: Number(time),
      date,
    } as jogType;

    dispatch(actionsCommon.asyncPostJog(jog));
  };

  return (
    <section className="create-jog">
      <div className="create-jog__exit">
        <Link to="/jogs">
          <img src={exitIcon} alt="exit" />
        </Link>
      </div>
      <form className="create-jog__form">
        <div className="create-jog__form-field">
          <label className="create-jog__form-field__label">Distance</label>
          <input
            className="create-jog__form-field__input"
            type="text"
            onChange={(e) => onInputValueChange(e, setDistance)}
          />
        </div>
        <div className="create-jog__form-field">
          <label className="create-jog__form-field__label">Time</label>
          <input
            className="create-jog__form-field__input"
            type="text"
            onChange={(e) => onInputValueChange(e, setTime)}
          />
        </div>
        <div className="create-jog__form-field">
          <label className="create-jog__form-field__label">Date</label>
          <input
            className="create-jog__form-field__input"
            type="date"
            onChange={(e) => onInputValueChange(e, setDate)}
          />
        </div>
        <div>
          <button className="create-jog__form__submit" type="submit" onClick={onSubmitClick}>
            Save
          </button>
        </div>
      </form>
      {isSuccessSendJog && <Redirect to="/jogs" />}
    </section>
  );
};

export default CreateJog;
