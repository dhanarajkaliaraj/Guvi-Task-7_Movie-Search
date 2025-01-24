import React, { useState, useEffect } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

function PageNation({ totalMovies, handleFetchMovies }) {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (totalMovies > 0) {
            handleFetchMovies(currentPage);
        }
    }, [currentPage]);
   
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    onClick={() => setCurrentPage((current) => {
                        if (totalMovies.length && current > 1) {
                            return current - 1
                        }
                        return 1
                    })}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <p className="text-sm text-gray-700 text-center">
                        Showing <span className="font-medium">{currentPage}</span> to <span className="font-medium">{Math.ceil(totalMovies / 10)}</span> of{' '}
                        <span className="font-medium">{totalMovies}</span> results
                    </p>
                <a
                    onClick={() => setCurrentPage((current) => {
                        if (totalMovies.length && current >= 1) {
                            return current + 1
                        }
                        return current
                    })}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{currentPage}</span> to <span className="font-medium">{Math.ceil(totalMovies / 10)}</span> of{' '}
                        <span className="font-medium">{totalMovies}</span> results
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                        <a
                            onClick={() => setCurrentPage((current) => {
                                if (totalMovies.length && current > 1) {
                                    return current - 1
                                }
                                return 1
                            })}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon aria-hidden="true" className="size-5" />
                        </a>
                        
                        <a
                            onClick={() => setCurrentPage((current) => {
                                if (totalMovies.length && current >= 1) {
                                    return current + 1
                                }
                                return current
                            })}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon aria-hidden="true" className="size-5" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default PageNation