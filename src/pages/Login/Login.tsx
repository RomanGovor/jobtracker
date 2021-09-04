import React from 'react';
import './login.scss';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionsCommon } from '../../redux/commonReducer';
import { PropsType } from './types';

const Login: React.FC<PropsType> = (props) => {
  const { uuid, isLogin } = props;
  const dispatch = useDispatch();

  const onLoginBtnClick = () => {
    dispatch(actionsCommon.asyncGetAuthenticationToken(uuid));
  };

  return (
    <section className="login__wrapper">
      <div className="login">
        <button type="button" onClick={onLoginBtnClick} className="login__button">
          Let me in
        </button>
      </div>
      {isLogin && <Redirect to="/jogs" />}
    </section>
  );
};

export default Login;
