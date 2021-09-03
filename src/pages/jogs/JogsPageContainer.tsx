import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { actionsCommon } from '../../redux/commonReducer';
import JogsPage from './JogsPage';
import { PropsTypeContainer as PropsType } from './types';

const JogsPageContainer: React.FC<PropsType> = (props) => {
  const { common } = props;
  const { isFilterActive } = common;

  return <JogsPage isFilterActive={isFilterActive} />;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    common: state.common,
  };
};

export default compose<React.ComponentType>(connect(mapStateToProps, { ...actionsCommon }))(
  JogsPageContainer
);
