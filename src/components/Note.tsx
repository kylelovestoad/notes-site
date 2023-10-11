import MDEditor, {commands, group} from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";

interface NoteProps {
  isActive: boolean
  noteContent: string
  setNoteContent: (content?: string) => void
}

export function Note({isActive, noteContent, setNoteContent}: NoteProps) {

  /**
   * Allows for other nodes to access the active content
   * @param e The change event
   */
  // const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   // This should never have to be checked if the note is active since it is only editable when activated
  //   setNoteContent(e.target.value)
  // }

  return (
    <MDEditor
      value={noteContent}
      onChange={(value, event) => {
        event?.preventDefault();
        setNoteContent(value);
      }}
      // Instead of deleting the node, hides it so that it retains its data.
      // Also improves performance because adding and removing DOM nodes is more expensive
      className={isActive ? "note" : "note hidden"}
      placeholder="Enter your notes here... "
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
      // The buttons on the top
      commands={[
        commands.bold,
        commands.italic,
        commands.strikethrough,
        commands.hr,
        // groups the title commands together
        group([commands.title1, commands.title2, commands.title3, commands.title4, commands.title5, commands.title6], {
          name: 'title',
          groupName: 'title',
          buttonProps: { 'aria-label': 'Insert title', title: 'Insert title' },
        }),
        commands.divider,
        commands.quote,
        commands.link,
        commands.code,
        commands.codeBlock,
        commands.divider,
        commands.unorderedListCommand,
        commands.orderedListCommand,
        commands.checkedListCommand
      ]}
      extraCommands={[]}
    />
  );
}