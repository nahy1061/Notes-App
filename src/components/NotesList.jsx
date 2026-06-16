import React from "react";
import NoteCard from "./NoteCard";

const NotesList = ({ task, deleteNote }) => {
  return (
    <div className="mt-8 lg:mt-0 lg:w-1/2 lg:max-w-2xl">
      <div className="rounded-4xl bg-slate-300 p-10 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] ring-1 ring-slate-200">
        <h1 className="text-4xl font-semibold text-slate-950">Recent Notes</h1>

        {/* Note Cards */}
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[70vh] overflow-auto scrollbar-none">
          {task.map(function (elem, idx) {
            return (
              <NoteCard
                key={idx}
                header={elem.header}
                notes={elem.notes}
                onDelete={() => deleteNote(idx)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NotesList;
