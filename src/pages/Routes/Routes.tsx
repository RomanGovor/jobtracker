import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PropsType } from './types';
import JogsPageContainer from '../jogs/JogsPageContainer';
import Login from '../Login/Login';
import Info from '../Info/Info';
import NothingPage from '../Nothing/NothingPage';
import CreateJog from '../CreateJog/CreateJog';

const Routes: React.FC<PropsType> = (props) => {
  const { isLogin, uuid, isSuccessSendJog } = props;

  return (
    <Switch>
      <Route
        exact
        path="/info"
        render={() => (isLogin ? <Info /> : <Login uuid={uuid} isLogin={isLogin} />)}
      />
      <Route
        exact
        path="/create-jog"
        render={() =>
          isLogin ? (
            <CreateJog isSuccessSendJog={isSuccessSendJog} />
          ) : (
            <Login uuid={uuid} isLogin={isLogin} />
          )
        }
      />
      <Route
        exact
        path="/jogs"
        render={() => (isLogin ? <JogsPageContainer /> : <Login uuid={uuid} isLogin={isLogin} />)}
      />
      <Route
        exact
        path="/nothing"
        render={() => (isLogin ? <NothingPage /> : <Login uuid={uuid} isLogin={isLogin} />)}
      />
      <Route
        exact
        path="/*"
        render={() =>
          isLogin ? <Redirect to="/nothing" /> : <Login uuid={uuid} isLogin={isLogin} />
        }
      />
    </Switch>
  );
};

export default Routes;
