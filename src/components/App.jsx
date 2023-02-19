import React, { Component } from 'react';
import { fetchPhotosByQuery } from 'services/api';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallerry/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import css from './APP.module.css';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    loading: false,
    error: '',
    photos: [],
    totalHits: 0,
    largeImageURL: '',
    modal: false,
    showLoadMore: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true });
      try {
        const { hits, totalHits } = await fetchPhotosByQuery(query, page);
        this.setState(prevState => ({
          photos: [...prevState.photos, ...hits],
          showLoadMore: page < Math.ceil(totalHits / 20),
        }));
      } catch (error) {
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onSubmit = query => {
    this.setState({
      query,
      page: 1,
      loading: false,
      error: '',
      photos: [],
      totalHits: 0,
      largeImageURL: '',
      modal: false,
      showLoadMore: false,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleClickPhoto = largeImageURL => {
    this.setState({ largeImageURL, modal: true });
  };

  onCloseModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { photos, showLoadMore, loading, error, modal, largeImageURL } =
      this.state;
    return (
      <>
        {loading && <Loader />}
        <div className={css.App}>
          <SearchBar onSubmit={this.onSubmit} />
          {error && <p>No photos found!!!</p>}
          {photos.length > 0 ? (
            <ImageGallery
              photos={photos}
              onClickPhoto={this.handleClickPhoto}
            />
          ) : null}
          {showLoadMore && <Button onLoad={this.handleLoadMore} />}
          {modal && (
            <Modal
              largeImageURL={largeImageURL}
              onCloseModal={this.onCloseModal}
            />
          )}
        </div>
      </>
    );
  }
}
