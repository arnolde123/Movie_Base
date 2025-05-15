"use client"

import Link from 'next/link'
import { Button } from './ui/button'
import { useSearchParams } from 'next/navigation'

export default function NavbarItem({title, param}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  
  return (
    <div className="">
      <Button 
        asChild
        variant="ghost"
        className="w-45 h-14 font-semibold hover:bg-accent/90 transition-colors"
      >
        <Link
          className={`
            ${genre === param 
              ? "text-primary dark:text-primary-foreground underline underline-offset-8 decoration-4"
                : "text-foreground hover:text-[var(--theme-purple)] dark:hover:text-[var(--theme-purple)]"
            }
          `}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </Button>
    </div>
  )
}