import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/heroSection";
import { BookingForm } from "@/components/bookingForm";
import { CarCard } from "@/components/carCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function Home() {
    const popularCars = [
        {
            id: 1,
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
            id: 2,
            name: "Nissan GT-R",
            category: "Sport",
            image: "/images/car-2.svg",
            fuelCapacity: "80L",
            transmission: "Manual",
            capacity: "2 People",
            price: 80.0,
            originalPrice: 100.0,
        },
        {
            id: 3,
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
            id: 4,
            name: "Nissan GT-R",
            category: "Sport",
            image: "/images/car-2.svg",
            fuelCapacity: "80L",
            transmission: "Manual",
            capacity: "2 People",
            price: 80.0,
            originalPrice: 100.0,
        },
        {
            id: 5,
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
            id: 6,
            name: "Nissan GT-R",
            category: "Sport",
            image: "/images/car-2.svg",
            fuelCapacity: "80L",
            transmission: "Manual",
            capacity: "2 People",
            price: 80.0,
            originalPrice: 100.0,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
                <HeroSection />
                <BookingForm />
                <div className="container mx-auto px-4 py-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">Popular Car</h2>
                        <a href="#" className="text-blue-600 hover:underline">
                            View All
                        </a>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {popularCars.map((car, index) => (
                            <CarCard key={index} {...car} />
                        ))}
                    </div>
                    <div className="flex flex-row mt-8 justify-center items-center">
                        <Link href="/category" className="ml-auto">
                            <Button className="w-full md:w-auto bg-primary-500">
                                Show more cars
                            </Button>
                        </Link>
                        <p className="text-muted-foreground text-sm ml-auto">
                            {popularCars.length} Cars
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
