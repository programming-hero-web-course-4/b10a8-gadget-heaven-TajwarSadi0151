
import { BiSolidCommentError } from "react-icons/bi";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 text-gray-700 h-screen ">
      <BiSolidCommentError className="text-red-700 mb-5 text-5xl"/>
        <h1 className="text-4xl font-bold mb-2">Ops! Something went wrong.</h1>
        <p className="text-lg text-gray-600 mb-6">
          Page does not exist!!! an error recently occurred.
        </p>
        <Link to="/" className="bg-green-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none transition-transform transform hover:scale-105 py-5 px-10">Back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;