import React from 'react'
import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Description() {

    let { id } = useParams();

    let URL_ID_SEARCH = `https://www.omdbapi.com/?i=${id}&type=movie&apikey=b8bf11a5`;

    const [movieDetail, setMovieDetial] = useState({});

    const fetchMovieById = async () => {

        const movieData = await fetch(
            URL_ID_SEARCH
        );

        const movieResponse = await movieData.json();
        console.log('movie', movieResponse, id);
        if (movieResponse.Response == 'True') {
            setMovieDetial(movieResponse);
        }
    };

    useEffect(() => {
        fetchMovieById();
    }, []);

    return (
        <div>
            <div className="bg-white">
                <div className="py-6">

                    {/* Image gallery */}
                    <div className="mx-auto mt-6 max-w-2xl px-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div>
                        <img
                            alt='poster'
                            src={movieDetail.Poster}
                            className="aspect-4/5 w-[100%] object-cover sm:rounded-lg lg:aspect-auto"
                        />
                        </div>
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{movieDetail.Title}</h1>

                            {/* Description and details */}

                            <div>
                                <h3 className="sr-only">Description</h3>
                                <div className="my-6">
                                    <p className="text-base text-gray-900">{movieDetail.Plot}</p>
                                </div>
                            </div>

                            {/* Reviews */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900 mb-4">Rating:</h3>
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                aria-hidden="true"
                                                className={classNames(
                                                    parseInt(movieDetail.imdbRating) / 2 > rating ? 'text-gray-900' : 'text-gray-200',
                                                    'size-5 shrink-0',
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{movieDetail.imdbRating} out of 5 stars</p>
                                    <a href={"#"} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {movieDetail.imdbVotes} reviews
                                    </a>
                                </div>
                            </div>

                            {/* Genre */}
                            <div className="mt-5">
                                <h3 className="text-sm font-medium text-gray-900">Genre:</h3>
                                <div className="mt-4">
                                    <span className="text-gray-600">{movieDetail.Genre}</span>
                                </div>
                            </div>

                            {/* Rated */}
                            <div className="mt-5">
                                <h3 className="text-sm font-medium text-gray-900">Rated:</h3>
                                <div className="mt-4">
                                    <span className="text-gray-600">{movieDetail.Rated}</span>
                                </div>
                            </div>

                            {/* Released Date */}
                            <div className="mt-5">
                                <h3 className="text-sm font-medium text-gray-900">Released:</h3>
                                <div className="mt-4">
                                    <span className="text-gray-600">{movieDetail.Released}</span>
                                </div>
                            </div>

                            {/* Language */}
                            <div className="mt-5">
                                <h3 className="text-sm font-medium text-gray-900">Language:</h3>
                                <div className="mt-4">
                                    <span className="text-gray-600">{movieDetail.Language}</span>
                                </div>
                            </div>

                            {/* run time */}
                            <div className="mt-5">
                                <h3 className="text-sm font-medium text-gray-900">Duration:</h3>
                                <div className="mt-4">
                                    <span className="text-gray-600">{movieDetail.Runtime}</span>
                                </div>
                            </div>

                            {/* Director */}
                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Director:</h3>
                                <div className="mt-4">
                                    <span className="text-gray-600">{movieDetail.Director}</span>
                                </div>
                            </div>

                            {/* Writer */}
                            <div className="mt-5">
                                <h3 className="text-sm font-medium text-gray-900">Writer:</h3>
                                <div className="mt-4">
                                    <span className="text-gray-600">{movieDetail.Writer}</span>
                                </div>
                            </div>


                            {/* Actors */}
                            <div className="mt-5">
                                <h3 className="text-sm font-medium text-gray-900">Actors:</h3>
                                <div className="mt-4">
                                    <span className="text-gray-600">{movieDetail.Actors}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description