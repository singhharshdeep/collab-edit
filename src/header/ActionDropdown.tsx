import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function ActionDropdown({ editor, heading, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const getHeading = () => {
    const selectedOption = options.filter(({ actionName, level }) =>
      editor.isActive(actionName, { level }),
    );

    return selectedOption[0].label;
  };

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-indigo-600 hover:bg-indigo-800 rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {getHeading() || heading}
        {isOpen ? (
          <IoIosArrowUp className="ml-2" />
        ) : (
          <IoIosArrowDown className="ml-2" />
        )}
      </button>
      <div
        id="dropdown"
        className={`absolute ${!isOpen ? "hidden" : ""} mt-10 ml-40 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {options.map(({ onClick, label, actionName, level }) => (
            <li key={`actionName${level}`}>
              <div
                onClick={() => {
                  onClick();
                  setIsOpen(false);
                }}
                className={`block px-4 py-2 hover:bg-gray-100 ${editor.isActive(actionName, { level }) ? "bg-gray-100" : ""}`}
              >
                {label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
