import Link from "next/link"
import { Button } from "./ui/button"
import { HomeIcon, InfoIcon } from "lucide-react"

export default function MenuItem({ title, address }) {
  return (
    <Button 
      asChild 
      variant="ghost"
      className="hover:bg-[var(--theme-purple)]"
    >
      <Link href={address} className="flex items-center gap-4 transition-colors hover:text-[var(--theme-purple)]">
        {/* Render Icons on Small screens */}
        {title === "Home" ? (
          <HomeIcon className="text-2xl sm:hidden" />
        ) : title === "About" ? (
          <InfoIcon className="text-2xl sm:hidden" />
        ) : null}

        {/* Always show text on larger screens */}
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
    </Button>
  )
}
