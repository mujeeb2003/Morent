"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cities = ["Semarang", "Jakarta", "Surabaya", "Bandung", "Yogyakarta"];
const times = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`
);

export function RentalForm() {
    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState("credit-card");

    return (
        <div className="space-y-8">
            {/* Billing Info */}
            <section className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-semibold">Billing Info</h2>
                        <p className="text-sm text-gray-500">
                            Please enter your billing info
                        </p>
                    </div>
                    <span className="text-sm text-gray-500">
                        Step {step} of 4
                    </span>
                </div>
                <div className="grid gap-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Name</Label>
                            <Input
                                placeholder="Your name"
                                className="h-12 bg-gray-50 border-0"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Phone Number</Label>
                            <Input
                                placeholder="Phone number"
                                className="h-12 bg-gray-50 border-0"
                            />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Address</Label>
                            <Input
                                placeholder="Address"
                                className="h-12 bg-gray-50 border-0"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Town/City</Label>
                            <Input
                                placeholder="Town or city"
                                className="h-12 bg-gray-50 border-0"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Rental Info */}
            <section className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-semibold">Rental Info</h2>
                        <p className="text-sm text-gray-500">
                            Please select your rental date
                        </p>
                    </div>
                    <span className="text-sm text-gray-500">Step 2 of 4</span>
                </div>

                <div className="space-y-6">
                    {/* Pick-up */}
                    <div className="space-y-4">
                        <RadioGroup defaultValue="pickup">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="pickup"
                                    id="pickup"
                                    className="text-primary-500"
                                />
                                <Label htmlFor="pickup">Pick - Up</Label>
                            </div>
                        </RadioGroup>
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label>Locations</Label>
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
                            <div className="space-y-2">
                                <Label>Date</Label>
                                <Input
                                    type="date"
                                    className="h-12 bg-gray-50 border-0"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Time</Label>
                                <Select>
                                    <SelectTrigger className="h-12 bg-gray-50 border-0">
                                        <SelectValue placeholder="Select time" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {times.map((time) => (
                                            <SelectItem key={time} value={time}>
                                                {time}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Drop-off */}
                    <div className="space-y-4">
                        <RadioGroup defaultValue="dropoff">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="dropoff"
                                    id="dropoff"
                                    className="text-primary-500"
                                />
                                <Label htmlFor="dropoff">Drop - Off</Label>
                            </div>
                        </RadioGroup>
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label>Locations</Label>
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
                            <div className="space-y-2">
                                <Label>Date</Label>
                                <Input
                                    type="date"
                                    className="h-12 bg-gray-50 border-0"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Time</Label>
                                <Select>
                                    <SelectTrigger className="h-12 bg-gray-50 border-0">
                                        <SelectValue placeholder="Select time" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {times.map((time) => (
                                            <SelectItem key={time} value={time}>
                                                {time}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-semibold">
                            Payment Method
                        </h2>
                        <p className="text-sm text-gray-500">
                            Please enter your payment method
                        </p>
                    </div>
                    <span className="text-sm text-gray-500">Step 3 of 4</span>
                </div>

                <div className="space-y-6">
                    <RadioGroup
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="space-y-4"
                    >
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="credit-card"
                                    id="credit-card"
                                />
                                <Label htmlFor="credit-card">Credit Card</Label>
                            </div>
                            <div className="flex gap-2">
                                <Image
                                    src="/visa.svg"
                                    alt="Visa"
                                    width={40}
                                    height={25}
                                />
                                <Image
                                    src="/mastercard.svg"
                                    alt="Mastercard"
                                    width={40}
                                    height={25}
                                />
                            </div>
                        </div>

                        {paymentMethod === "credit-card" && (
                            <div className="grid gap-4 p-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Card Number</Label>
                                        <Input
                                            placeholder="Card number"
                                            className="h-12 bg-gray-50 border-0"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Expiration Date</Label>
                                        <Input
                                            placeholder="MM/YY"
                                            className="h-12 bg-gray-50 border-0"
                                        />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Card Holder</Label>
                                        <Input
                                            placeholder="Card holder name"
                                            className="h-12 bg-gray-50 border-0"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>CVC</Label>
                                        <Input
                                            placeholder="CVC"
                                            className="h-12 bg-gray-50 border-0"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="paypal" id="paypal" />
                                <Label htmlFor="paypal">PayPal</Label>
                            </div>
                            <Image
                                src="/paypal.svg"
                                alt="PayPal"
                                width={80}
                                height={20}
                            />
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="bitcoin" id="bitcoin" />
                                <Label htmlFor="bitcoin">Bitcoin</Label>
                            </div>
                            <Image
                                src="/bitcoin.svg"
                                alt="Bitcoin"
                                width={80}
                                height={20}
                            />
                        </div>
                    </RadioGroup>
                </div>
            </section>

            {/* Confirmation */}
            <section className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-semibold">Confirmation</h2>
                        <p className="text-sm text-gray-500">
                            We are getting to the end. Just few clicks and your
                            rental is ready!
                        </p>
                    </div>
                    <span className="text-sm text-gray-500">Step 4 of 4</span>
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="marketing" />
                            <Label htmlFor="marketing" className="text-sm">
                                I agree with sending an Marketing and newsletter
                                emails. No spam, promised!
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms" className="text-sm">
                                I agree with our terms and conditions and
                                privacy policy.
                            </Label>
                        </div>
                    </div>

                    <Link href={"/dashboard"}>
                        <Button className="w-auto mt-4 h-12 bg-primary-500 hover:bg-primary-600">
                            Rent Now
                        </Button>
                    </Link>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Shield className="h-4 w-4" />
                        <p>All your data are safe</p>
                    </div>
                    <p className="text-xs text-gray-500">
                        We are using the most advanced security to provide you
                        the best experience ever.
                    </p>
                </div>
            </section>
        </div>
    );
}
