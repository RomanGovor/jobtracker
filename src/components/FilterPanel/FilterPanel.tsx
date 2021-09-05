import React from 'react';
import './filterPanel.scss';
import { PropsType } from './types';

const FilterPanel: React.FC<PropsType> = (props) => {
  const { isFilterActive, setToDate, setFromDate } = props;

  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>, setState: any) => {
    setState(new Date(e.target.value).getTime() / 1000);
  };

  return (
    <section className={isFilterActive ? 'filter-panel' : 'filter-panel filter-panel__dnone'}>
      <div className="filter-panel__section">
        <label className="filter-panel__label">Date from</label>
        <input
          className="filter-panel__input"
          onChange={(e) => onInputValueChange(e, setFromDate)}
        />
      </div>
      <div className="filter-panel__section">
        <label className="filter-panel__label">Date to</label>
        <input className="filter-panel__input" onChange={(e) => onInputValueChange(e, setToDate)} />
      </div>
    </section>
  );
};

export default FilterPanel;
