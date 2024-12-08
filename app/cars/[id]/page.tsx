"use client";

import { Navbar } from "@/components/navbar";
import { CategoryFilters } from "@/components/categoryFilters";
import { StarRating } from "@/components/starRating";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { CarSections } from "@/components/carSections";
import { MobileFilters } from "@/components/mobileFilters";
import Link from "next/link";



export default function CarDetails() {
    const carImages = [
        {
            src: "/images/car-2.svg",
            alt: "Nissan GT-R Exterior",
            main: true,
        },
        {
            src: "/images/interior.svg",
            alt: "Nissan GT-R Interior Front",
        },
        {
            src: "/images/interior-back.svg",
            alt: "Nissan GT-R Interior Back",
        },
    ];

    const specifications = [
        { label: "Type Car", value: "Sport" },
        { label: "Capacity", value: "2 Person" },
        { label: "Steering", value: "Manual" },
        { label: "Gasoline", value: "70L" },
    ];

    const recentCars = [
        {
            id: "1",
            name: "Koenigsegg",
            category: "Sport",
            image: "/images/car-1.svg",
            fuelCapacity: "90L",
            transmission: "Manual",
            capacity: "2 People",
            price: 99.0,
            isFavorite: true,
        },
        {
            id: "2",
            name: "Nissan GT-R",
            category: "Sport",
            image: "/images/car-2.svg",
            fuelCapacity: "80L",
            transmission: "Manual",
            capacity: "2 People",
            price: 80.0,
            originalPrice: 100.0,
            isFavorite: true,

        },
        {
            id: "3",
            name: "Rolls-Royce",
            category: "Sport",
            image: "/images/car-2.svg",
            fuelCapacity: "70L",
            transmission: "Manual",
            capacity: "4 People",
            price: 96.0,
            isFavorite: true,
        },
    ];

    const recommendedCars = [
        {
            id: "4",
            name: "All New Rush",
            category: "SUV",
            image: "/images/car-2.svg",
            fuelCapacity: "70L",
            transmission: "Manual",
            capacity: "6 People",
            price: 72.0,
            originalPrice: 80.0,
            isFavorite: true,
        },
        {
            id: "5",
            name: "CR - V",
            category: "SUV",
            image: "/images/car-2.svg",
            fuelCapacity: "80L",
            transmission: "Manual",
            capacity: "6 People",
            price: 80.0,
            isFavorite: true,
        },
        {
            id: "6",
            name: "All New Terios",
            category: "SUV",
            image: "/images/car-2.svg",
            fuelCapacity: "90L",
            transmission: "Manual",
            capacity: "6 People",
            price: 74.0,
            isFavorite: false,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <div className="grid gap-20 md:grid-cols-[280px,1fr] lg:grid-cols-[280px,1fr] xl:grid-cols-[280px,1fr]">
                    <aside className="hidden md:block space-y-6">
                        <CategoryFilters />
                    </aside>

                    <div className="space-y-8">
                        <div className="flex flex-col lg:flex-row ">
                            <div className="lg:w-2/5">
                                <div className=" rounded-lg bg-primary-500 p-4 md:p-8 mb-4 text-white ">
                                    <div className="flex lg:flex-col flex-col items-center gap-4 md:gap-8">
                                        <div className="space-y-4 text-center md:text-left">
                                            <h1 className="text-xl md:text-2xl font-bold">
                                                Sports car with the best design
                                                and acceleration
                                            </h1>
                                            <p className="text-primary-100 text-sm md:text-base">
                                                Safety and comfort while driving
                                                a futuristic and elegant sports
                                                car
                                            </p>
                                        </div>
                                        <div className="relative lg:w-[300px] md:w-[150px] lg:h-[100px]">
                                            <Image
                                                src="/images/car-2.svg"
                                                alt="Nissan GT-R"
                                                width={300}
                                                height={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 md:gap-4">
                                    {carImages.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 flex ${
                                                index === 0
                                                    ? "border-primary-500 bg-primary-500"
                                                    : "border-transparent"
                                            }`}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={200}
                                                height={150}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full lg:w-2/5 space-y-6 bg-white rounded-md p-4 mx-auto md:p-8">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <h2 className="text-xl md:text-2xl font-bold">
                                            Nissan GT - R
                                        </h2>
                                        <div className="flex items-center gap-2">
                                            <StarRating rating={4} />
                                            <span className="text-secondary-300 text-sm">
                                                440+ Reviewer
                                            </span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-error-500"
                                    >
                                        <Heart
                                            className="h-5 w-5"
                                            fill="currentColor"
                                        />
                                    </Button>
                                </div>
                                <p className="text-secondary-500 text-sm md:text-base leading-relaxed">
                                    NISMO has become the embodiment of Nissan&apos;s
                                    outstanding performance, inspired by the
                                    most unforgiving proving ground, the &quot;race
                                    track&quot;.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {specifications.map((spec, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center"
                                        >
                                            <span className="text-secondary-300 text-sm">
                                                {spec.label}
                                            </span>
                                            <span className="font-semibold text-sm">
                                                {spec.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl md:text-3xl font-bold">
                                                $80.00/
                                            </span>
                                            <span className="text-secondary-300">
                                                day
                                            </span>
                                        </div>
                                        <p className="text-secondary-300 text-sm line-through">
                                            $100.00
                                        </p>
                                    </div>
                                    <Link href="/payment">
                                        <Button className="bg-primary-500 hover:bg-primary-600">
                                            Rent Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-md p-4 md:p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <h3 className="text-lg md:text-xl font-semibold">
                                    Reviews
                                </h3>
                                <span className="rounded-full bg-primary-500 px-2 py-0.5 text-xs text-white">
                                    13
                                </span>
                            </div>
                            <div className="space-y-6">
                                {[
                                    {
                                        name: "Alex Stanton",
                                        position: "CEO at Bukalapak",
                                        review: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                                        date: "21 July 2022",
                                        rating: 4,
                                    },
                                    {
                                        name: "Skyler Dias",
                                        position: "CEO at Amazon",
                                        review: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                                        date: "21 July 2022",
                                        rating: 4,
                                    },
                                ].map((review, index) => (
                                    <div
                                        key={index}
                                        className="border-b pb-6 last:border-0"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                            <div className="flex gap-4">
                                                <Image
                                                    src="/placeholder.svg?height=48&width=48"
                                                    alt={review.name}
                                                    width={48}
                                                    height={48}
                                                    className="rounded-full"
                                                />
                                                <div className="space-y-2">
                                                    <h4 className="font-semibold">
                                                        {review.name}
                                                    </h4>
                                                    <p className="text-sm text-secondary-300">
                                                        {review.position}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-1">
                                                <span className="text-sm text-secondary-300">
                                                    {review.date}
                                                </span>
                                                <StarRating
                                                    rating={review.rating}
                                                />
                                            </div>
                                        </div>
                                        <p className="mt-4 text-secondary-500 text-sm md:text-base">
                                            {review.review}
                                        </p>
                                    </div>
                                ))}
                                <button className="w-full text-center text-primary-500 hover:underline">
                                    Show All Reviews
                                </button>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <MobileFilters />
                        </div>

                        <CarSections
                            recentCars={recentCars}
                            recommendedCars={recommendedCars}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
