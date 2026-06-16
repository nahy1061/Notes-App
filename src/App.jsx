import React, { useState } from "react";
import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";

const App = () => {
  const [header, setHeader] = useState("");
  const [notes, setNotes] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ header, notes });
    setTask(copyTask);
    setHeader("");
    setNotes("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen bg-blue-950 text-slate-100 lg:flex lg:items-center lg:justify-center px-4 sm:px-4 lg:px-4 py-4 lg:py-12 gap-8">
      <NotesForm
        header={header}
        setHeader={setHeader}
        notes={notes}
        setNotes={setNotes}
        submitHandler={submitHandler}
      />
      <NotesList task={task} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
