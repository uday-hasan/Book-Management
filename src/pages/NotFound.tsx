import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl font-semibold text-red-400">Page not found</p>
      <button>
        <Link to={"/"}>Go to home</Link>
      </button>
    </div>
  );
};

export default NotFound;
