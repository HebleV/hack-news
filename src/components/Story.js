import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api';
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement, StoryText } from '../styles/StoryStyles'
import { mapTime } from '../mappers/mapTime';

export const Story = () => {

    const [story, setStory] = useState([]);

    useEffect(() => {
        getStory().then(data => {
            console.log(data);
            setStory(data.hits);
            const d = data.hits;
            console.log({ d });
        });
    }, []);
    console.log("one", story);

    return (
        story.map(story =>
            <StoryWrapper data-testid="story" key={story.objectID}>
                <StoryText>{story.num_comments}</StoryText>
                <StoryText>1</StoryText>
                <StoryText>&#9650;</StoryText>
                <StoryText><a href={story.url}>{story.title}</a></StoryText>
                <StoryText>
                    <span data-testid="story-by">
                        <StoryMetaElement color="#A9A9A9">by:</StoryMetaElement> {story.author}
                    </span>
                </StoryText>
                <StoryText>
                    <span data-testid="story-time">
                        <StoryMetaElement color="#A9A9A9">posted:</StoryMetaElement> {` `}
                        {mapTime(story.created_at_i)}
                    </span>
                </StoryText>
                <StoryText>[ hide ]</StoryText>
            </StoryWrapper>
        )
    )
}

