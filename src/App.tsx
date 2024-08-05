import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Editor from "./editor";
import Header from "./header";

function App() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
    ],
    content: `<blockquote>
            Nothing is impossible, the word itself says “I’m possible!”
          </blockquote>`,
  });

  if (!editor) return null;

  return (
    <div className="bg-indigo-100">
      <Header editor={editor} />
      <Editor editor={editor} />
    </div>
  );
}

export default App;
