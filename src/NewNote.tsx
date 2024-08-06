import { NoteForm } from "./NoteForm";
import { NoteData, Tag } from "./App";

// Type definition for the props of the NewNote component
type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

// NewNote component for creating a new note
export function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (
    <>
      {/* NoteForm component with handlers and available tags */}
      <h1 className="my-4">New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
