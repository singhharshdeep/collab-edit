import { useEffect, useState } from "react";
import { IoMdDocument } from "react-icons/io";

import { socket } from "../socket";
import DocumentName from "./DocumentName";
import EditorTools from "./EditorTools";

export default function Header({ editor }) {
  const [name, setName] = useState("Untitled Document");

  useEffect(() => {
    socket.on("receive-document-name", (data) => {
      setName(data);
      document.title = data === "" ? "Untitled Document" : data;
    });
  }, []);

  return (
    <div className="p-3 ">
      <div className="flex items-center h-[10%]">
        <IoMdDocument className="fill-blue-600 size-10" />
        <DocumentName
          name={name}
          onChange={(e) => {
            setName(e.target.value);
            document.title = name === "" ? "Untitled Document" : e.target.value;
            socket.emit("send-document-name", e.target.value);
          }}
        />
      </div>
      <EditorTools editor={editor} />
    </div>
  );
}
