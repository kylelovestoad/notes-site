import React, {useState} from "react";
import {Tab} from "./Tab";
import {Note} from "./Note";

export function TabBar(props) {

    const [activeTabIndex, setActiveTabIndex] = useState(0)

    // Maps two arrays from one to have two separate component arrays
    const [tabs, notes] = props.children.reduce(([a, b],{id, name}) => {
        const isActive = activeTabIndex === id
        a.push(<Tab key={id} isActive={isActive} name={name}  onShow={() => setActiveTabIndex(id)}/>)
        b.push(<Note key={id} isActive={isActive}/>);
        return [a, b]
    }, [[], []])

    return (
        <>
            <div className="tab-bar">
                {tabs}
            </div>
            <div className="notes-area">
                {notes}
            </div>
        </>
    );
}