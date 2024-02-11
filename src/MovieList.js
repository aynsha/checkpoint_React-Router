
import React from "react";
import MovieCard from "./MovieCard";

const MovieList =({movies})=> {
  //
  return(
      <div>
          {movies.map((movie)=>(
            <div style={{"display":"inline-block"}} >
              <MovieCard key={movie.id}  movie={movie}/>
              </div>
          ))}
      </div>
 
  );
  };
  export default  MovieList;