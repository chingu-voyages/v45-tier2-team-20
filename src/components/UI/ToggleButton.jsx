import { useState } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

export const ToggleButton = ({ name }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <button
      onClick={() => setToggle(!toggle)}
      type="button"
      className="bg-white  text-indigo-600 border border-indigo-600 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 flex items-center"
    >
      {name}
      {toggle && <HiChevronUp className="ml-3 text-indigo-600" />}
      {!toggle && <HiChevronDown className="ml-3  text-indigo-600" />}
    </button>
  );
};
