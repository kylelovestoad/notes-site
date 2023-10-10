import React, {ChangeEvent, FormEventHandler} from 'react';

interface NoteCreatorProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export function NoteCreator(props: NoteCreatorProps) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <label htmlFor="name" ></label>
        <input id="name" type="text" onChange={props.onChange}></input>
        <button type="submit">New!</button>
      </form>
    </>
  )
}