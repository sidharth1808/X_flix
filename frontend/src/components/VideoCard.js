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
  import "./VideoCard.css";
  import moment from "moment";  
  import { Link } from "react-router-dom";
  
  

const VideoCard = ({video})=>{
    return(
        <>
        
      <Link to={`/video/${video._id}`}>
      <Box padding={1}>
        
      <Card className="card">
      
        <CardMedia
          component="img"
          height="153"
          onClick={"play"}
          image={video.previewImage}
          alt="green iguana"
        />
      
      
     </Card>
     <Box >
      <Typography paddingY="0.5rem" fontWeight="700" textAlign="left" className="video-title">{video.title}</Typography>
      {/* <Box className="card-texts"> */}
      <p className="video-subtitle" textAlign="left">{moment(video.releaseDate).fromNow()}</p>
      <p className="video-subtitle" >{video.genre} {"|"} {video.contentRating}</p>
      </Box>
      
      </Box>
      </Link>
      
     {/* </Box> */}
    
     {/* <Grid  className="video-tile">
       <Grid item xs={12}>
         <img
           src={video.previewImage}
           alt="image"
           className="preview-image"
           />
       </Grid>
       <Grid item xs={12}>
        <p className="video-title">{video.title}</p>
        <p className="video-subtitle">{video.releaseDate}</p>
       </Grid>
       <Grid item xs={12}>
       <p className="video-subtitle">{video.genre}{"|"}{video.contentRating}</p>
       </Grid>
     </Grid> */}

    </>
    );
   

};
export default VideoCard ;
// const LandingPage = () => {
//     const [videos, setVideos] = useState([]);

// }
