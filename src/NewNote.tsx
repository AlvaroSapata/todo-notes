import { NoteForm } from "./NoteForm";
import { NoteData } from "./App";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};

export function NewNote({ onSubmit }: NewNoteProps) {
  return (
    <>
      <h1 className="my-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </>
  );
}
