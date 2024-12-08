"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
import Image from 'next/image';

interface RecentTransactionProps {
  transactions: {
    title: string;
    category: string;
    image: string;
    amount: number;
    date: string;
  }[];
}

const RecentTransaction: React.FC<RecentTransactionProps> = ({ transactions }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src={transaction.image}
                  alt={transaction.title}
                  width={64}
                  height={64}
                  className="rounded-md"
                />
                <div>
                  <p className="font-medium">{transaction.title}</p>
                  <p className="text-gray-500">{transaction.category}</p>
                  <p className="text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <p className="font-medium">${transaction.amount}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransaction;