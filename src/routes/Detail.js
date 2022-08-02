import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https:yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log("json ; ", json);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
    // const json = getMovie();
    // console.log(json);
  }, []);
  //   https:yts.mx/api/v2/movie_details.json?movie_id=${id}
  return (
    <div>
      {movie ? movie.title : "loading..."}
      <img src={movie.large_cover_image} />
    </div>
  );
}
export default Detail;
