import React from 'react';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { PropsTypeJogs as PropsType } from './types';

const JogsPage: React.FC<PropsType> = (props) => {
  const { isFilterActive } = props;

  return (
    <>
      <FilterPanel isFilterActive={isFilterActive} />
    </>
  );
};

export default JogsPage;
