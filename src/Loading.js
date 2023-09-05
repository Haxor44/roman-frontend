import React,{useState, useEffect} from "react";
import { usePromiseTracker } from "react-promise-tracker";
import {ThreeDots} from 'react-loader-spinner';
import {Box} from "@mui/material";

 function  Loading  () {
       const { promiseInProgress } = usePromiseTracker();
    
       return (
        promiseInProgress && 
        <Box style={{ marginTop: 250,display: "flex",justifyContent: "center", alignItems:"center"  }}>
          <ThreeDots type="ThreeDots" color="#7B68EE" height="100" width="100" />
      </Box>
      );  
     }

export default Loading;