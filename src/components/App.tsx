import React, { useState, ChangeEvent } from "react";
import { TabBar } from "./TabBar";
import { NoteCreator } from "./NoteCreator";
import '../App.css';
import {Exporter} from "./Exporter";

interface Tab {
  id: number;
  name: string;
}

function App() {
  const [input, setInput] = useState<string>("");

  const [activeTab, setActiveTab] = useState<number>(0);

  const [activeNoteContent, setActiveNoteContent] = useState<string>("")

  const createTab = (index: number): Tab => {
    let name;
    // Tab names can't be empty since the button would format strangely. Also for better UX
    if (input === "") {
      name = "Untitled Note";
    } else {
      name = input;
    }

    return {
      id: index,
      name: name
    };
  };

  const [tabs, setTabs] = useState<Tab[]>([createTab(0)]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  return (
    <div className="App">
      <NoteCreator
        onClick={() => {
          setTabs([...tabs, createTab(tabs.length)])
          // Sets the active tab to the new one for better UX.
          // The user probably wants to make a new tab to immediately write into
          setActiveTab(tabs.length);
        }}
        onChange={handleChange}
      />
      <TabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setActiveNoteContent={setActiveNoteContent}
      >
        {tabs}
      </TabBar>
      <Exporter activeTabName={tabs[activeTab].name} activeNoteContent={activeNoteContent} />
    </div>
  );
}

export default App;