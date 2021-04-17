import React from 'react';
import './Loader.styles.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <svg>
        <use href='img/icons.svg#icon-cw'></use>
      </svg>
    </div>
  );
};

export default Loader;
