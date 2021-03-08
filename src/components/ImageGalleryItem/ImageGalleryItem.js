import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  handleImage = e => {
    e.preventDefault();

    const src = e.target.dataset.source;
    const name = e.target.alt;

    this.props.onClick(src, name);
    // console.dir(e.target);
  };

  render() {
    const { images } = this.props;

    return images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <li className="ImageGalleryItem" key={id}>
        <img
          onClick={this.handleImage}
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          data-source={largeImageURL}
        />
      </li>
    ));
  }
}

export default ImageGalleryItem;
