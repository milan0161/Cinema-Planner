import { useParams } from 'react-router-dom';
import { useGetSingleMovieQuery } from '../features/movies/api/movieApi';
import { publicUrl } from '../api/axios';

const SingleMoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetSingleMovieQuery(id!);
  if (isError) {
    return <h1 className="text-center text-red-600">{error.message}</h1>;
  }
  console.log(data);
  return (
    <section className="mx-28 my-2 flex flex-row border border-slate-300 rounded overflow-hidden">
      <div className="">
        <img className="w-[500px] h-[700px]" src={`${publicUrl}${data?.movie.image}`} alt="" />
      </div>
      <div className=" flex-1 flex flex-col px-10">
        <h1 className="text-center my-4 text-[45px]">{data?.movie.title}</h1>
        <div className="flex flex-col gap-y-10">
          <p className="movie_descrip">
            <strong>Year:</strong>
            {data?.movie.year}
          </p>
          <p className="movie_descrip">
            <strong>Duration:</strong>
            {data?.movie.duration}min
          </p>
          <p className="movie_descrip">
            <strong>Director:</strong>
            {data?.movie.director}
          </p>
          <p className="movie_descrip">
            <strong>Actors:</strong>
            {data?.movie.actors}
          </p>
          <p className="movie_descrip">
            <strong>Description:</strong>
            {data?.movie.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleMoviePage;