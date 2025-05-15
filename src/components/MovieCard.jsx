import { ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from './ui/card';

export default function MovieCard({ result }) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Card 
        className="bg-[var(--theme-purple)] transition-colors border border-border"
      >
        <Link href={`/movie/${result.id}`}>
          {/* Movie Poster/Image */}
          <CardHeader>
            <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            alt="Movie poster image"
            width={500}
            height={300}
            className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
          ></Image>
          </CardHeader>
          {/* Movie overview, release_date, and upvotes */}
          <CardContent>
            <div className='p-2'>
            <p className='line-clamp-2 text-md'>{result.overview}</p>
            <h2 className='text-lg font-bold truncate'>
              {result.title || result.name}
            </h2>
            <p className='flex items-center'>
              {result.release_date || result.first_air_date}
              <ThumbsUp className='h-5 mr-1 ml-3' />
              {result.vote_count}
            </p>
          </div>
          </CardContent>
        </Link>
      </Card>        
    </div>
  );
}