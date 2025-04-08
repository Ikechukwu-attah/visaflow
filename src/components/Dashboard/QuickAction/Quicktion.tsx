import { Link } from "react-router";

const QuickActions = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>

      <button className="w-full   cursor-pointer bg-blue-600 text-white py-3 rounded-md mb-2">
        <Link to={"/visa-application"}> Apply for Visa</Link>
      </button>
      <button className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-md mb-2">
        <Link to={"/document-upload"}> Upload Documents</Link>
      </button>
      <button className="w-full  cursor-pointer bg-purple-600 text-white py-3 rounded-md">
        <Link to={"/book-consultation"}> Book Consultation</Link>
      </button>
    </div>
  );
};

export default QuickActions;
