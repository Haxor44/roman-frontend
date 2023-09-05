import React,{useState, useEffect} from "react";
import { usePromiseTracker } from "react-promise-tracker";
import {ThreeDots} from 'react-loader-spinner';

 function  Loading  () {
       const { promiseInProgress } = usePromiseTracker();
    
       return (
        promiseInProgress && 
        <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        marginTop:250,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ThreeDots type="ThreeDots" color="#7B68EE" height="100" width="100" />
      </div>
      );  
     }

export default Loading;