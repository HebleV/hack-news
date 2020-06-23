import React from 'react';

const paginationStyle = {
    textDecoration: 'none',
    color: '#ff6600',
    float: 'right',
    padding: '5px 5px',
    fontWeight: '700'
}

const Pagination = ({ totalPageCount, currentPageCount, goToNext, goToPrevious }) => {
    return (
        <>
            {totalPageCount !== currentPageCount && <a href="#" onClick={goToNext} style={paginationStyle}>Next</a>}
            {currentPageCount ? <a href="#" onClick={goToPrevious} style={paginationStyle}>Previous&nbsp;&nbsp;|</a> : null}
        </>
    )
}

export default Pagination;