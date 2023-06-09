// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const ChartComponent = ({chartDataChiqim})=>{
    const chartConfigs = {
        type: "pie3d", // The chart type
        width: "100%", // Width of the chart
        height: "600", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: 'User Costs',
                theme: 'fusion',
                decimals: 0,
                pieRadius: '35%',
            },
            // Chart Data
            data: chartDataChiqim,
        }
    };

    return( <div><ReactFC {...chartConfigs} /></div>);
}


export default ChartComponent;