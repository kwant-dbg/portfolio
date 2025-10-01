"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-40">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-semibold">
            CP
          </div>
          <div className="hidden sm:block text-sm font-medium">Sumit-style Portfolio</div>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-sm text-[var(--muted)]">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/projects" className="hover:text-white">Projects</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <a href="/contact" className="hover:text-white">Contact</a>
          </nav>

          {/* mobile menu toggle */}
          <button
            aria-label="menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="md:hidden p-2 rounded-md border border-white/6"
          >
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="2" rx="1" fill="currentColor" opacity="0.9"/>
              <rect y="5" width="20" height="2" rx="1" fill="currentColor" opacity="0.9"/>
              <rect y="10" width="20" height="2" rx="1" fill="currentColor" opacity="0.9"/>
            </svg>
          </button>
        </div>
      </div>

      {/* slide-over mobile menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
        <aside className={`fixed right-0 top-0 h-full w-72 bg-[#071027] p-6 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between mb-6">
            <div className="text-lg font-semibold">Menu</div>
            <button aria-label="close" onClick={() => setOpen(false)} className="p-1">
              ✕
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link href="/about" className="py-2" onClick={() => setOpen(false)}>About</Link>
            <Link href="/projects" className="py-2" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/blog" className="py-2" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/contact" className="py-2" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </aside>
      </div>
    </header>
  );
}