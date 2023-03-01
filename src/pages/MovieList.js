import { useState, useEffect } from "react";
import { Card } from "../components";



export const MovieList = () => {
  const [movies,setMovies] = useState([]);

  useEffect(() =>  {
    async function fetchMovies(){
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=26786d6daf9f6b1dbed57bc6e2db1892");
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
          



        </div>
      </section>
    </main>
  )
}
