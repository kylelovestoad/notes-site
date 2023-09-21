import React from "react";

export function NoteCreator(props) {
    return (
        <>
            <input onChange={props.onChange}></input>
            <button onClick={props.onClick}>New!</button>
        </>
    )
}