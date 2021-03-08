import React, { Component } from 'react';

import Section from '../Section';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Loader from 'react-loader-spinner';

import imagesApi from '../../services/images-api';

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    loadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

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
        if (data.length === 0) {
          alert(':( No results were found for your request, please try again');

          return;
        }

        if (data.length < 12) {
          this.setState({ loadMore: false });
          return;
        }

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
    const { images, isLoading, hasError, loadMore } = this.state;
    const shouldRenderLoadMoreBtn = images.length > 0 && !isLoading && loadMore;

    return (
      <Section>
        {hasError && <h1>Something went wrong...</h1>}

        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} />

        {shouldRenderLoadMoreBtn && <Button onClick={this.fetchImages} />}

        {isLoading && (
          <Loader
            type="Puff"
            color="#ffb6c1"
            height={50}
            width={50}
            timeout={3000}
          />
        )}
      </Section>
    );
  }
}
