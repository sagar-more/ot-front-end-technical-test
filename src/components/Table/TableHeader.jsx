import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";

export default () => {

    const Headers = [
        "",
        "Symbol",
        "Gene ID",
        "Gene Name",
        "Overall Association Score"
    ];

    return (
        <TableHead>
            <TableRow>
                {
                    Headers.map(name => (
                        <TableCell key={name}>{name}</TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    )
}
