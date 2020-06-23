import React from 'react';

const headerStyle = {
    color: '#fff',
    backgroundColor: '#ff6600',
}

const TableHeader = () => (
    <thead style={headerStyle}>
        <tr>
            <th style={{textAlign:'center'}}>Comments</th>
            <th style={{textAlign:'center'}}>Vote Count</th>
            <th style={{textAlign:'center'}}>Upvote</th>
            <th>News Details</th>
        </tr>
    </thead>
)

export default TableHeader;