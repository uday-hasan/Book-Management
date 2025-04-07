import Book from "../components/Book";
import useBooks from "../hooks/useBooks";

const WiseList = () => {
  const { wiseList } = useBooks();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {wiseList.length ? (
        wiseList.map((book) => <Book book={book} key={book.id} />)
      ) : (
        <h1 className="text-2xl font-semibold">No wiselisted books found</h1>
      )}
    </div>
  );
};

export default WiseList;
