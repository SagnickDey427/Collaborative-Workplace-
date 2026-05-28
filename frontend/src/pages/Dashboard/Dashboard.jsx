import React from "react";
import Header from "../../components/Dashboard_Header/Header.jsx";
import Profile from "../../components/Dashboard_profile/Profile.jsx";
import Recents from "../../components/Dashboard_Recents/Recents.jsx";
import Pinned from "../../components/Dashboard_Pinned/Pinned.jsx";

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-28 pb-12 px-6">
      <main className="max-w-7xl mx-auto">
        {/* BENTO BOX GRID: 3 Columns total on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* --- TOP ROW --- */}
          {/* Top Left: Welcome Card (Takes up 2 columns) */}
          <div className="lg:col-span-2">
            <Header/>
          </div>

          {/* Top Right: Profile Card (Takes up 1 column) */}
          <div className="lg:col-span-1">
            <Profile/>
          </div>

          {/* --- BOTTOM ROW (Placeholders for now) --- */}
          <div className="lg:col-span-2">
            <Recents/>
          </div>

          <div className="lg:col-span-1">
            <div className="w-full h-96 bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 flex items-center justify-center text-slate-500 font-medium shadow-sm">
              <Pinned/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
