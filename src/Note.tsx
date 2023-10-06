interface NoteProps {
  isActive: boolean;
}

export function Note({isActive}: NoteProps) {
  return (
    <textarea className={isActive ? "note" : "note hidden"} placeholder="Enter your notes here... "/>
  );
}