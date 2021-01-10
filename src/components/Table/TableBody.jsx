import React from "react";
import { TableBody } from "@material-ui/core";
import TableRow from "./TableRow";

export default ({ data }) => {
    return (
        <TableBody>
            {
                data.map(({ id, association_score, target }, index) => (
                    <TableRow
                        key={id}
                        selected={index % 2 === 0}
                        association_score={association_score}
                        target={target}
                    />
                ))
            }
        </TableBody>
    )
}
