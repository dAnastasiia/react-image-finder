import axios from 'axios';

const fetchImages = (searchQuery, currentPage, pageSize = 12) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20570263-88be5cc00acf6d7ebc52c1208&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(res => res.data.hits);
};

export default fetchImages;
