import axios from 'axios';

export const getStory = async (currentPageCount) => {
    const url = `https://hn.algolia.com/api/v1/search?query=story&page=${currentPageCount}&hitsPerPage=15`;
    try {
        const response = await axios.get(url);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log('error: ', error);
    }
};
