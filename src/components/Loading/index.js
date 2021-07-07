import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loading = () => {
    return ( <h1 style={{marginTop: "340px", display: "flex", justifyContent: "center"}}>
        <CircularProgress color="secondary" />
        </h1> );
}
 
export default Loading;