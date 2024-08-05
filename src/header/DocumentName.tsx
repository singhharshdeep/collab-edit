import { ChangeEventHandler, useState } from "react";

interface DocumentNameProps {
  name: string;
  onChange: ChangeEventHandler;
}

export default function DocumentName({ name, onChange }: DocumentNameProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    if (!isEditing) setIsEditing(true);
  };

  return (
    <div
      className="w-full ml-2 p-1 focus-within:outline hover:outline outline-gray-400 rounded-sm"
      onClick={handleEdit}
    >
      <input
        className="w-full bg-transparent outline-none"
        type="text"
        value={name}
        onChange={onChange}
        onFocus={(e) => e.target.select()}
      />
    </div>
  );
}
