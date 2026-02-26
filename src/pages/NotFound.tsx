import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-cyan-400 mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#0a1628] rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
