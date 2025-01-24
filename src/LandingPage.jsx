import { useState } from 'react';
import Card from './Card';
import PageNation from './PageNation';


function LandingPage({ movies, totalMovies, handleSearchMovie, handleFetchMovies }) {

  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <h3 className='text-center text-[3rem]'>Movies Search Wep App</h3>
      <div className="mt-6 px-6 flex max-w-md gap-x-4 mx-auto bg-gray-100">
        <label htmlFor="search" className="sr-only">Search  movie</label>
        <input id="search" name="search" type="text" required className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="Enter movie title" onChange={(e) => setSearchInput(e.target.value)} />
        <button onClick={() => handleSearchMovie(searchInput)} className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Search</button>
      </div>
      <div className="flex flex-wrap justify-evenly items-center gap-6 py-6">
        {movies.map((movie, index) => {
          return (
            <Card key={index} movie={movie} index={index} />
          );
        })}
      </div>
      <PageNation totalMovies={totalMovies} handleFetchMovies={handleFetchMovies}/>
    </>
  )
}

export default LandingPage