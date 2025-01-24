import { Link } from "react-router";

export default function Card({ movie, index }) {
    return (
        <div key={index} className=" bg-white rounded-lg shadow-md sm:m-2 max-w-[150px]">
           <div className="w-[150px]">
            <img
                className="w-[100%] rounded-md"
                src={`${movie.Poster}`}
                alt="movies"
            />
           </div>
           
            <div className="mt-2">
                <p className="text-[0.9rem] font-semibold ">{movie.Title}</p>
                <p className="text-gray-600">Year - {movie.Year}</p>
                <p className="w-full px-2 py-1 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600 text-center">
                <Link to={`/description/${movie.imdbID}`} >
                Description
                </Link>
                </p>
                <span>

                </span>
            </div>
        </div>
    )
}