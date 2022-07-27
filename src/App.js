import { useEffect, useState } from "react";

function App() {
  const [isLoad, setIsLoad] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    let res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
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
              <div key={m.id}>
                <img src={m.medium_cover_image}></img>
                <h2>
                  {m.title}({m.rating})
                </h2>
                <ul>
                  {m.genres.map((g) => (
                    <li>{g}</li>
                  ))}
                </ul>
                <div style={{ borderTop: "solid 1px #ccc" }}></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
