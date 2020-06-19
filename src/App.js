import React, { useState, useEffect } from 'react';
import { getStoryId } from './services/api';

export const App = () => {
  const [storyId, setStoryId] = useState([]);
  useEffect(() => {
    const fetchStoryId = async () => {
      const response = await getStoryId();
      setStoryId(response);
    }
    fetchStoryId();
  }, []);

  return (<p>{JSON.stringify(storyId)}</p>);
}