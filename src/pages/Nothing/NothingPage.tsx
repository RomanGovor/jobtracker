import React from 'react';
import { Link } from 'react-router-dom';
import './nothingPage.scss';

const NothingPage: React.FC = () => {
  return (
    <section className="nothing-page">
      <span className="nothing-page__text">Nothing is there</span>
      <Link to="/create-jog">
        <button className="nothing-page__button" type="button">
          Create your jog first
        </button>
      </Link>
    </section>
  );
};

export default NothingPage;
