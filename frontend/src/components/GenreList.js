import react from "react";
import {Stack,Box} from "@mui/material"
import "./GenreList.css"

const GenreList =({
    allGenres,
    selectedGenres,
    handleGenreChange,
    contentRating,
    selectedContent,
    handleContentChange
})=>{
    return(
        <>
        <div className="tool-bar" 
        alignItems="center">
            {allGenres.map((genres)=>(
                <div 
                key={genres.value} 
                className={
                    selectedGenres.includes(genres.value)?
                    "genre-btn-active"
                    :"genre-btn"}
                    onClick={()=>handleGenreChange(genres)}
                    >
                        {genres.value}
                        </div>
            ))}
        </div>
        <div className="tool-bar" 
        alignItems="center">
            {contentRating.map((content)=>(
                <div 
                key={content.value} 
                className={
                    selectedContent.includes(content.value)?
                    "content-btn-active"
                    :"content-btn"}
                     onClick={()=>handleContentChange(content)}
                    >
                        {content.value}
                        </div>
            ))}
        </div>
        </>
    );
    
}
export default GenreList;