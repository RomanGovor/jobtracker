import React from 'react';
import './filterPanel.scss';
import { PropsType } from './types';

const FilterPanel: React.FC<PropsType> = (props) => {
  const { isFilterActive } = props;

  return (
    <section className={isFilterActive ? 'filter-panel' : 'filter-panel filter-panel__dnone'}>
      <div className="filter-panel__section">
        <label className="filter-panel__label">Date from</label>
        <input className="filter-panel__input" />
      </div>
      <div className="filter-panel__section">
        <label className="filter-panel__label">Date to</label>
        <input className="filter-panel__input" />
      </div>
    </section>
  );
};

export default FilterPanel;
