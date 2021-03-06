import React from 'react';

const linkStyle = {
    margin: '5px',
    fontSize: '0.85rem',
    textDecoration: 'none',
    color: '#000',
}

const TableBody = ({
    stories,
    voteCount,
    increment,
    mapTime,
    handleHide
}) => {
    return (
        <tbody style={{ backgroundColor: '#efebe9' }}>
            {stories.map(story =>
                <tr key={story.objectID}>
                    <td style={{textAlign:'center'}}>{story.num_comments}</td>
                    <td style={{textAlign:'center'}}>{voteCount[story.objectID] || 0}</td>
                    <td style={{ cursor: 'pointer',textAlign:'center' }} onClick={() => increment(story.objectID)}>&#9650;</td>
                    <td>
                        <a href={story.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>{story.title}</a>
                        <span style={{ fontSize: '0.75rem' }}>
                            <span style={{ color: '#76726B' }}>by </span>{story.author}
                            <span style={{ padding: 5, color: '#76726B' }}>{mapTime(story.created_at_i)}</span>
                            <span style={{ cursor: 'pointer' }} onClick={() => handleHide(story)}>
                                [ Hide ]
                            </span>
                        </span>
                    </td>
                </tr>
            )}
        </tbody>
    )
}

export default TableBody;