"use client";

import { StarRating } from "@/components/starRating";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function RentalSummary() {
  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Rental Summary</h2>
        <p className="text-sm text-gray-500">
          Prices may change depending on the length of the rental and the price of your rental car.
        </p>
      </div>

      <div className="flex gap-4">
        <div className="relative w-24 h-24 rounded-lg">
          <Image
            src="/images/car-2.svg"
            alt="Nissan GT-R"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Nissan GT - R</h3>
          <div className="flex items-center gap-2">
            <StarRating rating={4} />
            <span className="text-sm text-gray-500">440+ Reviewer</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-semibold">$80.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tax</span>
          <span className="font-semibold">$0</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Apply promo code"
          className="flex-1 h-12 px-4 bg-gray-50 rounded-lg border-0"
        />
        <Button variant="outline" className="h-12">
          Apply now
        </Button>
      </div>

      <div className="pt-4 border-t">
        <div className="flex justify-between items-center mb-1">
          <div>
            <h4 className="font-semibold">Total Rental Price</h4>
            <p className="text-sm text-gray-500">Overall price and includes rental discount</p>
          </div>
          <span className="text-2xl font-bold">$80.00</span>
        </div>
      </div>
    </div>
  );
}