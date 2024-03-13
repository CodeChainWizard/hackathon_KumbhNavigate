import { useState } from "react";

export default function DropDownMunu({ setDropDownChange }) {
  const [selected, setSelected] = useState("category");

  const [isOpend, setOpen] = useState(false);

  return (
    <div className="relative font-[sans-serif]  top-3 left-3  w-fit   p-5 rounded-md bg-[#ffffff] ">
      <button
        type="button"
        onClick={() => setOpen(!isOpend)}
        className=" px-6 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
      >
        {selected}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 fill-white inline ml-3"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd"
            data-original="#000000"
          />
        </svg>
      </button>

      {isOpend == true ? (
        <ul className="absolute shadow-lg bg-white py-2 z-50  w-auto rounded max-h-96 overflow-auto">
          <li
            onClick={() => {
              setSelected("Toilets");
              setOpen(!isOpend);
              setDropDownChange(true);
            }}
            className="py-2.5 px-6 hover:bg-blue-50 text-black text-sm cursor-pointer"
          >
            Toilets
          </li>
          <li
            onClick={() => {
              setSelected("Food STalls");

              setOpen(!isOpend);
              setDropDownChange(true);
            }}
            className="py-2.5 px-6 hover:bg-blue-50 text-black text-sm cursor-pointer"
          >
            Food STalls
          </li>

          <li
            onClick={() => {
              setSelected("Events");
              setOpen(!isOpend);
              setDropDownChange(true);
            }}
            className="py-2.5 px-6 hover:bg-blue-50 text-black text-sm cursor-pointer"
          >
            Events
          </li>

          <li
            onClick={() => {
              setSelected("Stays");
              setOpen(!isOpend);
              setDropDownChange(true);
            }}
            className="py-2.5 px-6 hover:bg-blue-50 text-black text-sm cursor-pointer"
          >
            Stays
          </li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
