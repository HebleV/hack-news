import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api';
import { Story } from '../components/Story';
import { Header } from '../components/Header';
import {
    GlobalStyle,
    StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';

export const StoriesContainer = () => {

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