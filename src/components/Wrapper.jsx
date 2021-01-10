import React, { useEffect, useState } from "react";
import Title from "./common/Title";
import { Container, createMuiTheme, Grid, ThemeProvider } from "@material-ui/core";
import { getData } from "../utils/HttpService"
import TableWrapper from "./Table/TableWrapper";

// This will help us in creating themes
// having uniform color schemes throughout app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#115293",
        },
        secondary: {
            main: "#115293",
        },
    },
});


const Wrapper = () => {

    const title = "Genes associated with lung carcinoma";
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        getData().then((res) => {
            const sortedData = res.data
                .sort((a, b) => b.association_score.overall > a.association_score.overall)
                .slice(0, 5);
            setTableData(sortedData);
        });
    }, []);

    return (<ThemeProvider theme={theme}>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Title title={title} variant="h4" />
                </Grid>
                <Grid item xs={12}>
                    <TableWrapper tableData={tableData} />
                </Grid>
            </Grid>
        </Container>
    </ThemeProvider>)
}

export default Wrapper;
