import { Note } from "./App";
import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";

// Type definition for the props of the NoteLayout component
type NoteLayoutProps = {
  notes: Note[];
};

// NoteLayout component for managing the layout and routing of notes
export function NoteLayout({ notes }: NoteLayoutProps) {
  // Retrieve the id parameter from the URL and find the note with the matching id
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

  // If no note is found, navigate back to the home page
  if (note == null) return <Navigate to="/" replace />;
  // Render the Outlet component with the current note as context
  return <Outlet context={note} />;
}

export function useNote() {
  // Retrieve and return the note from the outlet context
  return useOutletContext<Note>();
}
