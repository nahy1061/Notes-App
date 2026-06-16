import React from "react";
import { X } from "lucide-react";

const NoteCard = ({ header, notes, onDelete }) => {
  return (
    <div className="group relative min-h-56 rounded-3xl border border-slate-200/50 bg-linear-to-br from-white via-slate-50 to-blue-50 p-6 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.15)] hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.2)] transition-all duration-300 hover:border-blue-200/50 hover:-translate-y-1 overflow-hidden">
      <button
        className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 transition-all duration-200 hover:bg-linear-to-r hover:from-amber-600 hover:to-amber-700 hover:scale-125 hover:shadow-xl"
        onClick={onDelete}
      >
        <X size={12} strokeWidth={2.5} />
      </button>
      <h3 className="leading-tight text-lg font-bold text-slate-900 pr-8 group-hover:text-blue-900 transition-colors">
        {header}
      </h3>
      <p className="mt-3 leading-relaxed font-medium text-slate-600 text-sm group-hover:text-slate-700 transition-colors">
        {notes}
      </p>
      <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-500/0 via-blue-500/0 to-sky-500/0 group-hover:from-blue-500/5 group-hover:via-transparent group-hover:to-sky-500/5 transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export default NoteCard;
