import Book from "./Book";

const Books = ({ books }: { books: Book[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {books ? (
        books.map((book) => <Book book={book} key={book.id} />)
      ) : (
        <h1>No books found</h1>
      )}
    </div>
  );
};

export default Books;
