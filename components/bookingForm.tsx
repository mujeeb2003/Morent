'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowUpDown } from 'lucide-react'

const cities = [
  "Semarang",
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Yogyakarta"
]

const times = Array.from({ length: 24 }, (_, i) => {
  const hour = i.toString().padStart(2, '0')
  return `${hour}:00`
})

export function BookingForm() {
  const [pickupDate, setPickupDate] = useState<string>("")

  return (
    <div className="container mx-auto mt-8 relative z-10">
      <div className="bg-transparent ">
        <div className="">
          <div className="grid gap-6 lg:grid-cols-[1fr,auto,1fr]">
            {/* Pick-up Section */}
            <div className="space-y-6 bg-white p-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <Label className="font-semibold text-lg">Pick - Up</Label>
              </div>
              <div className="flex justify-between">
                <div className="space-y-2 ">
                  <Label className="text-base font-medium text-gray-600">Locations</Label>
                  <Select>
                    <SelectTrigger className="h-12 bg-gray-50 border-0">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city.toLowerCase()}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <hr className="w-[1px] h-auto bg-black"/>
                <div className="space-y-2 ">
                  <Label className="text-base font-medium text-gray-600">Date</Label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full h-12 px-3 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <hr className="w-[1px] h-auto bg-black"/>

                <div className="space-y-2">
                  <Label className="text-base font-medium text-gray-600">Time</Label>
                  <Select>
                    <SelectTrigger className="h-12 bg-gray-50 border-0">
                      <SelectValue placeholder="Select your time" />
                    </SelectTrigger>
                    <SelectContent>
                      {times.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Switch Button */}
            <div className="flex items-center justify-center">
              <Button 
                size="icon" 
                className="h-14 w-14 rounded-lg bg-primary-500 hover:bg-primary-600 shadow-lg"
              >
                <ArrowUpDown className="h-6 w-6" />
              </Button>
            </div>

            {/* Drop-off Section */}
            <div className="space-y-6 bg-white p-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-primary-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                </div>
                <Label className="font-semibold text-lg">Drop - Off</Label>
              </div>
              <div className="flex justify-between">
                <div className="space-y-2 ">
                  <Label className="text-base font-medium text-gray-600">Locations</Label>
                  <Select>
                    <SelectTrigger className="h-12 bg-gray-50 border-0">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city.toLowerCase()}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <hr className="w-[1px] h-auto bg-black"/>
                <div className="space-y-2 ">
                  <Label className="text-base font-medium text-gray-600">Date</Label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full h-12 px-3 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <hr className="w-[1px] h-auto bg-black"/>

                <div className="space-y-2">
                  <Label className="text-base font-medium text-gray-600">Time</Label>
                  <Select>
                    <SelectTrigger className="h-12 bg-gray-50 border-0">
                      <SelectValue placeholder="Select your time" />
                    </SelectTrigger>
                    <SelectContent>
                      {times.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}