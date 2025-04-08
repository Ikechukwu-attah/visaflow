import { useState } from "react";

interface Payment {
  id: number;
  user: string;
  amount: string;
  date: string;
  status: "Paid" | "Pending" | "Canceled";
  transactionId: string;
  method: string;
}

const initialPayments: Payment[] = [
  {
    id: 1,
    user: "John Doe",
    amount: "$99",
    date: "2025-02-01",
    status: "Paid",
    transactionId: "TXN123456",
    method: "Credit Card",
  },
  {
    id: 2,
    user: "Sarah Smith",
    amount: "$199",
    date: "2025-02-02",
    status: "Pending",
    transactionId: "TXN789012",
    method: "PayPal",
  },
  {
    id: 3,
    user: "David Lee",
    amount: "$299",
    date: "2025-02-03",
    status: "Canceled",
    transactionId: "TXN345678",
    method: "Bank Transfer",
  },
];

const Payments: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>(initialPayments);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  const updateStatus = (
    id: number,
    newStatus: "Paid" | "Pending" | "Canceled"
  ) => {
    setPayments((prev) =>
      prev.map((payment) =>
        payment.id === id ? { ...payment, status: newStatus } : payment
      )
    );
  };

  const filteredPayments = payments.filter((payment) =>
    payment.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold">Manage Premium Payments</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by user name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border rounded w-full sm:w-1/3 my-4"
      />

      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Payment ID</th>
            <th className="border p-2">User</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((payment) => (
            <tr key={payment.id} className="text-center">
              <td className="border p-2">{payment.id}</td>
              <td className="border p-2">{payment.user}</td>
              <td className="border p-2">{payment.amount}</td>
              <td className="border p-2">{payment.date}</td>
              <td className="border p-2">
                <select
                  value={payment.status}
                  onChange={(e) =>
                    updateStatus(
                      payment.id,
                      e.target.value as "Paid" | "Pending" | "Canceled"
                    )
                  }
                  className={`p-1 rounded ${
                    payment.status === "Paid"
                      ? "bg-green-500 text-white"
                      : payment.status === "Pending"
                      ? "bg-yellow-500 text-black"
                      : "bg-red-500 text-white"
                  }`}
                >
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </td>
              <td className="border p-2">
                <button
                  onClick={() => setSelectedPayment(payment)}
                  className="px-3 py-1 bg-blue-600 text-white rounded-md"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View Details Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
            <p>
              <strong>User:</strong> {selectedPayment.user}
            </p>
            <p>
              <strong>Amount:</strong> {selectedPayment.amount}
            </p>
            <p>
              <strong>Date:</strong> {selectedPayment.date}
            </p>
            <p>
              <strong>Status:</strong> {selectedPayment.status}
            </p>
            <p>
              <strong>Transaction ID:</strong> {selectedPayment.transactionId}
            </p>
            <p>
              <strong>Payment Method:</strong> {selectedPayment.method}
            </p>
            <button
              onClick={() => setSelectedPayment(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payments;
