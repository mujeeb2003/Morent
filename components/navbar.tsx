import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell, Heart, Search, Settings, SlidersHorizontal } from 'lucide-react'
import { MobileMenu } from "@/components/mobileMenu"
import Image from "next/image"
export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center ">
          <div className="flex items-center sm:mr-auto md:mr-0 lg:mr-0">
            <MobileMenu />
            <Link href="/" className="text-2xl font-bold text-primary-500">
              MORENT
            </Link>
          </div>
          
          <div className="hidden md:flex relative max-w-xl flex-1 mx-24 mr-auto">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search something here"
              className="pl-9 pr-12 rounded-full"
            />
            <Button 
              size="icon" 
              variant="ghost" 
              className="absolute right-0 top-0"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className=" border-[1px] border-muted-foreground rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative border-[1px] border-muted-foreground rounded-full">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-1 h-2 w-2 rounded-full bg-red-500" />
            </Button>
            <Button variant="ghost" size="icon" className=" border-[1px] border-muted-foreground rounded-full">
              <Settings className="h-5 w-5" />
            </Button>
            <Button size="icon" className="rounded-full">
              <Image
                alt="Avatar"
                className="rounded-full"
                src="/placeholder.svg?height=32&width=32"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                height={32}
                width={32}
              />
            </Button>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="md:hidden relative mt-4">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search something here"
            className="pl-9 pr-12"
          />
          <Button 
            size="icon" 
            variant="ghost" 
            className="absolute right-0 top-0"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

