import { CustomerHistoryData } from "@moksa_asses/utils";
import { useEffect, useState } from "react";

export const useCustomerHistoryData = () => {
  const [historyData, setHistoryData] = useState<CustomerHistoryData[]>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    console.log("Fetching customer history data...");
    (async () => {
      const response = await fetch("http://localhost:5000/api/history");
      const data = await response.json();
      setHistoryData(data);
    })();
  }, [refresh]);

  return {
    historyData,
    refresh,
    setRefresh,
  };
};
