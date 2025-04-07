import { FaRegStar } from "react-icons/fa";
import useBooks from "../hooks/useBooks";
import { toast } from "react-toastify";

const Book = ({ book }: { book: Book }) => {
  const {
    title,
    authors,
    formats: { "image/jpeg": image },
    id,
    subjects: sub,
  } = book;
  const { wiseList, setWiseList } = useBooks();
  const subjects = sub.map((item) => {
    if (item.includes(" -- ")) {
      return item.split(" -- ").join("-");
    }
    return item;
  });

  const handleFavourite = (book: Book) => {
    const isExist = localStorage.getItem("wiselist");
    if (!isExist) {
      setWiseList([book]);
      localStorage.setItem("wiselist", JSON.stringify([book]));
    } else {
      const data = JSON.parse(isExist);
      const ids = data.map((item: Book) => item.id);

      if (ids.includes(book.id)) {
        const updated = data.filter((item: Book) => item.id != book.id);
        localStorage.setItem("wiselist", JSON.stringify(updated));
        setWiseList(updated);
        toast("Removed from wiselist", {
          type: "warning",
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        localStorage.setItem("wiselist", JSON.stringify([...data, book]));
        setWiseList([...data, book]);
        toast("Added to wiselist", {
          type: "success",
          position: "top-right",
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <div className="bg-secondary flex flex-col items-center gap-4 p-4 hover:cursor-pointer">
      <div className="flex justify-end  w-full">
        <button onClick={() => handleFavourite(book)}>
          <FaRegStar
            className={`${
              wiseList.find((item) => item.id === book.id)
                ? "text-amber-500"
                : ""
            } 
            }`}
          />
        </button>
      </div>
      <div>
        <img
          src={image}
          alt={title + " image"}
          className="w-80 h-80 object-cover"
        />
      </div>
      <div>
        <h1 className="text-xl font-bold xl">{title}</h1>
        <div>
          {authors.map((item) => (
            <h1 key={item.name}>
              {" "}
              <span className="font-semibold">Author: </span> {item.name}
            </h1>
          ))}
        </div>
        <div>
          <h1 className="font-semibold">Genre:</h1>
          {subjects.map((item, idx) => (
            <span key={idx}>
              {item}
              {idx < subjects.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
        <h1>
          <span className="font-semibold">Book Id:</span> {id}
        </h1>
      </div>
    </div>
  );
};

export default Book;
