"use client"

import { Home, Users, Settings } from "lucide-react"

type NavbarProps = {}

const navLinks = [
  { label: "Início",          icon: <Home size={15} /> },
  { label: "Usuários",      icon: <Users size={15} /> },
  { label: "Configurações", icon: <Settings size={15} /> },
]

export function Navbar({ sidebarOpen, onToggleSidebar }: NavbarProps) {
  return (
    <header className="flex h-12 shrink-0 items-center border-b border-gray-200 bg-white px-4 shadow-sm">

      {/* Left — logo */}
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-md text-sm font-bold text-white"
            style={{ backgroundColor: "#1565A8" }}
          >
            A
          </div>
          <span className="text-base font-bold text-gray-900">AllianCare</span>
        </div>
      </div>

      {/* Center — nav links */}
      <nav className="flex flex-1 items-center justify-center gap-1">
        {navLinks.map((link, i) => (
          <button
            key={link.label}
            className="group flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              color: i === 0 ? "#1c2f3a" : "#6b7a8d",
              backgroundColor: i === 0 ? "#f0f3f6" : "transparent",
              fontWeight: i === 0 ? 500 : 400,
            }}
          >
            <span className="transition-transform duration-200 group-hover:scale-110">
              {link.icon}
            </span>
            {link.label}
          </button>
        ))}
      </nav>

      {/* Right — user */}
      <div className="flex items-center gap-2.5">
        <span className="text-sm text-gray-700">Dr. Adriano Mendes</span>
        <div
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-xs font-bold text-white shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md active:scale-95"
          style={{ backgroundColor: "#4a5568" }}
        >
          AM
        </div>
      </div>

    </header>
  )
}
