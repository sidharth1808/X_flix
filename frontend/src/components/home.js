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
// import {useSnackBar} from "notistack";
import { endpoint } from "../App";
import LandingPage from "./LandingPage";

const allGenres = [
    {label:"All", value:"All"},
    {label:"Education", value:"Education"},
    {label:"Sports", value:"Sports"},
    {label:"Comedy", value:"Comedy"},
    {label:"LifeStyle", value:"Lifestyle"}
  ];
  const contentRating = [
    {label:"All", value:"Any age group"},
    {label:"7+", value:"7+"},
    {label:"12+", value:"12+"},
    {label:"16+", value:"16+"},
    {label:"18+", value:"18+"}
  ]

  const Home = () =>{
   
    const [video, setVideo] = useState([]);
    const [genres, setGenres] = useState(["All"])
    const [selectedGenreList,setselectedGenreList] = useState([]);
    const [contents,setContent] = useState(["Any age group"])
    const [selectedContents,setSelectedContent] = useState([])
    const [searchKey,setSearchKey] = useState("")
     //const [timerId,setTimerId] = useState(null)
    // const {enqueueSnackbar} = useSnackBar();

    const fetchData = async() =>{
        //getEndpoint();
       // console.log(genres);
        // let url=endpoint + `?genres=${genres.join(",")}`;
        // try{
        //     const response = await axios.get(url);
        //     const videos = response.data.videos;
        //     setVideo(videos);
        //     console.log(endpoint + `?genres=${genres.join(",")}`+`&contentRating=${contents.toString().replace("+","%2B")}`)
        // }catch(e){
        //     // if(e.response && e.response.data){
        //     //     enqueueSnackbar(e.response.data.message, {variant : "error"});
        //     // }else{
        //     //     enqueueSnackbar("Something went wrong, check the backend is running", {variant:"error"});
        //     // }
        //     console.log(e);
        let API = getEndpoint();
        console.log(API);
        try{
            
            const response = await axios.get(API);
            const videos = response.data.videos;
            setVideo(videos);
        }catch(e){
            console.log(e);
        }
        };
        
        
        
    
    const getEndpoint =()=>{
        let API = endpoint;
       //console.log(endpoint);
        console.log(selectedGenreList)
        console.log(selectedContents)
        let genreListLength =  selectedGenreList.length;
        let contentListLength = selectedContents.length;
        let encoding ="";
        if(contentListLength !== 0){
            let temp = selectedContents[0];
            //console.log(temp);
            encoding = temp.replace("+","%2B");
            //console.log(encoding);


        }
        if(searchKey!== "" && genreListLength !== 0 && contentListLength !== 0){
            return API = (`${API}?title=${searchKey}&genres=${genres.join(",")}&contentRating=${encoding}`);
        }
        else if(searchKey !== ""){
               return API =(`${API}?title=${searchKey}`);
        }
        else if(genreListLength !==0 ){
               return API = (`${API}?genres=${genres.join(",")}`);
        }else if(contentListLength !== 0){
            return API = (`${API}?contentRating=${encoding}`);
        }

        return API;
        

    }
    const settingKey= (e)=>{
       setSearchKey(e.target.value);
    };
    const handleGenreChange =(genre)=>{
        //console.log(genre);
        const all = "All"
        const newGenreValue= genre.value;
        //comparing if the selected genre is all 
        if(newGenreValue === all){
            setGenres([all]);
        }else{
            //Removing all from the genre array
            const genreWithoutAll = genres.filter((e)=>e!==all);
            let nextGenre;
            //Checking if new value is already in the array
            if(genreWithoutAll.includes(newGenreValue)){
                //If it is there removing it from the array
                 nextGenre = genreWithoutAll.filter((e)=>e!==newGenreValue);
                setGenres(nextGenre);
                setselectedGenreList(nextGenre);
                
            }else{
                //if it is not add to the array
                 nextGenre = [...genreWithoutAll,newGenreValue];
                setGenres(nextGenre);
                setselectedGenreList(nextGenre);
                
            }
            if(nextGenre.length === 0){
                setGenres([all]);
                
            }
        }
      
    }
    const handleContentChange =(content)=>{
      const newContent = content.value;
      if(contents.includes(newContent)){
          setContent(["Any age group"])
          setSelectedContent([]);
      }else if(newContent === ["Any age group"]){
        setSelectedContent([]);
      }else {
          setContent([newContent]);
          setSelectedContent([newContent]);
      }
    };
   
    useEffect(()=>{
        fetchData();
      },[searchKey]);
      useEffect(()=>{
        fetchData();
      },[genres]);
      useEffect(()=>{
        fetchData();
      },[contents]);

  
    return(
     <div>
         <LandingPage 
         allGenres={allGenres} 
         selectedGenres={genres} 
         handleGenreChange={handleGenreChange}
         videoList={video}
         contentRating={contentRating}
         selectedContent={contents}
         handleContentChange={handleContentChange}
         setSearchKey={settingKey}
         searchKey={searchKey}
         performApiCall={fetchData}
         />
     </div>
    );

    


};
export default Home;    