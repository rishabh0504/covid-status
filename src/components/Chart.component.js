import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
    Tooltip,
} from '@devexpress/dx-react-chart-material-ui';

import { EventTracker } from '@devexpress/dx-react-chart';


const ChartComponent = (props) => {
    const [chartData, setchartData] = useState([])
    useEffect(() => {
        const chartData = props.chartData || []
        setchartData(chartData);
    }, [props.chartData]);

    return (
        <Paper>
            <Chart
                data={chartData}
            >
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries
                    valueField="totalCases"
                    argumentField="country"
                />
                <Title
                    text="Covid report (Showing 7 Countries only for now)"
                />
                <EventTracker />
                <Tooltip />
            </Chart>
        </Paper>
    )
}

export default ChartComponent;