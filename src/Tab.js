import React from "react";

export function Tab({isActive, onShow, name}) {
    return (
        <button className={isActive ? "tab active" : "tab"} onClick={onShow}>{name}</button>
    );
}