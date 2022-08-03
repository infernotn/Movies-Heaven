import React from "react";

export const MovieCard = ({ movie }) => {
  console.log(movie.Poster);
  return (
    <div className="hover:scale-110 hover:z-10 hover:b          g-opacity-100 transition-transform relative h-[25rem] w-[18rem] max-w-xs md:max-w-sm p-2 rounded-lg bg-slate-800 bg-opacity-70 flex flex-col items-center justify-center">
      <h3 className="w-full absolute top-[1%] pl-3 text-white bg-slate-800 bg-opacity-70">
        {movie.Year}
      </h3>
      <div className="w-full h-[100%] overflow-hidden flex justify-center items-center">
        <img
          src={
            movie.Poster !== `N/A`
              ? movie.Poster
              : "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"
          }
          className="  max-h-fit max-w-fit  "
        />
      </div>
      <h2 className="text-slate-300 text-m mt-2 ">{movie.Title}</h2>
    </div>
  );
};
