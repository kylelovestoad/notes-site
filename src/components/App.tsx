import React, {ChangeEvent, useState} from "react";
import {TabBar} from "./TabBar";
import {NoteCreator} from "./NoteCreator";
import '../App.css';
import {NoteExporter} from "./NoteExporter";

interface Skeleton {
  id: number;
  name: string;
  content: string;
}

function App() {
  const [input, setInput] = useState<string>("");

  const [activeTab, setActiveTab] = useState<number>(0);

  /**
   * Creates a skeleton object to store basic values of the tab and note components
   * @param index
   * @return Skeleton a skeleton object representing a tab and its associated note
   */
  const createSkeleton = (index: number): Skeleton => {
    let name;

    // Tab names can't be empty since the button would format strangely. Also for better UX
    name = input === "" ? "Untitled Note" : input

    return {
      id: index,
      name: name,
      content: ""
    };
  };

  const [skeletons, setSkeletons] = useState<Skeleton[]>([createSkeleton(0)]);

  const updateSkeletonContent = (index: number, content: string): void => {
    const newSkeletons = skeletons.slice()
    newSkeletons[activeTab].content = content
    setSkeletons(newSkeletons)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  

  return (
    <div className="App">
      <NoteCreator
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setSkeletons([...skeletons, createSkeleton(skeletons.length)]);
          // Sets the active tab to the new one for better UX.
          // The user probably wants to make a new tab to immediately write into
          setActiveTab(skeletons.length);
        }}
        onChange={handleChange}
      />
      <TabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setNoteContent={(content: string) => updateSkeletonContent(activeTab, content)}
      >
        {skeletons}
      </TabBar>
      <NoteExporter activeTabName={skeletons[activeTab].name} activeNoteContent={skeletons[activeTab].content}/>
    </div>
  );
}

export default App;