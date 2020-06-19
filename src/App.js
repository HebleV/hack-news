import React, { useState, useEffect } from 'react';
import { getStoryId } from './services/api';

export const App = () => {
  const [storyId, setStoryId] = useState([]);
  useEffect(() => {
    getStoryId().then(data =>
      data && setStoryId(data));
  }, []);
  return (<p>{JSON.stringify(storyId)}</p>);
}


