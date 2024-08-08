export default function EditorAction({
  editor,
  children,
  onClick,
  actionName,
}) {
  return (
    <div
      className={`w-fit mx-1 p-2 rounded-full ${editor?.isActive(actionName) ? "bg-indigo-300" : ""} hover:bg-indigo-300 hover:outline hover:outline-indigo-400`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}