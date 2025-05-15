"use client";

import { CustomerHistoryData } from "@moksa_asses/utils";
import { format } from "date-fns";
import { Calendar } from "lucide-react";

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
import { Button } from "../ui/button";
import { useCustomerHistoryData } from "@/hooks/use-customer-history-data";

const CustomerHistoryTable = () => {
  const { historyData, refresh, setRefresh } = useCustomerHistoryData();
  const groupedByHour = historyData.reduce(
    (acc, item) => {
      const hourKey = item.hour_start;
      if (!acc[hourKey]) {
        acc[hourKey] = [];
      }
      acc[hourKey].push(item);
      return acc;
    },
    {} as Record<string, CustomerHistoryData[]>
  );

  const sortedHours = Object.keys(groupedByHour).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );
  return (
    <Card className="max-w-xl mx-auto mt-20">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Historical Customer Traffic</CardTitle>
          <CardDescription>
            Hourly customer traffic for the last 24 hours
          </CardDescription>
        </div>
        <Button onClick={() => setRefresh(!refresh)}>Refresh</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {sortedHours.slice(0, 8).map((hourKey) => {
            const hourData = groupedByHour[hourKey];
            const hourDate = new Date(hourKey);
            const formattedHour = format(hourDate, "MMM d, yyyy HH:mm");

            return (
              <div key={hourKey} className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <h3 className="font-medium">{formattedHour}</h3>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Store ID</TableHead>
                      <TableHead>Customers In</TableHead>
                      <TableHead>Customers Out</TableHead>
                      <TableHead>Net Change</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {hourData?.map((row, index) => {
                      const netChange =
                        row.total_customers_in - row.total_customers_out;
                      return (
                        <TableRow key={`${row.store_id}-${index}`}>
                          <TableCell className="font-medium">
                            Store {row.store_id}
                          </TableCell>
                          <TableCell>{row.total_customers_in}</TableCell>
                          <TableCell>{row.total_customers_out}</TableCell>
                          <TableCell
                            className={
                              netChange > 0
                                ? "text-green-600"
                                : netChange < 0
                                  ? "text-red-600"
                                  : ""
                            }
                          >
                            {netChange > 0 ? `+${netChange}` : netChange}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerHistoryTable;
