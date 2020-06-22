# hack-news
Clone of Hacker News - <a href="https://news.ycombinator.com/" target="_blank">https://news.ycombinator.com/</a>

## Features
Besides rendering the hacker news data, this has other following features:
- pagination feature built. 
- Upvote count which will be stored in local storage. 
- Has the hide feature to hide a story

## What's inside
The libraries being used to achieve this are React, styled-components, React-testing-library for testing. 
Also, this is deployed on netlify with CI/CD pipeline. Any code changes will lead to automatic deployment on netlify.
Here is the netlify link <a href="https://inspiring-roentgen-47173a.netlify.app/" target="_blank">Hack News</a>
The API that was used to fetch data - <a href="https://hn.algolia.com/api" target="_blank">click here</a>

## Installation & set up

This installs the npm packages

``` 
npm i
```

This starts the application

```
npm run dev-start
```

Launches unit tests

```
npm test
```

Builds the app for production environment

```
npm run build
```
