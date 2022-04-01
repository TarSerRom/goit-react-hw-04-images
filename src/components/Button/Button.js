import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

export function Button({ onLoadMore}) {
  return (
    <button className="Button" type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
};