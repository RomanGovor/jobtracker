import React from 'react';
import { Redirect } from 'react-router-dom';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { PropsTypeJogs as PropsType } from './types';
import './jogsContainer.scss';
import Jog from './Jog/Jog';

const JogsPage: React.FC<PropsType> = (props) => {
  const { isFilterActive, jogs, isAwait } = props;

  return (
    <>
      <FilterPanel isFilterActive={isFilterActive} />
      <section className="jogs-container">
        {jogs.map((jog) => (
          <Jog jog={jog} key={jog.id} />
        ))}
      </section>
      {!jogs.length && !isAwait && <Redirect to="/nothing" />}
    </>
  );
};

export default JogsPage;
