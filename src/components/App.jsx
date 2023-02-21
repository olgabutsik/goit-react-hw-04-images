import React, { useState, useEffect } from 'react';
import { fetchPhotosByQuery } from 'services/api';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallerry/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import css from './APP.module.css';

export function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [photos, setPhotos] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [modal, setModal] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const { hits, totalHits } = await fetchPhotosByQuery(query, page);
        setPhotos(hits);
        setShowLoadMore(page < Math.ceil(totalHits / 20));
      } catch (error) {
        setError('No photos found!!!');
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchPhotos();
    }
  }, [query, page]);

  const onSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setLoading(false);
    setError('');
    setPhotos([]);
    setTotalHits(0);
    setLargeImageURL('');
    setModal(false);
    setShowLoadMore(false);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const handleClickPhoto = largeImageURL => {
    setLargeImageURL(largeImageURL);
    setModal(true);
  };

  const onCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      {loading && <Loader />}
      <div className={css.App}>
        <SearchBar onSubmit={onSubmit} />
        {error && <p>{error}</p>}
        {photos.length > 0 ? (
          <ImageGallery photos={photos} onClickPhoto={handleClickPhoto} />
        ) : null}
        {showLoadMore && <Button onLoad={handleLoadMore} />}
        {modal && (
          <Modal largeImageURL={largeImageURL} onCloseModal={onCloseModal} />
        )}
      </div>
    </>
  );
}
