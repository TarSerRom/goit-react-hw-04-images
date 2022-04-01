import React from 'react';
import { createPortal } from 'react-dom';
import  {Audio} from 'react-loader-spinner';
import './Loader.css'

const loaderRef = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <div className="LoaderBars">
      <Audio
    height="100"
    width="100"
    color='blue'
    ariaLabel='loading'
  />
    </div>,
    loaderRef,
  );
};

export default Loader;