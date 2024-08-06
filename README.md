# Notes Taking Application

This is a Note Taking application with markdown support, built with React, React Router, and React Bootstrap. The app allows users to create, edit, delete, and filter notes. Each note can be tagged with multiple tags for better organization.


## Features

- Create Note: Add new notes with a title, markdown content, and tags.
- Edit Note: Modify the content and tags of existing notes.
- Delete Note: Remove notes from the list.
- Tag Management: Create, edit, and delete tags.
- Filter Notes: Search notes by title and filter by tags.
- Markdown Support: Use markdown to format note content.
- Persistent Storage: Notes and tags are stored in the browser's local storage to ensure data persists across sessions.

## Technologies Used

- **React:** Library for building user interfaces.
- **Bootstrap**: A popular CSS framework for designing responsive and mobile-first websites.
- **TypeScript:** A superset of JavaScript that adds static types.
- **Vite**: A fast build tool that provides a modern development environment.
- **ESLint**: A tool for identifying and fixing problems in JavaScript/TypeScript code.
- **React Markdown**: A library for rendering Markdown content as React components.
- **uuid**: A library for generating unique identifiers used to create unique IDs for new notes and tags.
## Installation

To install and run this project on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
2. **Install dependencies:**

   ```bash
   npm install
3. **Start the application in development mode:**

   ```bash
   npm start
This will open the application in your browser at http://localhost:3000.

## Project Structure
  - **`App.tsx`**: Main component of the application.
  - **`main.tsx`**: Entry point of the React application where the root component is rendered.
  - **`NoteList`**:Displays the list of notes with filtering options for title and tags.
  - **`NoteCard`**:A card component that displays a note's title and tags.
  - **`NoteForm`**:A form component used for creating and editing notes.
  - **`EditTagsModal`**:A modal component for managing tags (editing and deleting).
  - **`Note`**:Displays the content of a single note along with options to edit or delete it.
  - **`NoteLayout`**:A layout component that provides the context for the current note.
  - **`useNote`**:A custom hook to access the current note from the context provided by `NoteLayout`.

## Usage and Functionalities

Manage your notes efficiently with this application. You can:

- Create New Notes: Click on "Create" to start a new note. Enter a title, add tags, and write your content.
- Edit Existing Notes: Navigate to a note and click "Edit" to modify its title, content, or tags.
- Organize with Tags: Add or update tags to categorize your notes. Tags help in filtering and searching notes.
- View and Delete Notes: Browse your list of notes, view details, and delete notes you no longer need.
- Real-Time Updates: Changes to notes and tags are immediately reflected in the list and detail views.
- The application supports persistent storage using local storage, so your notes and tags are saved across sessions. Use the intuitive interface to manage your notes efficiently and stay organized.

![Home Screen](public/Usage1.png)

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch for your changes:**

   ```bash
   git checkout -b your-branch-name
3. **Make your changes and commit:**

   ```bash
   git commit -am 'Add some feature'
4. **Push your changes to the remote repository:**

   ```bash
   git push origin your-branch-name
5. **Create a pull request on GitHub.**

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Links
- [GitHub Repository](https://github.com/AlvaroSapata/translator)
- [Live Application](https://translatorclone.netlify.app/)

## Contact
For any inquiries, please contact [alvaromfdv@gmail.com](mailto:alvaromfdv@gmail.com).

## References
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite](https://vitejs.dev/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [ESLint](https://eslint.org/)
- [Vitest](https://vitest.dev/)