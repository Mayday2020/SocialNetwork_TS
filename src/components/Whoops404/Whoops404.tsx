import React from 'react'
import {useLocation} from "react-router";
import {Box, Typography} from "@mui/material";

const Whoops404 = () => {
    let location = useLocation()
    return (
        <Box>
            <Typography variant={'h2'} color={'red'}>
                404 Resource not found at : <span>{location.pathname}</span>
            </Typography>
        </Box>
    )
}

export default Whoops404