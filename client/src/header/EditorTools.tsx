import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaCode,
  FaListUl,
  FaListOl,
  FaRegFileCode,
} from "react-icons/fa";
import { TbBlockquote } from "react-icons/tb";
import { Editor as TipTapEditor } from "@tiptap/react";

import EditorAction from "./EditorAction";
import ActionDropdown from "./ActionDropdown";

interface Button {
  onClick: () => void;
  icon: JSX.Element;
  actionName: string;
  type: "button";
}

interface Dropdown {
  actionName: string;
  type: "dropdown";
  heading?: string;
  options: {
    onClick: () => void;
    label: string;
    actionName: string;
    level?: number;
  }[];
};

export default function EditorTools({ editor }: { editor: TipTapEditor }) {
  const actions: Array<Button | Dropdown> = [
    {
      onClick: () => editor.chain().focus().toggleBold().run(),
      icon: <FaBold className="fill-gray-800" />,
      actionName: "bold",
      type: "button",
    },
    {
      onClick: () => editor.chain().focus().toggleItalic().run(),
      icon: <FaItalic className="fill-gray-800" />,
      actionName: "italic",
      type: "button",
    },
    {
      onClick: () => editor.chain().focus().toggleStrike().run(),
      icon: <FaStrikethrough className="fill-gray-800" />,
      actionName: "strike",
      type: "button",
    },
    {
      onClick: () => editor.chain().focus().toggleCode().run(),
      icon: <FaCode className="fill-gray-800" />,
      actionName: "code",
      type: "button",
    },
    {
      actionName: "text-style",
      type: "dropdown",
      heading: "Text style",
      options: [
        {
          onClick: () => editor.chain().focus().setParagraph().run(),
          label: "Normal Text",
          actionName: "paragraph",
        },
        {
          onClick: () =>
            editor.chain().focus().toggleHeading({ level: 1 }).run(),
          label: "Heading 1",
          actionName: "heading",
          level: 1,
        },
        {
          onClick: () =>
            editor.chain().focus().toggleHeading({ level: 2 }).run(),
          label: "Heading 2",
          actionName: "heading",
          level: 2,
        },
        {
          onClick: () =>
            editor.chain().focus().toggleHeading({ level: 3 }).run(),
          label: "Heading 3",
          actionName: "heading",
          level: 3,
        },
        {
          onClick: () =>
            editor.chain().focus().toggleHeading({ level: 4 }).run(),
          label: "Heading 4",
          actionName: "heading",
          level: 4,
        },
        {
          onClick: () =>
            editor.chain().focus().toggleHeading({ level: 5 }).run(),
          label: "Heading 5",
          actionName: "heading",
          level: 5,
        },
        {
          onClick: () =>
            editor.chain().focus().toggleHeading({ level: 6 }).run(),
          label: "Heading 6",
          actionName: "heading",
          level: 6,
        },
      ],
    },
    {
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      icon: <FaListUl className="fill-gray-800" />,
      actionName: "bulletList",
      type: "button",
    },
    {
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      icon: <FaListOl className="fill-gray-800" />,
      actionName: "orderedList",
      type: "button",
    },
    {
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      icon: <FaRegFileCode className="fill-gray-800" />,
      actionName: "codeBlock",
      type: "button",
    },
    {
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      icon: <TbBlockquote className="fill-gray-800" />,
      actionName: "blockquote",
      type: "button",
    },
  ];

  return (
    <div className="flex w-full bg-indigo-200 mt-2 rounded-2xl p-2">
      {actions.map(({ type, actionName, ...action }) =>
        type === "dropdown" ? (
          <ActionDropdown
            key={actionName}
            editor={editor}
            heading={(action as Dropdown).heading || ""}
            options={(action as Dropdown).options}
          />
        ) : (
          <EditorAction
            key={actionName}
            editor={editor}
            onClick={(action as Button).onClick}
            actionName={actionName}
          >
            {(action as Button).icon}
          </EditorAction>
        ),
      )}
    </div>
  );
}
