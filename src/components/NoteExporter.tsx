import React from "react";

interface ExporterProps {
  exportType: string
  fileExtension: string
  buttonText: string
  activeNoteContent: string
  activeTabName: string
}
export function NoteExporter(props: ExporterProps) {

  return (
    <a
      href={`data:${props.exportType};charset=utf-8,${encodeURIComponent(props.activeNoteContent)}`}
      download={props.activeTabName + props.fileExtension}
      type={props.exportType}
    >
      <button>{props.buttonText}</button>
    </a>
  )
}