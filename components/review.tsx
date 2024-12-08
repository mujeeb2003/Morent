import { Star } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Review {
  id: string
  author: {
    name: string
    title: string
    avatar: string
  }
  rating: number
  date: string
  content: string
}

interface ReviewsProps {
  reviews: Review[]
  totalReviews: number
  averageRating: number
}

export function Reviews({ reviews, totalReviews, averageRating }: ReviewsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Reviews</h3>
          <span className="rounded-full bg-primary-500 px-2 py-1 text-xs text-white">
            {reviews.length}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${
                star <= Math.round(averageRating)
                  ? "fill-primary-500 text-primary-500"
                  : "fill-secondary-200 text-secondary-200"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-secondary-300">
            {totalReviews}+ Reviewer
          </span>
        </div>
      </div>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={review.author.avatar}
                  alt={review.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{review.author.name}</h4>
                  <p className="text-sm text-secondary-300">{review.author.title}</p>
                </div>
              </div>
              <span className="text-sm text-secondary-300">{review.date}</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= review.rating
                      ? "fill-primary-500 text-primary-500"
                      : "fill-secondary-200 text-secondary-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-secondary-500">{review.content}</p>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full">
        Show All
      </Button>
    </div>
  )
}

