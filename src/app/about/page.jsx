import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function About() {
  return (
    <div className='max-w-6xl mx-auto p-3 spacey-4 '>

      <h1 className='text-2xl font-medium text-green-500 text-center'>About</h1>
      
      <Carousel className="mt-15">
        <CarouselContent className="text-center">
          <CarouselItem>
            <p>
              Welcome to this movie database website! This site contains everything movie related that you want to know!
            </p>
          </CarouselItem>
          <CarouselItem>
            <p>
              This website is designed to provide a comprehensive database of many movies from around the world, along with information about each movie. You can search for movies as well, making it easy to find your next watch!
            </p>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
    </div>
  )
}
