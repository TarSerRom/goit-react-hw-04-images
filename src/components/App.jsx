import React, { useState, useEffect } from 'react';
import fetchImages from 'services/apiService';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';
import { ToastContainer } from 'react-toastify';


function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchGallary = async () => {
      try {
        const request = await fetchImages(query, page);
        if (request.length === 0) {
          return setError(`No results were found for ${query}!`);
        }
        setImages(prevImages => [...prevImages, ...request]);
      } catch (error) {
        setError('Something went wrong. Try again.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchGallary();
  }, [page, query]);

  const renderImages = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
    setIsLoading(true);
  };

  const onLoadMore = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);
   
  };

  const onOpenModal = e => {
    setLargeImageURL(e.target.dataset.source);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  

  return (
    <div>
      <Searchbar onHandleSubmit={renderImages} />

      {isLoading && <Loader />}

      {images.length > 0 && !error && (
        <ImageGallery images={images} onOpenModal={onOpenModal} />
      )}

      {!isLoading && images.length > 0 && !error && (
        <Button onLoadMore={onLoadMore} />
      )}
      {images.length === 0 ? (
        <div>
          <p>По запросу</p>
          <p>{query}</p>
          <p>ничего не найдено</p>
        </div>
      ) : null}
      {showModal && (
        <Modal onToggleModal={toggleModal} largeImageURL={largeImageURL} />
      )}

      <ToastContainer />
      </div>
  );
}

export default App;
