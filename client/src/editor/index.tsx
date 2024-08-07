import { EditorContent } from "@tiptap/react";

export default function Editor({ editor }) {
  return (
    <div className="flex justify-center ml-3 h-[90%] border-t-2 border-l-2 border-gray-300">
      <div className="my-5 border-2 border-gray-300 h-full bg-gray-100 w-[70%]">
        <div className="p-5">
          <EditorContent className="h-screen" editor={editor} />
        </div>
      </div>
    </div>
  );
}
