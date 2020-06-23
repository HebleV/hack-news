import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({ voteCount }) => {
    const id = Object.keys(voteCount);
    const votes = Object.values(voteCount);

    const options = {
        series: [
            {
                name: "vote counts",
                data: votes
            }
        ],
        chart: {
            backgroundColor: '#efebe9',
            type: 'line'
        },
        xAxis: {
            categories: id,
            title: {
                text: 'Id'
            }
        },
        yAxis: {
            title: {
                text: 'Votes'
            }
        },
    }

    return (
        <div style={{ borderBottom: '4px solid #ff6600', borderTop: '4px solid #ff6600',marginBottom:'120px' }}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default Chart;