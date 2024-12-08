import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: "sm" | "md"
}

export function StarRating({ rating, maxRating = 5, size = "md" }: StarRatingProps) {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={`${
            size === "sm" ? "h-4 w-4" : "h-5 w-5"
          } ${
            index < Math.floor(rating)
              ? "fill-primary-500 text-primary-500"
              : "fill-secondary-200 text-secondary-200"
          }`}
        />
      ))}
    </div>
  )
}

