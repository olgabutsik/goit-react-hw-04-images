import React, { Component } from 'react';
import { fetchPhotosByQuery } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallerry/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import css from './APP.styled';

export class App extends Component {
  state = {
    photos: [],
    page: 1,
    isLoading: false,
    error: '',
    largeImageURL: '',
  };

  async componentDidUpdate(_, prevState) {}
}
