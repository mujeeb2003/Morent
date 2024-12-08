import { Navbar } from "@/components/navbar";
import { BookingForm } from "@/components/bookingForm";
import { CarCard } from "@/components/carCard";
import { CategoryFilters } from "@/components/categoryFilters";
import { MobileFilters } from "@/components/mobileFilters";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function CategoryPage() {
    const cars = [
        {
            id: 1,
            name: "Koenigsegg",
            category: "Sport",
            image: "/images/car-1.svg",
            fuelCapacity: "90L",
            transmission: "Manual",
            capacity: "2 People",
            price: 99.00,
            isFavorite: true
          },
          {
            id: 2,
            name: "Nissan GT-R",
            category: "Sport",
            image: "/images/car-2.svg",
            fuelCapacity: "80L",
            transmission: "Manual",
            capacity: "2 People",
            price: 80.00,
            originalPrice: 100.00
          },
        {
            id: 3,
            name: "Koenigsegg",
            category: "Sport",
            image: "/images/car-1.svg",
            fuelCapacity: "90L",
            transmission: "Manual",
            capacity: "2 People",
            price: 99.00,
            isFavorite: true
          },
          {
            id: 4,
            name: "Nissan GT-R",
            category: "Sport",
            image: "/images/car-2.svg",
            fuelCapacity: "80L",
            transmission: "Manual",
            capacity: "2 People",
            price: 80.00,
            originalPrice: 100.00
          },
        {
            id: 5,
            name: "Koenigsegg",
            category: "Sport",
            image: "/images/car-1.svg",
            fuelCapacity: "90L",
            transmission: "Manual",
            capacity: "2 People",
            price: 99.00,
            isFavorite: true
          },
          {
            id: 6,
            name: "Nissan GT-R",
            category: "Sport",
            image: "/images/car-2.svg",
            fuelCapacity: "80L",
            transmission: "Manual",
            capacity: "2 People",
            price: 80.00,
            originalPrice: 100.00
          },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 ">
                    <aside className="hidden md:block md:col-span-3 px-8 py-4 bg-white">
                        <CategoryFilters />
                    </aside>
                    <div className="md:col-span-9 py-4 flex gap-8 flex-col">
                        <BookingForm />
                        <div className="flex items-center justify-between md:hidden mt">
                            <MobileFilters />
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {cars.map((car, index) => (
                                <CarCard key={index} {...car} />
                            ))}
                        </div>
                        <div className="flex flex-row mt-8 justify-center items-center">
                            <Button className="w-auto md:w-auto bg-primary-500 ml-auto">
                                Show more cars
                            </Button>
                            <p className="text-muted-foreground text-sm ml-auto pr-2">
                                {cars.length} Cars
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
