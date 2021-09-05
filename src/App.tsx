import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import { actionsCommon, InitialStateType as CommonStateType } from './redux/commonReducer';
import { AppStateType } from './redux/store';
import Routes from './pages/Routes/Routes';
import { getAccessTokenFromStorage } from './utils/storage';

type PropsType = {
  common: CommonStateType;
};

const App: React.FC<PropsType> = (props) => {
  const { common } = props;
  const { isFilterActive, isLogin, uuid, isSuccessSendJog } = common;
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAccessTokenFromStorage();
    dispatch(actionsCommon.setUserToken(token));
    dispatch(actionsCommon.asyncCheckOnTokenValid());
  }, []);

  return (
    <div className="App">
      <NavBar isFilterActive={isFilterActive} isLogin={isLogin} />
      <main>
        <Routes isLogin={isLogin} uuid={uuid} isSuccessSendJog={isSuccessSendJog} />
      </main>
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => {
  return {
    common: state.common,
  };
};

export default compose<React.ComponentType>(connect(mapStateToProps, { ...actionsCommon }))(App);
