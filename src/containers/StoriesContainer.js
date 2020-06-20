import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api';
import { Story } from '../components/Story';
import { Header } from '../components/Header';
import {
    GlobalStyle,
    StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';

export const StoriesContainer = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        getStory().then(data => {
            setStories(data.hits);
        });
    }, []);
    console.log("xxx", stories);

    return (
        <>
            <GlobalStyle />
            <StoriesContainerWrapper data-test-id="stories-container">
            <h2>Hack-News</h2>
                <Header />
                <Story />
            </StoriesContainerWrapper>
        </>
    )
};