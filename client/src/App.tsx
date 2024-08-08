import { useEffect, useState } from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { socket } from "./socket";
import Editor from "./editor";
import Header from "./header";

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
    ],
    content: "",
  });

  editor?.on("update", ({ editor }) => socket.emit("send-update", editor.getHTML()));

  useEffect(() => {
    socket.on("receive-update", (data) => {
      editor?.commands.setContent(data);
    });  
  }, []);

  if (!editor) return null;

  return (
    <div className="bg-indigo-100">
      <Header editor={editor} />
      <Editor editor={editor} />
    </div>
  );
}

export default App;
