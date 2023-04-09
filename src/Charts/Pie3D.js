// Step 1 - Include react
import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const ChartComponent = ({chartDataKirim})=>{
    const chartConfigs = {
        type: "pie3d", // The chart type
        width: "100%", // Width of the chart
        height: "600", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: 'User Income',
                theme: 'fusion',
                decimals: 0,
                pieRadius: '35%',
            },
            // Chart Data
            data: chartDataKirim,
        }
    };

    return( <div><ReactFC {...chartConfigs} /></div>);
}


export default ChartComponent;