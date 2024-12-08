"use client";

import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React, { useState } from "react";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import PieChartComponent from "@/components/chartView";

const cars = [
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

const cities = ["Semarang", "Jakarta", "Surabaya", "Bandung", "Yogyakarta"];

const times = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, "0");
    return `${hour}:00`;
});

function Dashboard() {
    const [pickupDate, setPickupDate] = useState<string>("");
    const [dropoffDate, setDropoffDate] = useState<string>("");

    return (
        <div className="bg-gray-100">
            <Navbar />
            <div className="flex gap-6">
                <aside>
                    <Sidebar
                        activeItem="/dashboard"
                        onItemClick={(item) => console.log(item)}
                    />
                </aside>

                {/* Card-1 */}
                <div className="px-6 py-6 bg-white mx-4 my-4 rounded-md flex flex-col">
                    <h1 className="text-xl">Details Rental</h1>
                    <div className="mt-2">
                        <Image
                            src={"/images/map.svg"}
                            alt="map"
                            width={550}
                            height={350}
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-row gap-2 mt-4">
                        <div className="w-fit rounded-md p-2 bg-primary-500">
                            <Image
                                src="/images/car-2.svg"
                                alt="ads"
                                width={100}
                                height={150}
                                className="object-cover"
                            />
                        </div>
                        <div className="text-md">
                            <h2>{cars[0].name}</h2>
                            <p>{cars[0].category}</p>
                        </div>
                        <div className="ml-auto">
                            <p className="text-muted-foreground text-sm">
                                #9761
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4">
                        {/* Pick-up Section */}
                        <div className="space-y-4 bg-white p-4">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-primary-500 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                </div>
                                <Label className="font-semibold text-lg">
                                    Pick - Up
                                </Label>
                            </div>
                            <div className="flex justify-between gap-2">
                                <div className="space-y-2 ">
                                    <Label className="text-sm font-medium text-gray-600">
                                        Locations
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="h-12 bg-gray-50 border-0">
                                            <SelectValue placeholder="Select your city" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {cities.map((city) => (
                                                <SelectItem
                                                    key={city}
                                                    value={city.toLowerCase()}
                                                >
                                                    {city}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <hr className="w-[1px] h-auto bg-black" />
                                <div className="space-y-2 ">
                                    <Label className="text-sm font-medium text-gray-600">
                                        Date
                                    </Label>
                                    <input
                                        type="date"
                                        value={pickupDate}
                                        onChange={(e) =>
                                            setPickupDate(e.target.value)
                                        }
                                        className="w-full h-12 px-3 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                                <hr className="w-[1px] h-auto bg-black" />

                                <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-600">
                                        Time
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="h-12 bg-gray-50 border-0">
                                            <SelectValue placeholder="Select your time" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {times.map((time) => (
                                                <SelectItem
                                                    key={time}
                                                    value={time}
                                                >
                                                    {time}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* Drop-off Section */}
                        <div className="space-y-4 bg-white p-4">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full border-2 border-primary-500 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                                </div>
                                <Label className="font-semibold text-lg">
                                    Drop - Off
                                </Label>
                            </div>
                            <div className="flex justify-between">
                                <div className="space-y-2 ">
                                    <Label className="text-base font-medium text-gray-600">
                                        Locations
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="h-12 bg-gray-50 border-0">
                                            <SelectValue placeholder="Select your city" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {cities.map((city) => (
                                                <SelectItem
                                                    key={city}
                                                    value={city.toLowerCase()}
                                                >
                                                    {city}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <hr className="w-[1px] h-auto bg-black" />
                                <div className="space-y-2 ">
                                    <Label className="text-base font-medium text-gray-600">
                                        Date
                                    </Label>
                                    <input
                                        type="date"
                                        value={pickupDate}
                                        onChange={(e) =>
                                            setPickupDate(e.target.value)
                                        }
                                        className="w-full h-12 px-3 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                                <hr className="w-[1px] h-auto bg-black" />

                                <div className="space-y-2">
                                    <Label className="text-base font-medium text-gray-600">
                                        Time
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="h-12 bg-gray-50 border-0">
                                            <SelectValue placeholder="Select your time" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {times.map((time) => (
                                                <SelectItem
                                                    key={time}
                                                    value={time}
                                                >
                                                    {time}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center border-t-[1px] pt-6 border-gray-500">
                        <div>
                            <h1 className="text-2xl font-bold">
                                Total Rental Price
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Overall price and includes rental discount
                            </p>
                        </div>
                        <h1 className="text-3xl">
                            ${cars[0].price.toFixed(2)}
                        </h1>
                    </div>
                </div>

                {/* card-2 */}
                <div className=" my-4 mr-2 flex flex-1 flex-col gap-4">
                    <div className="w-full h-[300px] bg-white p-4 px-10 rounded-md">
                        <div className="flex justify-between mb-6">
                            <h1>Top 5 Car Rental</h1>
                            <p className="text-sm text-primary-500"></p>
                        </div>
                        <PieChartComponent />
                    </div>
                    <div className=" bg-white p-4 rounded-md px-10">
                        <div className="flex justify-between mb-6">
                            <h1>Recent Transactions</h1>
                            <p className="text-sm text-primary-500">View All</p>
                        </div>
                        {cars.map((car, index) => (
                            <div
                                key={index}
                                className="flex gap-4 px-6 space-y-8"
                            >
                                <Image
                                    src={car.image}
                                    alt="Nissan Gtr"
                                    width={150}
                                    height={150}
                                    className="object-contain"
                                />
                                <div className="text-sm">
                                    <h1>{car.name}</h1>
                                    <p>{car.category}</p>
                                </div>
                                <div className="ml-auto">
                                    <p className="text-muted-foreground">
                                        20 July
                                    </p>
                                    <p>${car.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
