import React from "react";
import { Box, Collapse, Grid, IconButton, TableCell, TableRow } from "@material-ui/core";
import { Add, Remove } from '@material-ui/icons';
import { ResponsiveContainer } from "recharts";
import BarChart from "../Charts/BarChart";
import RadarChart from "../Charts/RadarChart";
import Title from "../common/Title";

export default ({ selected, target, association_score }) => {

    const [open, setOpen] = React.useState(false);
    const responsiveContainerHeight = `250px`;
    const responsiveContainerWidth = `90%`;

    return (
        <>
            <TableRow selected={selected}>
                <TableCell>
                    <IconButton aria-label="expand row" color="primary" size="small" onClick={() => setOpen(!open)}>
                        {open ? <Remove /> : <Add />}
                    </IconButton>
                </TableCell>
                <TableCell>{target.gene_info.symbol}</TableCell>
                <TableCell>{target.id}</TableCell>
                <TableCell>{target.gene_info.name}</TableCell>
                <TableCell>{association_score.overall}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box style={{ paddingBottom: 16, paddingTop: 16 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Title title="Association Score vs Data Type" variant="body2" />
                                    <ResponsiveContainer
                                        width={responsiveContainerWidth}
                                        height={responsiveContainerHeight}
                                    >
                                        <BarChart data={association_score.datatypes} />
                                    </ResponsiveContainer>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Title title="Association Score vs Data Type" variant="body2" />
                                    <ResponsiveContainer
                                        width={responsiveContainerWidth}
                                        height={responsiveContainerHeight}
                                    >
                                        <RadarChart data={association_score.datatypes} />
                                    </ResponsiveContainer>
                                </Grid>
                            </Grid>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}