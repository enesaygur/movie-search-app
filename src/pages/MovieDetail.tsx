import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Movie Detail</h1>
      <p>ID: {id}</p>
    </div>
  );
}

export default MovieDetail;
