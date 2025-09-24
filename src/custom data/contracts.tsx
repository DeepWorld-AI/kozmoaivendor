import { ContractRecords, DocumentRecords } from "@/types";

export const contractData: ContractRecords[] = [
  {
    id: "cr001",
    contract_name:
      "OfficeSpace - Subscription Services Agreement REQ18334 - 8-29-24 1 - 20240909192009900",
    contract_no: 1001,
    contract_type: "Full-time",
    status: "pending",
    date: "2023-08-15",
  },
  {
    id: "cr002",
    contract_name: "Consultancy Contract",
    contract_no: 1002,
    contract_type: "Part-time",
    status: "processing",
    date: "2023-07-22",
  },
  {
    id: "cr003",
    contract_name: "Maintenance Contract",
    contract_no: 1003,
    contract_type: "Temporary",
    status: "success",
    date: "2023-06-10",
  },
  {
    id: "cr004",
    contract_name: "Freelance Agreement",
    contract_no: 1004,
    contract_type: "Freelance",
    status: "failed",
    date: "2023-09-05",
  },
  {
    id: "cr005",
    contract_name: "Lease Contract",
    contract_no: 1005,
    contract_type: "Long-term",
    status: "success",
    date: "2023-05-30",
  },
  {
    id: "cr006",
    contract_name: "Purchase Agreement",
    contract_no: 1006,
    contract_type: "Short-term",
    status: "pending",
    date: "2023-08-01",
  },
  {
    id: "cr007",
    contract_name: "Supply Agreement",
    contract_no: 1007,
    contract_type: "Full-time",
    status: "processing",
    date: "2023-07-12",
  },
  {
    id: "cr008",
    contract_name: "Employment Contract",
    contract_no: 1008,
    contract_type: "Part-time",
    status: "success",
    date: "2023-08-25",
  },
  {
    id: "cr009",
    contract_name: "Non-disclosure Agreement",
    contract_no: 1009,
    contract_type: "Freelance",
    status: "failed",
    date: "2023-09-02",
  },
  {
    id: "cr010",
    contract_name: "Partnership Agreement",
    contract_no: 1010,
    contract_type: "Long-term",
    status: "success",
    date: "2023-06-18",
  },
];

export const contractSummarydata = [
  {
    category: "Primary Reviewers",
    details: "Rick, Lisa, Mike (Counterparty)",
  },
  {
    category: "Documents Being Reviewed",
    details: (
      <>
        <p>Draft Contract Agreement v2.3 (Updated February 10, 2024)</p>
        <p>Scope of Work v3.0 (Last Updated March 1, 2024)</p>
      </>
    ),
  },
];

export const contractSummarycolumns = [
  { header: "Category", key: "category" },
  {
    header: "Details",
    key: "details",
    render: (details: any) => <div>{details}</div>,
  },
];

export const documentData: DocumentRecords[] = [
  {
    id: "doc001",
    document_name: "eContracts_Pipeline Status Report (2).pdf",
    document_no: 2001,
    document_type: "Primary Document",
    status: "Finalized Document",
    date_uploaded: "2024-09-26",
  },
  {
    id: "doc002",
    document_name: "eContracts_Upcoming Obligations (3)34.pdf",
    document_no: 2002,
    document_type: "Finalized Document",
    status: "Finalized Document",
    date_uploaded: "2024-09-26",
  },
  {
    id: "doc003",
    document_name: "SALES AGREEMENT.pdf",
    document_no: 2003,
    document_type: "Primary Document",
    status: "Finalized Document",
    date_uploaded: "2024-09-26",
  },
  {
    id: "doc004",
    document_name: "WO Agreement.docx",
    document_no: 2004,
    document_type: "Finalized Document",
    status: "Finalized Document",
    date_uploaded: "2024-09-26",
  },
  {
    id: "doc005",
    document_name: "SaaS Subscription Agreement REQ15043 - 9-13-21.pdf",
    document_no: 2005,
    document_type: "Primary Document",
    status: "Finalized Document",
    date_uploaded: "2021-09-13",
  },
  {
    id: "doc006",
    document_name:
      "Workiva - Master Subscription and Services Agreement - 02-12-16.pdf",
    document_no: 2006,
    document_type: "Finalized Document",
    status: "Finalized Document",
    date_uploaded: "2016-02-12",
  },
  {
    id: "doc007",
    document_name:
      "Alteryx, Inc. - Quote Q-449817 (TS) REQ17794 - 1-31-24._NV12292023144325.pdf",
    document_no: 2007,
    document_type: "Primary Document",
    status: "Finalized Document",
    date_uploaded: "2024-01-31",
  },
  {
    id: "doc008",
    document_name: "Xerox - Country Participation Agreement - 10-19-12.pdf",
    document_no: 2008,
    document_type: "Finalized Document",
    status: "Finalized Document",
    date_uploaded: "2012-10-19",
  },
  {
    id: "doc009",
    document_name: "rest-api-azure.pdf",
    document_no: 2009,
    document_type: "Finalized Document",
    status: "Finalized Document",
    date_uploaded: "2024-09-26",
  },
  {
    id: "doc010",
    document_name:
      "Bharat Petroleum-LA 775579-1_Healthy Habits Dental and Ortho Care_Purchase Agreement_2024-01-18.pdf",
    document_no: 2010,
    document_type: "Finalized Document",
    status: "Submission of Amendment",
    date_uploaded: "2024-01-18",
  },
  {
    id: "doc011",
    document_name:
      "00013235_OS Associates of the Maine Line_PA_0000977130_2024-07-08.pdf",
    document_no: 2011,
    document_type: "Finalized Document",
    status: "Submission of Amendment",
    date_uploaded: "2024-07-08",
  },
  {
    id: "doc012",
    document_name:
      "00013172_N Florida Oral and Facial Surg_DPMS PA_2024-07-09.pdf",
    document_no: 2012,
    document_type: "Finalized Document",
    status: "Submission of Amendment",
    date_uploaded: "2024-07-09",
  },
  {
    id: "doc013",
    document_name: "Children's Mercy Hospital 05-08-19 to 05-08-20.pdf",
    document_no: 2013,
    document_type: "Finalized Document",
    status: "Submission of Amendment",
    date_uploaded: "2019-05-08",
  },
  {
    id: "doc014",
    document_name: "00013290_Dr Joseph McMurray_DPMS PA_2024-07-09.pdf",
    document_no: 2014,
    document_type: "Finalized Document",
    status: "Submission of Amendment",
    date_uploaded: "2024-07-09",
  },
  {
    id: "doc015",
    document_name: "MSA Agreement.docx",
    document_no: 2015,
    document_type: "Finalized Document",
    status: "Amendment Request 005",
    date_uploaded: "2024-09-26",
  },
  {
    id: "doc016",
    document_name:
      "00013071_Oral and Facial Surgery CTR_DPMS PA_2024-06-26.pdf",
    document_no: 2016,
    document_type: "Finalized Document",
    status: "License Agreement Contract",
    date_uploaded: "2024-06-26",
  },
];
