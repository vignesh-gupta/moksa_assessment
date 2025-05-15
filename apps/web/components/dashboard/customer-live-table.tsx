"use client";

import React from "react";
import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLiveCustomerData } from "@/hooks/use-live-customer-data";

const CustomerLiveTable = () => {
  const { events } = useLiveCustomerData();

  return (
    <Card className="max-w-xl mx-auto mt-20">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Live Customer Traffic</CardTitle>
          <CardDescription>
            Real-time customer traffic across all stores
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Store ID</TableHead>
              <TableHead>
                <div className="flex items-center gap-1">Customers In</div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">Customers Out</div>
              </TableHead>
              <TableHead>Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.length > 0 ? (
              events.map((row) => {
                return (
                  <TableRow key={row._id}>
                    <TableCell className="font-medium">
                      Store {row.store_id}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {row.customers_in}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {row.customers_out}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {format(new Date(row.date_time_stamp), "HH:mm:ss")}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No live data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CustomerLiveTable;
