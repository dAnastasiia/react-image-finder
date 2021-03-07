import React, { Component } from 'react';

import Section from '../Section';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Loader from 'react-loader-spinner';
import Modal from '../Modal';

import imagesApi from '../../services/images-api';

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    showModal: false,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;

    this.setState({ isLoading: true });

    imagesApi(searchQuery, currentPage)
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data],
          currentPage: prevState.currentPage + 1,
        }));

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, showModal, isLoading, hasError } = this.state;
    const shouldRenderLoadMoreBtn = images.length > 0 && !isLoading;

    return (
      <Section>
        {hasError && <h1>Something went wrong...</h1>}

        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} />

        {shouldRenderLoadMoreBtn && <Button onClick={this.fetchImages} />}

        {isLoading && (
          <Loader
            type="Puff"
            color="#3f51b5"
            height={50}
            width={50}
            timeout={3000}
          />
        )}

        {showModal && <Modal onClose={this.toggleModal} />}
      </Section>
    );
  }
}
