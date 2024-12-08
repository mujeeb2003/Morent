'use client'

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

interface FilterOption {
  label: string
  count: number
  value: string
}

const typeOptions: FilterOption[] = [
  { label: "Sport", count: 10, value: "sport" },
  { label: "SUV", count: 12, value: "suv" },
  { label: "MPV", count: 16, value: "mpv" },
  { label: "Sedan", count: 20, value: "sedan" },
  { label: "Coupe", count: 14, value: "coupe" },
  { label: "Hatchback", count: 14, value: "hatchback" },
]

const capacityOptions: FilterOption[] = [
  { label: "2 Person", count: 10, value: "2" },
  { label: "4 Person", count: 14, value: "4" },
  { label: "6 Person", count: 12, value: "6" },
  { label: "8 or More", count: 16, value: "8" },
]

export function CategoryFilters() {
  const [priceRange, setPriceRange] = useState([100])

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs font-semibold text-secondary-400 mb-4">TYPE</h3>
        <div className="space-y-4">
          {typeOptions.map((option) => (
            <div key={option.value} className="flex items-center">
              <Checkbox id={`type-${option.value}`} className="border-secondary-300" />
              <Label
                htmlFor={`type-${option.value}`}
                className="flex flex-1 items-center gap-2 ml-2 text-sm font-normal"
              >
                {option.label}
                <span className="text-secondary-300">({option.count})</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-secondary-400 mb-4">CAPACITY</h3>
        <div className="space-y-4">
          {capacityOptions.map((option) => (
            <div key={option.value} className="flex items-center">
              <Checkbox id={`capacity-${option.value}`} className="border-secondary-300" />
              <Label
                htmlFor={`capacity-${option.value}`}
                className="flex flex-1 items-center gap-2 ml-2 text-sm font-normal"
              >
                {option.label}
                <span className="text-secondary-300">({option.count})</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-secondary-400 mb-4">PRICE</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={[100]}
            max={100}
            step={1}
            className="w-full"
            onValueChange={setPriceRange}
          />
          <div className="flex items-center justify-between text-sm">
            <span>Max. ${priceRange[0]}.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

