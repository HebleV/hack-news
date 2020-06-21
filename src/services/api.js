import axios from 'axios';

export const getStory = async (currentPageCount) => {
    try {
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=story&page=${currentPageCount}&hitsPerPage=15`)
        const data = await response.data;
        return data;
    } catch (error) {
        console.log('error: ', error);
    }
};
