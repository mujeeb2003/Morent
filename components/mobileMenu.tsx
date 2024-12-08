"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Heart, Bell, Settings } from 'lucide-react'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Button variant="ghost" className="justify-start" size="lg">
            <Heart className="mr-2 h-5 w-5" />
            Favorite
          </Button>
          <Button variant="ghost" className="justify-start" size="lg">
            <Bell className="mr-2 h-5 w-5" />
            Notifications
          </Button>
          <Button variant="ghost" className="justify-start" size="lg">
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

