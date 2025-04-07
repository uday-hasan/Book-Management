const BookSkeleton = () => {
  return (
    <div className="bg-secondary flex flex-col items-center gap-4 p-4 animate-pulse">
      <div className="flex justify-end w-full">
        <div className="w-6 h-6 bg-gray-300 rounded-full" />
      </div>

      <div>
        <div className="w-80 h-80 bg-gray-300 rounded" />
      </div>

      <div className="w-full space-y-2">
        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto" />

        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto" />
        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto" />

        <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto mt-4" />
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />

        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mt-4" />
      </div>
    </div>
  );
};

export default BookSkeleton;
