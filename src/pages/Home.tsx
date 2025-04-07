import { FormEvent } from "react";
import Books from "../components/Books";
import useBooks from "../hooks/useBooks";
import { debounce } from "../libs/action";
import BookSkeleton from "../components/BookSkeleton";
import Pagination from "../components/Pagination";
const Home = () => {
  const { books, loading, setSearch, search } = useBooks();

  const handleSearch = debounce((e: FormEvent<HTMLInputElement>) => {
    const search_input = (e.target as HTMLInputElement).value.trim();
    const params = new URLSearchParams(window.location.search);
    if (search_input === "" && params.get("search")) {
      params.delete("search");
      setSearch("");
    } else {
      params.set("search", search_input);
    }
    const queryString = params.toString();
    const newUrl = queryString
      ? `${window.location.pathname}?${queryString}`
      : window.location.pathname;

    window.history.replaceState(null, "", newUrl);
    setSearch(newUrl);
  });

  return (
    <div>
      <div>
        <input
          placeholder="Search book by title"
          className="border w-full py-3 px-2 bg-secondary mb-4 rounded"
          onChange={handleSearch}
          defaultValue={
            search ? search?.split("=")[1]?.split("+")?.join(" ") : ""
          }
        />
      </div>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {new Array(10).fill(0).map((_, idx) => (
            <BookSkeleton key={idx} />
          ))}
        </div>
      ) : (
        <Books books={books} />
      )}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
