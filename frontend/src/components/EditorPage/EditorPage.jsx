import Tiptap from "../TipTap_editor/Tiptap";
import React, { useState } from "react";
import { recentDocuments } from "../../../init/init_data";
import { useParams } from "react-router-dom";

export default function EditorPage() {
  const { docId } = useParams();
  const docContent = recentDocuments.find(
    (doc) => doc.id.toString() === docId,
  );
  const [editorContent,setEditorContent] = useState(docContent?.content ||null);

  const onSave=()=>{
    {/* Later on in future , we'll save this html content in our actual db into our backend. */}
    console.log("Saving the content to DataBase.");
    console.log("Document id : ", docId);
    console.log("Html content : ",editorContent);
    alert("See browser console to see the content.");
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-16 px-6 bg-white border-b border-slate-200 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-xl md:text-2xl ">Document Title</h1>
        <div className="flex gap-3 items-center">
          <button className="px-4 py-2 border-2 border-white rounded-xl bg-cyan-500 hover:bg-white hover:border-cyan-500 transition-all ease-in-out duration-[100]">Share</button>
          <button className="bg-white rounded-xl px-4 py-2 hover:bg-cyan-500 transition-all ease-in-out duration-[100]" onClick={onSave}>Save</button>
        </div>
      </header>
      <main className="flex-1 flex justify-center py-12 px-4 border border-slate-200 rounded-lg p-12 sm:p-20">
        <div className="w-full max-w-4xl shadow-sm bg-white border border-slate-200 rounded-xl">
          <Tiptap
            initialContent={docContent?.content || "Dummy content..."}
            onChange={(htmlContent)=>setEditorContent(htmlContent)}
          />
        </div>
      </main>
    </div>
  );
}
