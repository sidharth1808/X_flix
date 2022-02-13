import Box from "@mui/material/Box";

import React, { useEffect, useState } from "react";
import UploadIcon from '@mui/icons-material/Upload';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import "./Header.css";
import { TextField , Dialog, Grid } from "@mui/material";
import UploadForm from "./UploadForm";

const Header = ({genres,contents,setSearchKey,searchKey,performApiCall}) =>{
    const [isModelOpen, setIsModelOpen] = useState(false);


    const handleOpen = () =>{
      setIsModelOpen(true);
    };
    const handleClose = () =>{
      setIsModelOpen(false);

    };
  
    return (
      <>
      <div>
        <Dialog 
        open={isModelOpen}
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        >
         <Grid container className="dialog">
           <Box 
           display="flex" 
           justifyContent="space-between" 
           alignItems="center"
           width="100%"
           >
             <h3 className="form-header">Upload Video</h3>
           
             <IconButton
               aria-label="close"
               className="close-button"
              onClick = {handleClose}
              // color="#fff"
             >
               <CloseIcon />
             </IconButton>
           </Box>
           <Grid item xs={12}>
             <UploadForm
              fetchVideos={performApiCall}
              onClose={handleClose}
              genres={genres}
              contents={contents}
              />
           </Grid>
         </Grid>
        </Dialog>
      </div>
        <Box className="header">
          <Box className="header-title" onClick="#">
              <img src="X.png" alt="logo"></img>
              Flix
          </Box>
          <Box>
              <TextField
                 className="search-box"
                 size="small"
                 type="text"
                 name="search-box"
                 placeholder="Search for video titile"
                 value={searchKey}
                 onChange={(e) => setSearchKey(e)}
                 
              />  
            <Button variant="" className="search-btn">
              <SearchIcon/>
            </Button>
          </Box>
          <Button
            variant="contained"
            className="upload-button"
            startIcon={<UploadIcon />}
            onClick={ handleOpen}
          >
           Upload
          </Button>
        </Box>
        </>
      );

};
export default Header;