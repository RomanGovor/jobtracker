import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PropsType } from './types';
import JogsPageContainer from '../jogs/JogsPageContainer';
import Login from '../Login/Login';

const Routes: React.FC<PropsType> = (props) => {
  const { isLogin, uuid } = props;

  return (
    <Switch>
      <Route
        exact
        path="/jogs"
        render={() => (isLogin ? <JogsPageContainer /> : <Login uuid={uuid} isLogin={isLogin} />)}
      />
      <Route
        exact
        path="/"
        render={() => (isLogin ? <Redirect to="/jogs" /> : <Login uuid={uuid} isLogin={isLogin} />)}
      />
    </Switch>
  );
};

export default Routes;
