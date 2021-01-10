import { Typography } from "@material-ui/core";
import React from "react";

// General component to render Title
export default ({ title, variant }) => {
    return (
        <Typography variant={variant}>
            {title}
        </Typography>
    );
}