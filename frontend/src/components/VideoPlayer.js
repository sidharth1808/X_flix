import react,{useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import axios from"axios";
import { endpoint } from "../App";
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
  //import {ThumpupOutlined} from "@mui/icons-material"
  import "./VideoPlayer.css"; 
  
  
  
  const VideoPlayer =({video,handleVoteChange})=>{
    
    
    return(
         <>
         <div className="container">
             <div className="iframe-parent">
                 <iframe 
                  src={`https://${video.videoLink}`}
                  allow="autoplay; encripted-media"
                  allowFullScreen
                  frameBorder="0"
                  title="video"
                  className="iframe-main"
                  ></iframe>
             </div>
         </div>
         <div className="container">
           <div className="video-bar">
               <div>
                   <p className="playing-title">{video.title}</p>
                   <div className="line">
                       <span className="tag views-tag">{video.viewCount}</span>
                       <div className="dot"></div>
                       <span className="tag content-rating-tag">{video.contentRating}</span>
                       <div className="dot"></div>
                       <span className="tag release-date-tag">{video.releaseDate}</span>
                   </div>
               </div>
           

         <div className="vote-container">
            <span
            className="vote-pill upvote-pill"
            onClick={()=>handleVoteChange(video._id,{vote:"upVote",change:"increase"})}
            >   
                {/* <ThumpupOutlined className="thumb-icon"/> */}
                <span>Upvote</span>
            </span>
            <span
            className="vote-pill downvote-pill"
            onClick={()=>handleVoteChange(video._id,{vote:"downvote",change:"increase"})}
            >
                {/* //<ThumpupOutlined className="thumb-icon"/> */}
                <span>Downvote</span>
            </span>
         </div>
         </div>
        </div>
         
         </>
     );
  };
  export default VideoPlayer;