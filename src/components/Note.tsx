import {ChangeEvent} from "react";

interface NoteProps {
  isActive: boolean
  setActiveNoteContent: (content: string) => void
}

export function Note({isActive, setActiveNoteContent}: NoteProps) {

  /**
   * Allows for other nodes to access the active content
   * @param e The change event
   */
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (isActive) {
      setActiveNoteContent(e.target.value)
    }
  }

  return (
    <textarea
      onChange={onChange}
      // Instead of deleting the node, hides it so that it retains its data.
      // Also improves performance because adding and removing DOM nodes is more expensive
      className={isActive ? "note" : "note hidden"}
      placeholder="Enter your notes here... "
    />
  );
}