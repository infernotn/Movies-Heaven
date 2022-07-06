import React from "react";

export const MovieCard = ({ movie }) => {
  console.log(movie.Poster);
  return (
    <div className="hover:scale-110 hover:z-10 hover:bg-opacity-100 transition-transform relative max-w-xs md:max-w-sm p-1 rounded-lg bg-slate-800 bg-opacity-70 flex flex-col items-center justify-center">
      <h3 className="w-full absolute top-[1%] left-[3%] text-white">
        {movie.Year}
      </h3>
      <img
        src={
          movie.Poster !== `N/A`
            ? movie.Poster
            : "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"
        }
        className="min-w-fit w-full  max-h-sm "
      />
      <h2 className="text-slate-300 text-m mt-2 ">{movie.Title}</h2>
    </div>
  );
};
