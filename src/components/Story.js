import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api';
import Chart from './Chart';
import Pagination from './Pagination';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { mapTime } from '../mappers/mapTime';
import { Table, Container, Row, Col } from 'reactstrap';

const Story = () => {
    const [stories, setStory] = useState([]);
    const [totalPageCount, setTotalPageCount] = useState(0);
    const [currentPageCount, setCurrentPageCount] = useState(0);

    const intialVoteCount = window.localStorage.getItem('voteCount');
    const currentVoteCount = intialVoteCount ? JSON.parse(intialVoteCount) : {};
    const [voteCount, setVoteCount] = useState(currentVoteCount);

    const goToPrevious = () => {
        setCurrentPageCount(currentPageCount - 1);
    }

    const goToNext = () => {
        setCurrentPageCount(currentPageCount + 1);
    }

    const increment = (id) => {
        const count = {
            ...voteCount,
            [id]: voteCount[id] ? voteCount[id] + 1 : 1
        }
        setVoteCount(count);
        window.localStorage.setItem('voteCount', JSON.stringify(count));
    }

    const handleHide = (story) => {
        const newList = stories.filter((item) =>
            item.objectID !== story.objectID
        );

        const getHideObjectId = window.localStorage.getItem('hideObjectId');
        let hideObjectId = null;
        
        if (getHideObjectId) {
            hideObjectId = JSON.parse(getHideObjectId);
        } else {
            hideObjectId = [];
        }

        hideObjectId.push(story.objectID);
        window.localStorage.setItem("hideObjectId", JSON.stringify(hideObjectId));

        setStory(newList);
    }

    useEffect(() => {
        getStory(currentPageCount).then(data => {
            if (data) {
                let newStories = data.hits;
                const hiddenStoryIds = JSON.parse(window.localStorage.getItem('hideObjectId'));
                if (hiddenStoryIds) {
                    newStories = newStories.filter((page) =>
                        !hiddenStoryIds.includes(page.objectID)
                    );
                }
                setStory(newStories || []);
                const pages = data.nbPages || 0;
                setTotalPageCount(pages);
            }
        });
    }, [currentPageCount]);


    return (
        <Container style={{ fontSize: '0.85rem', marginTop: '25px' }}>
            <Row>
                <Col >
                    <Table responsive size="sm">
                        <TableHeader />
                        <TableBody
                            stories={stories}
                            voteCount={voteCount}
                            increment={increment}
                            mapTime={mapTime}
                            handleHide={handleHide}
                        />
                    </Table>
                    <Pagination
                        currentPageCount={currentPageCount}
                        totalPageCount={totalPageCount}
                        goToNext={goToNext}
                        goToPrevious={goToPrevious}
                    />
                </Col>
            </Row>
            <Row>
                <Col >
                    <Chart voteCount={voteCount} />
                </Col>
            </Row>
        </Container>
    )
}

export default Story;
