"use client"

import { Button } from "@/components/ui/button";
import { useEffect } from "react"

export default function error({ error, reset}) {
  useEffect(() => {
    console.log(error);
  }, [error])
  return (
    <div className='text-center mt-5'>
      <h1>Something went wrong. Please try again later.</h1>
      <Button className="mt-5 hover:bg-green-400"onClick={() => reset()}>
        Try Again
      </Button>
    </div>
  )
}
