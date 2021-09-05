import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { PropsTypeJogs as PropsType } from './types';
import './jogsContainer.scss';
import Jog from './Jog/Jog';
import jogBtnIcon from '../../assets/images/add-jog-btn.svg';

const JogsPage: React.FC<PropsType> = (props) => {
  const { isFilterActive, jogs, isAwait, setFromDate, setToDate, isFiltersWriting } = props;

  return (
    <>
      <FilterPanel
        isFilterActive={isFilterActive}
        setToDate={setToDate}
        setFromDate={setFromDate}
      />
      <section className="jogs-container">
        {jogs.map((jog) => (
          <Jog jog={jog} key={jog.id} />
        ))}
      </section>
      <div className="create-jog-btn">
        <Link to="/create-jog">
          <img src={jogBtnIcon} alt="add jog" />
        </Link>
      </div>
      {!jogs.length && !isAwait && !isFiltersWriting && <Redirect to="/nothing" />}
    </>
  );
};

export default JogsPage;
