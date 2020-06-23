import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container, Row, Col } from 'reactstrap';

export const Chart = ({ voteCount }) => {
    const Id = Object.keys(voteCount);
    const Votes = Object.values(voteCount);

    const options = {
        series: [
            {
                name: "vote counts",
                data: Votes
            }
        ],
        chart: {
            backgroundColor: '#efebe9',
            type: 'line'
        },
        xAxis: {
            categories: Id,
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
        <Container style={{ width: '100%' }} fluid="md">
            <Row>
                <Col style={{ borderBottom: '2px solid #ff6600', borderTop: '2px solid #ff6600' }}>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </Col>
            </Row>
        </Container>
    )
}