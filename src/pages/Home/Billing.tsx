import { useState } from "react";

import TitleCard from "../../components/ui/TitleCard";

const BILLS = [
  {
    invoiceNo: "#4567",
    amount: "22,111",
    description: "Product usages",
    generatedOn: "last year",
    status: "Pending",
    paidOn: "-",
  },
  {
    invoiceNo: "#4523",
    amount: "39,989",
    description: "Product usages",
    generatedOn: "last year",
    status: "Pending",
    paidOn: "-",
  },
  {
    invoiceNo: "#4453",
    amount: "39,989",
    description: "Product usages",
    status: "Paid",
    generatedOn: "last year",
    paidOn: "6 jue",
  },

  {
    invoiceNo: "#4359",
    amount: "28,927",
    description: "Product usages",
    status: "Paid",
    generatedOn: "last year",
    paidOn: "6 jue",
  },

  {
    invoiceNo: "#3359",
    amount: "28,927",
    description: "Product usages",
    status: "Paid",
    generatedOn: "last year",
    paidOn: "6 jue",
  },

  {
    invoiceNo: "#3367",
    amount: "28,927",
    description: "Product usages",
    status: "Paid",
    generatedOn: "last year",
    paidOn: "6 jue",
  },

  {
    invoiceNo: "#3359",
    amount: "28,927",
    description: "Product usages",
    status: "Paid",
    generatedOn: "last year",
    paidOn: "6 jue",
  },

  {
    invoiceNo: "#2359",
    amount: "28,927",
    description: "Product usages",
    status: "Paid",
    generatedOn: "last year",
    paidOn: "6 jue",
  },
];

interface Bill {
  invoiceNo: string;
  amount: string;
  description: string;
  generatedOn: string;
  status: string;
  paidOn: string;
}

const Billing = () => {
  const [bills] = useState(BILLS as Bill[]);

  const getPaymentStatus = (status: string) => {
    if (status === "Paid")
      return <div className="badge badge-success">{status}</div>;
    if (status === "Pending")
      return <div className="badge badge-primary">{status}</div>;
    else return <div className="badge badge-ghost">{status}</div>;
  };

  return (
    <TitleCard title="Billing History" topMargin="mt-2">
      {/* Invoice list in table format loaded constant */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Invoice No</th>
              <th>Invoice Generated On</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice Paid On</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((l) => {
              return (
                <tr key={l.invoiceNo}>
                  <td>{l.invoiceNo}</td>
                  <td>{l.generatedOn}</td>
                  <td>{l.description}</td>
                  <td>${l.amount}</td>
                  <td>{getPaymentStatus(l.status)}</td>
                  <td>{l.paidOn}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TitleCard>
  );
};

export default Billing;
