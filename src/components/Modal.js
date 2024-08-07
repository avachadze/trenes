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
          className="absolute top-2 right-2 p-1 rounded-lg text-slate-400 bg-white hover:bg-slate-50 hover:text-slate-600"
        ></button>
        {children}
      </div>
    </div>
  );
}
