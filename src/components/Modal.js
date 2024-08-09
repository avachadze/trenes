export default function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white dark:bg-slate-800 rounded-xl p-6 transition-all
          border-2 border-indigo-500 shadow
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute p-1 bg-white rounded-lg top-2 right-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600"
        ></button>
        {children}
      </div>
    </div>
  );
}
