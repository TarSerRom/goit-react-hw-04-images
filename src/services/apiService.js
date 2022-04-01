import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '24711891-660ee969a9a9139e98081d9b6',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchImages = async (query, page) => {
  try {
    const { data } = await axios.get('', {
      params: {
        q: query,
        page,
      },
    });
    return data.hits;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

export default fetchImages;