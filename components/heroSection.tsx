import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6 md:grid-cols-2">
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary-400 to-primary-500 p-6 text-white">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-bold mb-4">
                            The Best Platform for Car Rental
                        </h2>
                        <p className="mb-6 text-blue-50 w-[300px]">
                            Ease of doing a car rental safely and reliably. Of
                            course at a low price.
                        </p>
                        <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                            Rental Car
                        </Button>
                    </div>
                    <div className="absolute bottom-0 right-5 w-[600px]">
                        <Image
                            src="/images/ads-1.svg"
                            alt="Sports Car"
                            width={1000}
                            height={700}
                            className="object-cover w-full "
                        />
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 p-6 text-white">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-bold mb-4">
                            Easy way to rent a car at a low price
                        </h2>
                        <p className="mb-6 text-blue-50 w-[300px]">
                            Providing cheap car rental services and safe and comfortable facilities.
                        </p>
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                            Rental Car
                        </Button>
                    </div>
                    <div className="absolute bottom-0 left-16 w-[600px]">
                        <Image
                            src="/images/ads-2.svg"
                            alt="Luxury Car"
                            width={1000}
                            height={700}
                            className="object-cover w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
