import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";


// Customised label to rotate text
const CustomizedAxisTick = ({ x, y, stroke, payload }) => {

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-12)">{payload.value}</text>
        </g>
    );
}

export default ({ width, height, data }) => {

    // formatting the data as per chart
    const formattedData = Object
        .entries(data)
        .map(a => ({ name: a[0], value: a[1] }));

    return (
        <BarChart width={width} height={(parseInt(height))} data={formattedData}
            margin={{
                top: 20, right: 30, left: 20, bottom: 10,
            }}
        >
            <XAxis interval={0} dataKey="name" height={50} tick={CustomizedAxisTick} dx={20}
                label={{ value: "Data Type", position: "insideBottom", offset: -7 }}
            />
            <YAxis label={{ value: "Score", angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="value" fill="#3489ca" />
        </BarChart>
    );
}
