"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SearchBox() {
  const [search, setSearch] = useState("")
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return
    router.push(`/search/${encodeURIComponent(search)}`)
  }
  return (
    <form className="flex justify-between px-5 max-w-6xl mx-auto" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        variant="ghost"
        className="justify-center mt-2 disabled:text-muted-foreground"
        style={{
          color: "var(--theme-purple)",
        }}
        disabled={search === ""}
      >
        Search
      </Button>
    </form>
  )
}
