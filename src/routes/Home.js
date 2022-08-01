import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [isLoad, setIsLoad] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    let res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
    );
    let json = await res.json();

    console.log("json : ", json);
    console.log("json.data.movies : ", json.data.movies);
    setMovies(json.data.movies);
    setIsLoad(true);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Hello Movie World</h1>
      <div>
        {!isLoad ? (
          <span>loading...</span>
        ) : (
          <div>
            {movies.map((m) => (
              <Movie
                key={m.id}
                coverImg={m.medium_cover_image}
                title={m.title}
                rating={m.rating}
                summary={m.summary}
                genres={m.genres}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
