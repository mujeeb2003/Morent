import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Fuel, GaugeCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

interface CarCardProps {
  id:number
  name: string
  category: string
  image: string
  fuelCapacity: string
  transmission: string
  capacity: string
  price: number
  originalPrice?: number
  isFavorite?: boolean
}

export function CarCard({
  id,
  name,
  category,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  isFavorite = false,
}: CarCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 relative">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
          <Button variant="ghost" size="icon" className={isFavorite ? "text-error-500" : ""}>
            <Heart className="h-5 w-5" fill={isFavorite ? "red" : "white"} />
          </Button>
        </div>
        <div className="w-full my-10 ">
          <Image
            src={image}
            alt={name}
            width={400}
            height={300}
            className="w-full object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Fuel className="h-4 w-4" />
            <span>{fuelCapacity}</span>
          </div>
          <div className="flex items-center gap-2">
            <GaugeCircle className="h-4 w-4" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{capacity}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold">${price}/</span>
            <span className="text-sm text-muted-foreground">day</span>
          </div>
          <Link href={`/cars/${id}`}>
            <Button className="bg-primary-500 hover:bg-primary-600">
              Rent Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

