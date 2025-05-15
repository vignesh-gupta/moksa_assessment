"use client";

import React from "react";
import { format } from "date-fns";
import { ArrowDownUp, ArrowUpDown } from "lucide-react";

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
import { useEventStream } from "@/hooks/use-event-stream";

const CustomerLiveTable = () => {
  const { events } = useEventStream("http://localhost:5000/api/stream")

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
                <div className="flex items-center gap-1">
                  Customers In
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Customers Out
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((row) => {
              return (
                <TableRow key={row._id}>
                  <TableCell className="font-medium">
                    Store {row.store_id}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {row.customers_in}
                      <ArrowDownUp className="h-4 w-4 text-green-500" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {row.customers_out}
                      <ArrowDownUp className="h-4 w-4 text-red-500" />
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {format(new Date(row.date_time_stamp), "HH:mm:ss")}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CustomerLiveTable;
