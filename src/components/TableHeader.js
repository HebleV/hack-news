import React from 'react';

const headerStyle = {
    color: '#fff',
    backgroundColor: '#ff6600'
}

const TableHeader = () => (
    <thead style={headerStyle}>
        <tr>
            <th>Comments</th>
            <th>Vote Count</th>
            <th>Upvote</th>
            <th>News Details</th>
        </tr>
    </thead>
)

export default TableHeader;