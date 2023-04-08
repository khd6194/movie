import { useEffect, useState } from "react";
import Movie from "../components/movie.js"

function Home() {
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const getMovie = async () => {
      const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovie();
    },[]);
    console.log(movies)
    console.log(loading)
    return (
      <div>
          {loading ? <strong>Loading...</strong>:<div>{movies.map((movie) =><Movie id={movie.id}coverImg={movie.medium_cover_image}
          title={movie.title}summary={movie.summary}genres={movie.genres} />)}</div>}</div>
    );
}

export default Home;