import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Fuel, GaugeCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Car {
    id: string;
    name: string;
    category: string;
    image: string;
    fuelCapacity: string;
    transmission: string;
    capacity: string;
    price: number;
    isFavorite: boolean;
    originalPrice?: number;
}

interface CarSectionsProps {
    recentCars: Array<Car>;
    recommendedCars: Array<Car>;
}

export function CarSections({ recentCars, recommendedCars }: CarSectionsProps) {
    return (
        <div className="space-y-8">
            {/* Recent Cars Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-secondary-300">
                        Recent Car
                    </h3>
                    <Link
                        href="#"
                        className="text-primary-500 hover:underline text-sm"
                    >
                        View All
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recentCars.map((car) => (
                        <Card
                            key={car.id}
                            className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-semibold text-base md:text-lg">
                                            {car.name}
                                        </h4>
                                        <p className="text-secondary-300 text-sm">
                                            {car.category}
                                        </p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={
                                            car.isFavorite
                                                ? "text-error-500"
                                                : "text-secondary-300"
                                        }
                                    >
                                        <Heart
                                            className="h-5 w-5"
                                            fill={
                                                car.isFavorite
                                                    ? "currentColor"
                                                    : "none"
                                            }
                                        />
                                    </Button>
                                </div>

                                <div className="relative h-[120px] md:h-[140px] w-full">
                                    <Image
                                        src={car.image}
                                        alt={car.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="grid grid-cols-3 gap-2 text-secondary-300 text-xs md:text-sm">
                                    <div className="flex items-center gap-1">
                                        <Fuel className="h-4 w-4 flex-shrink-0" />
                                        <span className="truncate">
                                            {car.fuelCapacity}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <GaugeCircle className="h-4 w-4 flex-shrink-0" />
                                        <span className="truncate">
                                            {car.transmission}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="h-4 w-4 flex-shrink-0" />
                                        <span className="truncate">
                                            {car.capacity}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-base md:text-lg font-bold">
                                                ${car.price.toFixed(2)}/
                                            </span>
                                            <span className="text-secondary-300 text-sm">
                                                day
                                            </span>
                                        </div>
                                        {car.originalPrice && (
                                            <p className="text-secondary-300 text-xs md:text-sm line-through">
                                                ${car.originalPrice.toFixed(2)}
                                            </p>
                                        )}
                                    </div>
                                    <Button className="bg-primary-500 hover:bg-primary-600 text-sm">
                                        Rent Now
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Recommendation Cars Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-secondary-300">
                        Recommendation Car
                    </h3>
                    <Link
                        href="#"
                        className="text-primary-500 hover:underline text-sm"
                    >
                        View All
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recommendedCars.map((car) => (
                        <Card
                            key={car.id}
                            className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-semibold text-base md:text-lg">
                                            {car.name}
                                        </h4>
                                        <p className="text-secondary-300 text-sm">
                                            {car.category}
                                        </p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={
                                            car.isFavorite
                                                ? "text-error-500"
                                                : "text-secondary-300"
                                        }
                                    >
                                        <Heart
                                            className="h-5 w-5"
                                            fill={
                                                car.isFavorite
                                                    ? "currentColor"
                                                    : "none"
                                            }
                                        />
                                    </Button>
                                </div>

                                <div className="relative h-[120px] md:h-[140px] w-full">
                                    <Image
                                        src={car.image}
                                        alt={car.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="grid grid-cols-3 gap-2 text-secondary-300 text-xs md:text-sm">
                                    <div className="flex items-center gap-1">
                                        <Fuel className="h-4 w-4 flex-shrink-0" />
                                        <span className="truncate">
                                            {car.fuelCapacity}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <GaugeCircle className="h-4 w-4 flex-shrink-0" />
                                        <span className="truncate">
                                            {car.transmission}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="h-4 w-4 flex-shrink-0" />
                                        <span className="truncate">
                                            {car.capacity}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-base md:text-lg font-bold">
                                                ${car.price.toFixed(2)}/
                                            </span>
                                            <span className="text-secondary-300 text-sm">
                                                day
                                            </span>
                                        </div>
                                        {car.originalPrice && (
                                            <p className="text-secondary-300 text-xs md:text-sm line-through">
                                                ${car.originalPrice.toFixed(2)}
                                            </p>
                                        )}
                                    </div>
                                    <Button className="bg-primary-500 hover:bg-primary-600 text-sm">
                                        Rent Now
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
