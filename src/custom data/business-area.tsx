// Define table columns
export const columns = [
    { header: "Contract Type", key: "ContractType" },
    { header: "Count", key: "value" },
    { header: "% of Total Contracts", key: "Percentage" },
    { header: "Status Breakdown", key: "Status" },
  ];
  
  // Define table data
  export const dataItem = [
    {
      ContractType: "Master Service Agreements",
      value: "120",
      Percentage: "27",
      Status: "80 Active, 40 Expired",
    },
    {
      ContractType: "Dealer Contracts",
      value: "100",
      Percentage: "22",
      Status: "70 Active, 10 Terminating",
    },
    {
      ContractType: "Software Licensing",
      value: "80",
      Percentage: "18",
      Status: "60 Active, 20 Expired",
    },
    {
      ContractType: "Service Agreements",
      value: "150",
      Percentage: "33",
      Status: "120 Active, 30 Expired",
    },
  ];