"use client";

import { Navbar } from "@/components/navbar";
import { RentalForm } from "@/components/rentalForm";
import { RentalSummary } from "@/components/rentalSummary";
import { Footer } from "@/components/footer";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col-reverse md:grid gap-8 md:grid-cols-[1fr,380px]">
          <RentalForm />
          <div className="block">
            <RentalSummary />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}