import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";
import { useNote } from "./NoteLayout";

// Type definition for the props of the EditNote component
type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

// EditNote component for editing an existing note
export function EditNote({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
  // Retrieve the current note using the custom hook
  const note = useNote();

  return (
    <>
      {/* NoteForm component with pre-filled values and handlers */}
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
