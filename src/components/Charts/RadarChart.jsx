import React from "react";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from "recharts";

export default ({ width, height, data }) => {

    // formatting the data as per chart
    const formattedData = Object
        .entries(data)
        .map(a => ({ name: a[0], value: a[1] }));

    return (
        <RadarChart width={width} height={(parseInt(height))} data={formattedData}>
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={65} />
            <Tooltip />
            <Radar dataKey="value" stroke="#3489ca" fill="#fff" fillOpacity={0} />
        </RadarChart>
    )
}
