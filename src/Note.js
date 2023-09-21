export function Note({isActive}) {
    return (
        <textarea className={isActive ? "note" : "note hidden"} placeholder="Enter your notes here... "/>
    );
}

