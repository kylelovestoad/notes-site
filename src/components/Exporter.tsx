import React from "react";

interface ExporterProps {
  activeNoteContent: string
  activeTabName: string
}
export function Exporter(props: ExporterProps) {

  return (
    <a
      href={'data:text/plain;charset=utf-8,' + encodeURIComponent(props.activeNoteContent)}
      download={props.activeTabName + ".txt"}
    >
      <button>Export!</button>
    </a>
  )
}