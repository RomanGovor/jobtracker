import React, { useEffect, useMemo, useState } from 'react';
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

  const [filterJogs, setFilterJogs] = useState([...jogs]);
  const [isFiltersWriting, setFiltersWriting] = useState(false);
  const [fromDate, setFromDate] = useState(0);
  const [toDate, setToDate] = useState(new Date().getTime() / 1000);

  useMemo(() => {
    if (toDate && fromDate) {
      setFiltersWriting(true);
      const filteredJogs = jogs.filter((jog) => {
        const { date } = jog;
        return Number(date) >= fromDate && Number(date) <= toDate;
      });
      setFilterJogs([...filteredJogs]);
    } else {
      setFiltersWriting(false);
      setFilterJogs([...jogs]);
    }
  }, [toDate, fromDate, jogs]);

  useEffect(() => {
    if (isSuccessSendJog) {
      dispatch(actionsCommon.setSendJogFlag(false));
    }
    dispatch(actionsCommon.setAwaitFlag(true));
    dispatch(actionsCommon.asyncGetJogs());
    dispatch(actionsCommon.setAwaitFlag(false));
  }, []);

  return (
    <JogsPage
      isFilterActive={isFilterActive}
      jogs={filterJogs}
      isAwait={isAwait}
      setFromDate={setFromDate}
      setToDate={setToDate}
      isFiltersWriting={isFiltersWriting}
    />
  );
};

const mapStateToProps = (state: AppStateType) => {
  return {
    common: state.common,
  };
};

export default compose<React.ComponentType>(connect(mapStateToProps, { ...actionsCommon }))(
  JogsPageContainer
);
