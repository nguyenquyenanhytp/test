// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import useClickOutSide from "../../hooks/useClickOutside";
import { useWatch } from "react-hook-form";

const DropdownHook = ({
  control,
  setValue,
  name,
  data,
  dropdownLabel = "Select Your Job",
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const dropdownValue = useWatch({
    control,
    name: "job",
    defaultValue: "",
  });
  console.log("dropdownValue", dropdownValue);
  //   console.log("dropdownValue", jobValue);
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = useState(dropdownLabel);
  useEffect(() => {
    if (dropdownValue === "") setLabel(dropdownLabel);
  }, [dropdownValue]);
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-lg cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map((item) => (
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value={item.value}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
        {/* <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="teacher"
        >
          teacher
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="developer"
        >
          developer
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="doctor"
        >
          doctor
        </div> */}
      </div>
    </div>
  );
};

export default DropdownHook;
