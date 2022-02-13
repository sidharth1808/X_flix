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
  import LandingPage from "./LandingPage";
  import Explore from "./Explore";
  import VideoPlayer from "./VideoPlayer";

const VideoPageView =() =>{
    const params = useParams();
    const history = useHistory();
    const [video, setVideo] = useState({});
    const [allVideos,setAllVideos] = useState([]);


    
    useEffect(()=>{
        //console.log(params.id);
        //console.log(endpoint);
        getVideosData(params.id);
    },[params.id])
    useEffect(()=>{
        getAllVideos();
    },[])
    const getAllVideos = async() =>{
        try{
            const response = await axios.get(endpoint)
            console.log(response.data);
            setAllVideos(response.data.videos);
        }catch(e){
            console.log(e);
            //history.push("/");
        }
    }
    const getVideosData = async(id) =>{
       try{
           const response = await axios.get(`${endpoint}/${id}`)
           console.log(response.data);
           setVideo(response.data);
       }catch(e){
           console.log(e);
           history.push("/");
       }
    }
    const handleVoteChange = async (videoId, requestObj)=>{
        try{
            //console.log(videoId,requestObj)
            await axios.patch(`${endpoint}/${videoId}/votes`, requestObj);
            getVideosData(params.id);
        }catch(e){
            console.log(e);
        }
    }
return(
<div>
    <Grid container>
        {video?(
            <Grid item xs={12}>
                <VideoPlayer video={video} handleVoteChange={handleVoteChange}/>
                </Grid>
        ):(
            <div style={{color:"#fff"}}>Loading.....</div>
        )}
       <Grid item xs={12}>
           <Explore videoList={allVideos}/>
       </Grid>
    </Grid>
</div>
);

};
export default VideoPageView;