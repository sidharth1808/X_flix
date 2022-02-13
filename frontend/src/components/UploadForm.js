import React,{ useState,useEffect } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Stack,TextField,Box } from "@mui/material";
import { endpoint } from "../App";
import axios from "axios";
import { CircularProgress } from '@mui/material';

export default function UploadForm ({ fetchVideos,onClose,genres,contents}){
    const [formData , setFormData] = useState ({
      videoLink:"",
      title:"",
      previewImage:"",
      genre:"",
      contentRating:"",
      releaseDate:""
    });
    const [isLoading, setIsLoading]= useState(false);
    const handleChange =(e)=>{
        const [key,value] = [e.target.name, e.target.value];
        setFormData({...formData,[key]:value});
        
    };
    const handleSubmit =async ()=>{
        try{
            console.log("post");
            setIsLoading(true);
          const req = await axios.post(endpoint,formData);
          if(req.status === 201){
              await fetchVideos();
              onClose();
          }
        }catch(e){
            console.log(e);
        }
    };
    // useEffect(()=>{
    //     console.log(formData);;
    // },[formData])
    
    return (
        <Box>
        <Stack spacing={3}>
            <TextField required 
            className="form-element" 
            variant="outlined"
            label="Video Link"
            helperText="This link will be used to derive the video"
            name="videoLink"
            fullWidth
            value={formData.videoLink}
            onChange={handleChange}
            />
             <TextField required 
            className="form-element" 
            variant="outlined"
            label="Thumbnail Image"
            helperText="This link will be used to derive the video"
            name="previewImage"
            fullWidth
            value={formData.previewImage}
            onChange={handleChange}
            />
             <TextField required 
            className="form-element" 
            variant="outlined"
            label="Title"
            helperText="This link will be used to derive the video"
            name="title"
            fullWidth
            value={formData.title}
            onChange={handleChange}
            />
            <TextField 
            select
            required 
            className="select-input form-element" 
            
            label="Genre"
            helperText="Genre will help in categorising your videos"
            name="genre"
            fullWidth
            value={formData.genre}
            onChange={handleChange}
            >
                {genres
                .filter((option)=>option.value !=="All")
                .map((option)=>(
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                
            </TextField>
            <TextField 
            select
            required 
            className="select-input form-element" 
            
            label="Suitable age group for the clip"
            helperText="This will be used to filter videos on age group suitability"
            name="contentRating"
            fullWidth
            value={formData.contentRating}
            onChange={handleChange}
            >
                {contents
                .filter((option)=>option.value !=="Any age group")
                .map((option)=>(
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                
            </TextField>
            <TextField
            type="date"
            className="form-element"
            label="release Date"
            name="releaseDate"
            helperText="This will be used to sort videos"
            value={formData.releaseDate}
            onChange={handleChange}
            InputLabelProps={{
                shrink:true
            }}
            />
            
            
        </Stack>
        <Stack direction="row" py="1rem" spacing={2}>
            {isLoading?(
                <CircularProgress size="small" />
            ):(
              <Button
              id="upload-btn-cancel"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              >
                  Upload Video
              </Button>
            )}
          
         <Button
         id="upload-btn-cancel"
         variant="text"
         color="error"
         onClick={onClose}
         >
              Cancel
          </Button>
        </Stack>
        </Box>
    );
}