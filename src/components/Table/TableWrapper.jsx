import React from "react";
import { Paper, Table, TableContainer } from "@material-ui/core";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Title from "../common/Title";

const TableWrapper = ({ tableData }) => {

    return (<>
        {
            tableData.length > 0
                ? <Paper elevation={3} variant="outlined">
                    <TableContainer>
                        <Table>
                            <TableHeader />
                            <TableBody data={tableData} />
                        </Table>
                    </TableContainer>
                </Paper>
                : <Title title="Loading..." variant="h5" />
        }
    </>);
}

export default TableWrapper;
