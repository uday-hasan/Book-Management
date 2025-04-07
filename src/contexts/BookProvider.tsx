import { ReactNode, useEffect, useState } from "react";
import { BookContext } from "../hooks/useBooks";

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [wiseList, setWiseList] = useState<Book[]>([]);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<string>("1");
  const [bookCount, setBookCount] = useState<number>(0);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const isExist = localStorage.getItem("wiselist");
        if (isExist) {
          setWiseList(JSON.parse(isExist));
        }

        const params = new URLSearchParams(window.location.search);
        const pageParam = params.get("page") || "1";
        setPage(pageParam);
        const trimmed = params.get("search")?.replace(" ", "+");

        const url = trimmed
          ? `https://gutendex.com/books?search=${trimmed}&page=${pageParam}`
          : `https://gutendex.com/books?page=${pageParam}`;

        const response = await fetch(url);
        const { results, count } = await response.json();
        setBooks(results);
        setBookCount(count);
      } catch (error) {
        setBooks([]);
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [search, page]);
  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        loading,
        setLoading,
        wiseList,
        setWiseList,
        search,
        setSearch,
        bookCount,
        setBookCount,
        page,
        setPage,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
