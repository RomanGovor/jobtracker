import React from 'react';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { PropsTypeJogs as PropsType } from './types';
import './jogsContainer.scss';
import Jog from './Jog/Jog';

const JogsPage: React.FC<PropsType> = (props) => {
  const { isFilterActive } = props;

  return (
    <>
      <FilterPanel isFilterActive={isFilterActive} />
      <section className="jogs-container">
        <Jog />
        <Jog />
        <Jog />
        <Jog />
        <Jog />
        <Jog />
      </section>
    </>
  );
};

export default JogsPage;
