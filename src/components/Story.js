import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api';
import { Chart } from './Chart';
import { mapTime } from '../mappers/mapTime';
import { Table, Container } from 'reactstrap';

export const Story = () => {

    const paginationStyle = {
        textDecoration: 'none',
        color: '#ff6600',
        float: 'right',
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
            <Container>
                <h2>Hack-News</h2>
                <Table responsive size="sm">
                    <thead>
                        <tr style={{ backgroundColor: '#ff6600' }}>
                            <th><span style={{ fontSize: 12, color: '#fff' }}>Comments</span></th>
                            <th><span style={{ fontSize: 12, color: '#fff' }}>Vote Count</span></th>
                            <th><span style={{ fontSize: 12, color: '#fff' }}>Upvote</span></th>
                            <th><span style={{ fontSize: 12, color: '#fff' }}>News Details</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {stories.map(story =>
                            <tr key={story.objectID} style={{ backgroundColor: '#efebe9' }}>
                                <td><span style={{ fontSize: 12 }}>{story.num_comments}</span></td>
                                <td><span style={{ fontSize: 12 }}>{voteCount[story.objectID] || 0}</span></td>
                                <td>
                                    <span style={{ cursor: 'pointer' }} onClick={() => increment(story.objectID)}>&#9650;</span>
                                </td>
                                <td><a href={story.url} target="_blank" rel="noopener noreferrer" style={{ margin: 5, fontSize: 12, textDecoration: 'none', color: '#000' }}>{story.title}</a>
                                    <span style={{ fontSize: '0.75rem' }}><span><span style={{ color: '#A9A9A9' }}>by&nbsp;</span>{story.author}</span>
                                        <span style={{ padding: 5, color: '#A9A9A9' }}>{mapTime(story.created_at_i)}</span>
                                        <span style={{ cursor: 'pointer' }} onClick={() => handleHide(story)}>
                                            [ Hide ]</span></span>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                {totalPageCount !== currentPageCount && <a href="#" onClick={goToNext} style={paginationStyle}>Next</a>}
                {currentPageCount ? <a href="#" onClick={goToPrevious} style={paginationStyle}>Previous&nbsp;&nbsp;|</a> : null}
                <br /><br />
                <Chart voteCount={voteCount} />
            </Container>
        </>
    )
}

