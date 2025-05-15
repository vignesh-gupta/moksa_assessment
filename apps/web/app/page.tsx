import CustomerHistoryTable from "@/components/dashboard/customer-history-table";
import CustomerLiveTable from "@/components/dashboard/customer-live-table";

const HomePage = () => {
  return (
    <div>
      <CustomerLiveTable />
      <CustomerHistoryTable />
    </div>
  );
};

export default HomePage;
