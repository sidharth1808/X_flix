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

import Header from "./Header.js";
import "./LandingPage.css";
import {useSnackBar} from "notistack";
import GenreList from "./GenreList"
import Explore from "./Explore";

  const LandingPage = ({allGenres,selectedGenres,handleGenreChange,videoList,contentRating,selectedContent,handleContentChange,setSearchKey,searchKey, performApiCall}) =>{
    

    return(
        <>
        <Header 
        genres={allGenres}
        contents={contentRating}
        setSearchKey={setSearchKey} 
        searchKey={searchKey}
        performApiCall={performApiCall}/> 
        <GenreList 
        allGenres={allGenres} 
        selectedGenres={selectedGenres} 
        handleGenreChange={handleGenreChange} 
        contentRating={contentRating}
        selectedContent={selectedContent}
        handleContentChange={handleContentChange}
        />

        <Explore videoList={videoList}/>
        </>
    );
  };
  export default LandingPage;