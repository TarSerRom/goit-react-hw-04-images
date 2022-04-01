import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Searchbar.css';

function Searchbar({ onHandleSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.info('Please enter a value for search images!');
    }
    onHandleSubmit(query);
    setQuery('');
  };

  const handleChangeQuery = ({ target }) => {
    setQuery(target.value);
  };
  return (
        <header className="Searchbar">
          <form onSubmit={handleSubmit} className="SearchForm">
            <button
              type="submit"
              className="SearchForm-button"
              //onClick={handleSubmit}
            >
              <span className="SearchForm-button-label">Search</span>
            </button>
  
            <input
              className="SearchForm-input"
              type="text"
              placeholder="Search images and photos"
              name="imageSearch"
              value={query}
              onChange={handleChangeQuery}
            />
          </form>
        </header>
      );
}
Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

export default Searchbar;