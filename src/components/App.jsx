import React, { useState } from 'react';
import { fetchPhotosByQuery } from 'services/api';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallerry/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import css from './APP.module.css';

export function App() {
  const [photos, setPhotos] = useState([]);
  const [page] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState('');
  // const [largeImageURL, setLargeImageURL] = useState('');

  const getData = async query => {
    setIsLoading(true);
    const data = await fetchPhotosByQuery(query, page);
    setIsLoading(false);
    setPhotos(data);
  };
  const handleClickPhoto = () => {};
  const handleButton = () => {};

  return (
    <div className={css.App}>
      <SearchBar onSubmit={getData} />
      {isLoading && <Loader />}
      {photos.length > 0 ? (
        <ImageGallery photos={photos} onClickPhoto={handleClickPhoto} />
      ) : null}
      <ImageGallery photos={photos} onClickPhoto={handleClickPhoto} />
      <Button onLoad={handleButton} />
    </div>
  );
}
