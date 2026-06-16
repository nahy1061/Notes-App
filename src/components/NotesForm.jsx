import React from "react";

const NotesForm = ({ header, setHeader, notes, setNotes, submitHandler }) => {
  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className="flex flex-col gap-4 rounded-4xl bg-slate-300 p-10 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] ring-1 ring-slate-200 lg:w-1/2 lg:max-w-md"
    >
      <h1 className="text-4xl font-semibold text-slate-950">Add Notes</h1>

      {/* ----- Heading ----- */}
      <input
        type="text"
        placeholder="Enter Notes Heading"
        value={header}
        onChange={(e) => {
          setHeader(e.target.value);
        }}
        className="w-full rounded-3xl border border-slate-400 bg-white px-4 py-3 text-slate-950 outline-none font-medium transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
      />

      {/* ----- Notes Details ----- */}
      <textarea
        type="text"
        placeholder="Enter Details here.."
        value={notes}
        onChange={(e) => {
          setNotes(e.target.value);
        }}
        className="w-full min-h-56 rounded-3xl border border-slate-400 bg-white px-4 py-3 text-slate-950 outline-none font-medium transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
      />
      <button className="w-full rounded-3xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-700 active:scale-[0.98]">
        Add Notes
      </button>
    </form>
  );
};

export default NotesForm;
