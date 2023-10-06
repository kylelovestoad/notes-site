import React, { useState } from "react";
import Tab from "./Tab";
import { Note } from "./Note";

interface TabBarProps {
  children: {
    id: number
    name: string
  }[]
}

export function TabBar(props: TabBarProps): React.ReactElement {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  // Maps two arrays from one to have two separate component arrays
  const {tabs, notes} = props.children.reduce(({tabs, notes}, {id, name}) => {
    const isActive = activeTabIndex === id
    tabs.push(<Tab key={id} isActive={isActive} name={name}  onShow={() => setActiveTabIndex(id)}/>)
    notes.push(<Note key={id} isActive={isActive}/>)
    return {tabs, notes};
  }, {tabs: [] as React.ReactElement[] , notes: [] as React.ReactElement[]})

  return (
    <>
      <div className="tab-bar">{tabs}</div>
      <div className="notes-area">{notes}</div>
    </>
  );
}