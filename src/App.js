import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { MovieCard } from "./MovieCard";
import { AiFillCloseCircle } from "react-icons/ai";

function App() {
  const api_url = "http://www.omdbapi.com?apikey=c013032f";
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovieas = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    await setMovies(data.Search);
    console.log("hi");
    console.log(data.Search);
    console.log(movies);
  };
  useEffect(() => {
    searchMovieas(searchTerm);
  }, []);

  return (
    <div className="w-screen min-h-screen pt-10 pb-10 flex flex-col justify-start items-center  bg-slate-700">
      <h1 className="font-extrabold text-transparent text-5xl  bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-600 to-cyan-700 text-opacity-70 ">
        Movies Heaven
      </h1>

      <div className="w-[60%] md:w-[30%]  mt-5 flex bg-slate-800 bg-opacity-0 focus-within:bg-opacity-50 justify-center items-center rounded-md p-1 opacity-85">
        <div className="w-[90%] h-10 flex justify-center items-center relative">
          <input
            className="w-full h-full text-lg pl-2 bg-transparent border-none text-slate-50 text opacity-30 focus-within:text-white  focus-within:text-opacity-100 "
            placeholder="search for a movie"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              searchMovieas(searchTerm);
            }}
          />
          {
            <AiFillCloseCircle
              className={
                (searchTerm != 0 ? "opacity-100" : "opacity-0") +
                "   absolute right-2 text-2xl text-slate-50 cursor-pointer hover:scale-x-105"
              }
              onClick={() => {
                setSearchTerm("");
              }}
            />
          }
        </div>
        <HiSearch
          className="flex w-[10%]  justify-center items-center  text-white   text-2xl hover:cursor-pointer hover:scale-110"
          onClick={() => searchMovieas(searchTerm)}
        />
      </div>
      {/* Movies Cards */}
      <div className="w-screen mt-14 flex flex-wrap justify-center items-center gap-x-10 gap-y-14 ">
        {movies?.length > 0 ? (
          movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })
        ) : searchTerm.length > 10 ? (
          <span className="h-[100%] mt-10 text-3xl text-gray-400 ">
            404 not found
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
