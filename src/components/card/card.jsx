import { Box, Typography } from "@mui/material";
import React from "react";

export const Card = ({id, img, title, brand, price}) => {
    return (
        <Box textAlign={"center"} height={"100%"} borderRadius={"10px"} p={"15px"} boxShadow={"2px 4px 8px 0px rgba(80, 34, 74, 0.41)"}>
            <img width={"100%"} src={img} alt="imag" />
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h5">{brand}</Typography>
            <Typography variant="h5">{price} so'm</Typography>

        </Box>
    )
}