import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import { actionsCommon, InitialStateType as CommonStateType } from './redux/commonReducer';
import { AppStateType } from './redux/store';
import JogsPageContainer from './pages/jogs/JogsPageContainer';

type PropsType = {
  common: CommonStateType;
};

const App: React.FC<PropsType> = (props) => {
  const { common } = props;
  const { isFilterActive } = common;

  return (
    <div className="App">
      <NavBar isFilterActive={isFilterActive} />
      <main>
        <JogsPageContainer />
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
