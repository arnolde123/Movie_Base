"use client"
import MenuItem from "./MenuItem"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

import { Button } from "./ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="flex justify-between items-center p-3 max-w-7xl mx-auto">
      {/* Top left Home and About */}
      <div className="flex gap-4">
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
        <SignedOut>
          <MenuItem title="Sign in" address="/sign-in" />
        </SignedOut>
        <MenuItem title="Home" address="/" />
        <MenuItem title="About" address="/about" />
      </div>
      <div className="flex gap-4">
        {/*Theme Menu*/}
        <DropdownMenu className="">
          <DropdownMenuTrigger asChild>
            <Button className = "bg-gray-600" variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Top right Logo? */}
        <Link href="/" className="flex gap-1 items-center">
          <span
            className="text-2xl font-bold py-1 px-2 rounded-lg text-white"
            style={{ backgroundColor: "var(--theme-purple)" }}
          >
            Movie
          </span>
          <span className="text-xl hidden sm:inline">Base</span>
        </Link>
      </div>
    </nav>
  )
}
