import React from "react";

interface TabProps {
  isActive: boolean;
  onShow: () => void;
  name: string;
}

function Tab({ isActive, onShow, name }: TabProps) {
  return (
    <>
      <button className={isActive ? "tab active" : "tab"} onClick={onShow}>
        {name}
      </button>
    </>
  );
}

export default Tab;