import axios from "axios";
import React, {useEffect, useState } from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    CardActions,
    CardActionArea,
    Button,
    Box,
    TextField
  } from "@mui/material";
import VideoCard from "./VideoCard";
import Header from "./Header.js";
import "./LandingPage.css";
import {useSnackBar} from "notistack";



const Explore =({videoList})=>{
      return(
       <>
        <Grid className="container" container spacing={1} padding={5}>
         {videoList.map((video)=>(
               <Grid item xs={12} sm={6} md={4} key={video._id}>
                   <VideoCard video={video} />
               </Grid>
          ))}
        </Grid>
       </>
      );
};

export default Explore;