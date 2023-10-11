import React from "react";
import Tab from "./Tab";
import { Note } from "./Note";

interface TabBarProps {
  children: {
    id: number
    name: string
    content: string
  }[]
  activeTab: number
  setActiveTab: (index: number) => void
  setNoteContent: (content?: string) => void
}

export function TabBar(props: TabBarProps): React.ReactElement {

  // Maps two arrays from one to have two separate component arrays
  const {tabs, notes} = props.children.reduce(({tabs, notes}, {id, name, content}) => {
    const isActive = props.activeTab === id
    tabs.push(<Tab key={id} isActive={isActive} name={name}  onShow={() => props.setActiveTab(id)}/>)
    notes.push(<Note key={id} isActive={isActive} noteContent={content} setNoteContent={props.setNoteContent}/>)
    return {tabs, notes};
  }, {tabs: [] as React.ReactElement[] , notes: [] as React.ReactElement[]})

  return (
    <>
      <div className="tab-bar">{tabs}</div>
      <div className="notes-area">{notes}</div>
    </>
  );
}