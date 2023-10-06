import React, { useState, ChangeEvent } from "react";
import { TabBar } from "./TabBar";
import { NoteCreator } from "./NoteCreator";
import './App.css';

interface Tab {
  id: number;
  name: string;
}

function App() {
  const [input, setInput] = useState<string>("");

  const createTab = (index: number): Tab => {
    let name;
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

  // TODO add Export note to file functionality
  return (
    <div className="App">
      <NoteCreator
        onClick={() => setTabs([...tabs, createTab(tabs.length)])}
        onChange={handleChange}
      />
      <TabBar>{tabs}</TabBar>
      <button>Export!</button>
    </div>
  );
}

export default App;