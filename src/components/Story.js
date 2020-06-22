import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api';
import { 
    StoryWrapper, 
    StoryMetaElement, 
    StoryText 
} from '../styles/StoryStyles';
import { mapTime } from '../mappers/mapTime';

export const Story = () => {

    const  paginationStyle = {
        textDecoration:'none',
        color:'#ff6600',
        float:'right',
        padding: '5px 5px',
        fontSize: '13px',
        fontWeight: '700'
    }
    //Story state
    const [stories, setStory] = useState([]);

    //Pagination state
    const [totalPageCount, setTotalPageCount] = useState(0);
    const [currentPageCount, setCurrentPageCount] = useState(0);

    const goToPrevious = () => {
        setCurrentPageCount(currentPageCount - 1);
    }

    const goToNext = () => {
        setCurrentPageCount(currentPageCount + 1);
    }

    //Votecount state
    const intialVoteCount = window.localStorage.getItem('voteCount');
    const currentVoteCount = intialVoteCount ? JSON.parse(intialVoteCount) : {};
    const [voteCount, setVoteCount] = useState(currentVoteCount);

    const increment = (id) => {
        const count = {
            ...voteCount,
            [id]: voteCount[id] ? voteCount[id] + 1 : 1
        }
        setVoteCount(count);
        window.localStorage.setItem('voteCount', JSON.stringify(count));
    }

    useEffect(() => {
        getStory(currentPageCount).then(data => {
            if (data) {
                setStory(data.hits || []);
                const pages = data.nbPages || 0;
                setTotalPageCount(pages);
            }
        });
    }, [currentPageCount]);

        //Hide functionality
        const handleHide = (story) => {
            const newList = stories.filter((item) => 
            item.objectID !== story.objectID 
        );
            setStory(newList);
        }
        

    return (
        <> 
            {stories.map(story =>
                <StoryWrapper data-testid="story" key={story.objectID}>
                    <StoryText style={{width: 100}}>{story.num_comments}</StoryText>
                    <StoryText style={{width: 100}}>{voteCount[story.objectID] || 0}</StoryText>
                    <StoryText style={{width: 100}}>
                        <button onClick={() => increment(story.objectID)}>&#9650;</button>
                    </StoryText>
                    <StoryText>
                        <a href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</a>&nbsp;  &nbsp;
                    <span data-testid="author">
                            <StoryMetaElement color="#A9A9A9">by:</StoryMetaElement> {story.author}
                        </span>&nbsp;  &nbsp;
                    <span data-testid="story-time">
                            <StoryMetaElement color="#A9A9A9">posted:</StoryMetaElement> {` `}
                            {mapTime(story.created_at_i)}
                        </span>&nbsp;  &nbsp;
                    <span>
                        <a href="#" onClick={() => handleHide(story)}>
                            <StoryMetaElement color="#A9A9A9">[</StoryMetaElement>
                                &nbsp;Hide&nbsp;
                            <StoryMetaElement color="#A9A9A9">]</StoryMetaElement>
                        </a>
                    </span>
                    </StoryText>
                </StoryWrapper>
            )
            }
            {totalPageCount !== currentPageCount && <a href="#" onClick={goToNext} style={paginationStyle}>Next</a>}
            {currentPageCount ? <a href="#" onClick={goToPrevious} style={paginationStyle}>Previous&nbsp;&nbsp;|</a> : null}
            
        </>
    )
}

