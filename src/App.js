import './App.css';
import React, {useState} from "react";
import {TabBar} from "./TabBar";
import {NoteCreator} from "./NoteCreator";

function App() {

    const [input, setInput] = useState("");
    const [tabs, setTabs] = useState([])

    const handleClick = () => {
        if (input === "") {
            setTabs([...tabs, {
                id: tabs.length,
                name: "Untitled Note"
            }])
        } else {
            setTabs([...tabs, {
                id: tabs.length,
                name: input
            }])
        }
    }

    const handleChange = e => setInput(e.target.value)


    return (
        <div className="App">
            <NoteCreator onClick={handleClick} onChange={handleChange}/>
            <TabBar>
                {tabs}
            </TabBar>
        </div>
    )
}

export default App;
