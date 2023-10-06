import React, { ChangeEvent, MouseEventHandler } from 'react';

interface NoteCreatorProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function NoteCreator(props: NoteCreatorProps) {
  return (
    <>
      <input onChange={props.onChange}></input>
      <button onClick={props.onClick}>New!</button>
    </>
  )
}