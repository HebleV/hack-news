import axios from 'axios';

export const getStoryId = async () => {
    try {
    //   const response = await fetch('api/v1/items?id=15');
      const response = await axios.get('https://hn.algolia.com/api/v1/search?query=story&page=0&hitsPerPage=10')
      const data = await response.data;
      return data;
    } catch (error) {
      console.log('error: ', error);
    }
};
