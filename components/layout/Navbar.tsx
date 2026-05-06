"use client"

import { Menu, Home, Users, Settings } from "lucide-react"

type NavbarProps = {
  sidebarOpen: boolean
  onToggleSidebar: () => void
}

const navLinks = [
  { label: "Início",          icon: <Home size={15} /> },
  { label: "Usuários",      icon: <Users size={15} /> },
  { label: "Configurações", icon: <Settings size={15} /> },
]

export function Navbar({ sidebarOpen, onToggleSidebar }: NavbarProps) {
  return (
    <header className="flex h-12 shrink-0 items-center border-b border-gray-200 bg-white px-4 shadow-sm">

      {/* Left — hamburger + logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="rounded-md p-1.5 text-gray-600 transition-colors hover:bg-gray-100"
        >
          <Menu size={20} />
        </button>

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
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors"
            style={{
              color: i === 0 ? "#1c2f3a" : "#6b7a8d",
              backgroundColor: i === 0 ? "#f0f3f6" : "transparent",
              fontWeight: i === 0 ? 500 : 400,
            }}
          >
            {link.icon}
            {link.label}
          </button>
        ))}
      </nav>

      {/* Right — user */}
      <div className="flex items-center gap-2.5">
        <span className="text-sm text-gray-700">Dr. Adriano Mendes</span>
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: "#4a5568" }}
        >
          AM
        </div>
      </div>

    </header>
  )
}
