import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { actionsCommon } from '../../redux/commonReducer';
import JogsPage from './JogsPage';
import { PropsTypeContainer as PropsType } from './types';

const JogsPageContainer: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();
  const { common } = props;
  const { isFilterActive, jogs, isAwait, isSuccessSendJog } = common;

  useEffect(() => {
    if (isSuccessSendJog) {
      dispatch(actionsCommon.setSendJogFlag(false));
    }
    dispatch(actionsCommon.setAwaitFlag(true));
    dispatch(actionsCommon.asyncGetJogs());
    dispatch(actionsCommon.setAwaitFlag(false));
  }, []);

  return <JogsPage isFilterActive={isFilterActive} jogs={jogs} isAwait={isAwait} />;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    common: state.common,
  };
};

export default compose<React.ComponentType>(connect(mapStateToProps, { ...actionsCommon }))(
  JogsPageContainer
);
