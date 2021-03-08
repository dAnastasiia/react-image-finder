import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';

import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  static propTypes = {
    images: PropTypes.array.isRequired,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onClick = (src, name) => {
    this.setState({ largeImageURL: src, tags: name });
    this.toggleModal();
  };

  render() {
    const { showModal, largeImageURL, tags } = this.state;
    const { images } = this.props;

    return (
      <>
        <ul className="ImageGallery">
          <ImageGalleryItem images={images} onClick={this.onClick} />
        </ul>

        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </>
    );
  }
}

export default ImageGallery;
