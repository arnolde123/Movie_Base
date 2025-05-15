import Image from 'next/image';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

async function fetchMovie(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  
  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    throw new Error('Failed to fetch movie data');
  }

  return res.json();
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await fetchMovie(movieId);

  return (
    <div className="w-full bg-gray-600 dark:bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Suspense>
          <div className="flex flex-col md:flex-row gap-8">
            <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
              {/** Movie Poster */}
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                alt={movie.title || movie.name}
                width={500}
                height={750}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </div>
            
            <div className="mt-5 flex-1 space-y-6">
              {/** Title and Release Date */}
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">
                  {movie.title || movie.name}
                  {movie.release_date && (
                    <span className="text-gray-400 ml-2">
                      ({new Date(movie.release_date).getFullYear()})
                    </span>
                  )}
                </h1>
                {/* Votes */}
                <div className="flex items-center gap-4">
                  {movie.vote_average && (
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span>
                        {movie.vote_average.toFixed(1)}/10 ({movie.vote_count} votes)
                      </span>
                    </div>
                  )}
                  {/** Runtime */}
                  {movie.runtime && (
                    <span>
                      {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                    </span>
                  )}
                </div>
                {/** Genres */}
                <div className="flex flex-wrap gap-2">
                  {movie.genres?.map((genre) => (
                    <span 
                      key={genre.id}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:opacity-80"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
              {/** overview */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Overview</h2>
                <p className="text-gray-300 leading-relaxed">
                  {movie.overview || 'No overview available.'}
                </p>
              </div>
              
              {/** Movie Homepage*/}
              {movie.homepage && (
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[var(--theme-purple)] hover:opacity-70 rounded-md transition-colors"
                >
                  Official Website
                </a>
              )}
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}