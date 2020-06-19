import axios from 'axios';

export const baseUrl = 'http://hn.algolia.com/api/v1/';
export const newStoryUrl = `${baseUrl}newest`;
export const storyUrl = `${baseUrl}items/15`;

// export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
// export const newStoriesUrl = `${baseUrl}newstories.json`;
// export const storyUrl = `${baseUrl}item/`;

export const getStoryId = () => {
    console.log("1111");
    axios({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      url: '/api/items/15',
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
};
