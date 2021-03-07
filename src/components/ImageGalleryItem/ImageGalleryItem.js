import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        data-source={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
