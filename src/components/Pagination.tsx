import useBooks from "../hooks/useBooks";

const Pagination = () => {
  const { bookCount } = useBooks();
  const pageCount = Math.ceil(bookCount / 32);
  const { setPage, page } = useBooks();
  const handlePage = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    const queryString = params.toString();
    const newUrl = queryString
      ? `${window.location.pathname}?${queryString}`
      : window.location.pathname;
    setPage(String(page));
    window.history.replaceState(null, "", newUrl);
  };
  return (
    <div className="flex gap-4 w-full overflow-auto bg-secondary py-8 px-4 mt-5">
      {new Array(pageCount).fill(0).map((_, index) => (
        <button
          key={index}
          onClick={() => handlePage(index + 1)}
          className={`${page === String(index + 1) && "active-link"}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
