import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface BookContextType {
  books: Book[] | [];
  setBooks: Dispatch<SetStateAction<Book[] | []>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  wiseList: Book[];
  setWiseList: Dispatch<SetStateAction<Book[] | []>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
  bookCount: number;
  setBookCount: Dispatch<SetStateAction<number>>;
}

const DefaultContextValue: BookContextType = {
  books: [],
  setBooks: () => {},
  loading: false,
  setLoading: () => {},
  wiseList: [],
  setWiseList: () => {},
  search: "",
  setSearch: () => {},
  bookCount: 0,
  setBookCount: () => {},
  page: "",
  setPage: () => {},
};

export const BookContext = createContext<BookContextType>(DefaultContextValue);
export const useBooks = () => useContext(BookContext);

export default useBooks;
