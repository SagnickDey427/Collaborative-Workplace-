// src/Tiptap.tsx
import { useEditor, EditorContent } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

const Tiptap = ({ initialContent, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit,Placeholder.configure({
      placeholder:'Press "/" for commands or start typing...',
      emptyEditorClass: 'is-editor-empty'
    })],
    content: initialContent || '<p>Start typing...</p>',
    editorProps: {
      attributes: {
        // The 'prose' class handles the beautiful typography formatting!
        class: 'prose prose-slate max-w-none focus:outline-none min-h-[500px]'
      }
    },
    onUpdate:({editor})=>{
      let htmlContent = editor.getHTML();
      onChange(htmlContent)
    }
  })

  // CRITICAL SAFETY CHECK: Prevent crashes while the engine boots up
  if (!editor) {
    return null
  }

  return (
    <>
      {/* --- THE FLOATING MENU (Appears on empty lines) --- */}
      <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className="flex bg-white shadow-md border border-slate-200 rounded-lg overflow-hidden p-1 gap-1">
          
          <button 
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
              editor.isActive('heading', { level: 1 }) ? 'bg-cyan-100 text-cyan-800' : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            H1
          </button>

          <button 
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
              editor.isActive('heading', { level: 2 }) ? 'bg-cyan-100 text-cyan-800' : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            H2
          </button>

          <button 
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
              editor.isActive('bulletList') ? 'bg-cyan-100 text-cyan-800' : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            List
          </button>

        </div>
      </FloatingMenu>

      {/* --- THE BUBBLE MENU (Appears when you highlight text) --- */}
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        {/* Notice this uses a dark theme (bg-slate-800) so it stands out! */}
        <div className="flex bg-slate-800 shadow-lg rounded-lg overflow-hidden p-1 text-white gap-1">
          
          <button 
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-3 py-1 text-sm font-bold rounded transition-colors ${
              editor.isActive('bold') ? 'bg-cyan-500 text-white' : 'hover:bg-slate-700 text-slate-200'
            }`}
          >
            B
          </button>

          <button 
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`px-3 py-1 text-sm italic rounded transition-colors ${
              editor.isActive('italic') ? 'bg-cyan-500 text-white' : 'hover:bg-slate-700 text-slate-200'
            }`}
          >
            I
          </button>

          <button 
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`px-3 py-1 text-sm line-through rounded transition-colors ${
              editor.isActive('strike') ? 'bg-cyan-500 text-white' : 'hover:bg-slate-700 text-slate-200'
            }`}
          >
            S
          </button>

        </div>
      </BubbleMenu>

      {/* --- THE ACTUAL EDITOR CANVAS --- */}
      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap



