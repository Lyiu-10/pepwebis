"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Navbar } from "@/components/layout/Navbar"
import {
  TrendingUp,
  TrendingDown,
  Users,
  UserPlus,
  Activity,
  PieChart,
  MoreHorizontal,
  CalendarDays,
  Download,
} from "lucide-react"

const stats = [
  { label: "Pacientes Ativos",   value: "1.248", change: "+12%", up: true,  icon: <Users size={18} /> },
  { label: "Novos Pacientes",    value: "18",    change: "+5%",  up: true,  icon: <UserPlus size={18} /> },
  { label: "Acessos (24h)",      value: "342",   change: "-3%",  up: false, icon: <Activity size={18} /> },
  { label: "Taxa de Ocupação",   value: "78%",   change: "+2%",  up: true,  icon: <PieChart size={18} />, progress: 78 },
]

const members = [
  { name: "Dra. Carla Souza",     role: "Médica",        time: "agora",        initials: "CS" },
  { name: "João Lima",            role: "Recepcionista",  time: "15 min atrás", initials: "JL" },
  { name: "Enf. Mariana Costa",   role: "Enfermeira",     time: "2 min atrás",  initials: "MC" },
  { name: "Dr. Pedro Rocha",      role: "Médico",         time: "1h atrás",     initials: "PR" },
  { name: "Farmacêutica Ana",     role: "Farmacêutica",   time: "5 min atrás",  initials: "FA" },
]

// --- SVG chart helpers ---
const rawPts = [
  { x: 60,  v: 100 },
  { x: 150, v: 120 },
  { x: 240, v: 140 },
  { x: 330, v: 145 },
  { x: 420, v: 155 },
  { x: 510, v: 85  },
  { x: 590, v: 82  },
]
const MAX = 160
const H   = 180
const PAD = 16
const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"]

function toY(v: number) { return PAD + H - (v / MAX) * H }

function smoothPath() {
  const p = rawPts.map(pt => ({ x: pt.x, y: toY(pt.v) }))
  let d = `M ${p[0].x},${p[0].y}`
  for (let i = 1; i < p.length; i++) {
    const cx = (p[i - 1].x + p[i].x) / 2
    d += ` C ${cx},${p[i-1].y} ${cx},${p[i].y} ${p[i].x},${p[i].y}`
  }
  return d
}
function areaPath() {
  const last = rawPts[rawPts.length - 1]
  const first = rawPts[0]
  const bot = PAD + H
  return smoothPath() + ` L ${last.x},${bot} L ${first.x},${bot} Z`
}
// -------------------------

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen flex-col overflow-hidden" style={{ backgroundColor: "#CDD6E0" }}>
      <Sidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="flex-1 overflow-y-auto px-8 py-6" style={{ backgroundColor: "#f0f3f6" }}>

          {/* Greeting + Actions */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Olá, Dr. Adriano</h1>
              <p className="mt-0.5 text-sm text-gray-500">Quarta-feira, 6 de Maio de 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50">
                <CalendarDays size={14} />
                Últimos 30 Dias
              </button>
              <button
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm"
                style={{ backgroundColor: "#1565A8" }}
              >
                <Download size={14} />
                Baixar Relatório
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mb-6 grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{s.label}</span>
                  <span style={{ color: "#1565A8", opacity: 0.6 }}>{s.icon}</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold text-gray-900">{s.value}</span>
                  <span
                    className="flex items-center gap-0.5 text-sm font-semibold"
                    style={{ color: s.up ? "#2e7d55" : "#c0392b" }}
                  >
                    {s.up ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
                    {s.change}
                  </span>
                </div>
                {s.progress !== undefined && (
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${s.progress}%`, backgroundColor: "#1565A8" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Chart + Members */}
          <div className="grid grid-cols-3 gap-4">

            {/* Area Chart */}
            <div className="col-span-2 rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-700">Visão geral semanal de acessos</p>
                <div className="flex gap-2">
                  {["Acessos", "Usuários Únicos"].map((label, i) => (
                    <button
                      key={label}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={
                        i === 0
                          ? { backgroundColor: "#edf2f7", color: "#1c2f3a", border: "1px solid #d0dae4" }
                          : { backgroundColor: "transparent", color: "#9aadb8", border: "1px solid #e0eaf0" }
                      }
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <svg viewBox="0 0 640 220" className="w-full" style={{ height: "210px" }}>
                {/* Horizontal grid + Y labels */}
                {[0, 40, 80, 120, 160].map((v) => (
                  <g key={v}>
                    <line x1="44" y1={toY(v)} x2="610" y2={toY(v)} stroke="#edf2f7" strokeWidth="1" />
                    <text x="36" y={toY(v) + 4} fontSize="10" fill="#b0bec5" textAnchor="end">{v}</text>
                  </g>
                ))}
                {/* Day labels */}
                {days.map((d, i) => (
                  <text key={d} x={rawPts[i].x} y={PAD + H + 22} fontSize="10" fill="#b0bec5" textAnchor="middle">{d}</text>
                ))}
                {/* Area */}
                <path d={areaPath()} fill="rgba(21,101,168,0.07)" />
                {/* Line */}
                <path d={smoothPath()} fill="none" stroke="#1565A8" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Active Members */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-700">Membros ativos recentes</p>
                <button className="text-xs font-semibold" style={{ color: "#1565A8" }}>
                  Ver todos
                </button>
              </div>

              <div className="space-y-4">
                {members.map((m) => (
                  <div key={m.name} className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: "#1565A8" }}
                    >
                      {m.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900">{m.name}</p>
                      <p className="text-xs text-gray-500">{m.role}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5">
                      <span className="text-xs text-gray-400">{m.time}</span>
                      <button className="text-gray-300 hover:text-gray-500">
                        <MoreHorizontal size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}
