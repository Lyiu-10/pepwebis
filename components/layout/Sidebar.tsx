"use client"

import {
  Calendar,
  CalendarCheck,
  Users,
  User,
  ClipboardPlus,
  Stethoscope,
  ClipboardList,
  FileText,
  Folder,
  LayoutDashboard,
  Table2,
  X
} from "lucide-react"

type NavItem = {
  icon: React.ReactNode
  label: string
  active?: boolean
  disabled?: boolean
}

const mainNav: NavItem[] = [
  { icon: <Calendar size={20} />, label: "Agendamentos" },
  { icon: <CalendarCheck size={20} />, label: "Agenda de Acolhimento" },
  { icon: <Users size={20} />, label: "Pacientes", active: true },
]

const gestaoNav: NavItem[] = [
  { icon: <User size={20} />, label: "Informações do Paciente", active: true },
  { icon: <ClipboardPlus size={20} />, label: "Evolução" },
  { icon: <Stethoscope size={20} />, label: "Tratamento" },
  { icon: <ClipboardList size={20} />, label: "Solicitar Exame" },
  { icon: <FileText size={20} />, label: "Receita Médica" },
  { icon: <Folder size={20} />, label: "Digitalizações do paciente", disabled: true },
]

function NavItemRow({ item }: { item: NavItem }) {
  return (
    <div
      className="flex cursor-pointer items-center gap-3 px-4 py-2.5 transition-all"
      style={{
        backgroundColor: item.active ? "rgba(163,196,218,0.45)" : "transparent",
        color: item.disabled ? "#9aadb8" : "#1c2f3a",
      }}
    >
      <span className="shrink-0" style={{ color: item.disabled ? "#9aadb8" : "#3a5f72" }}>
        {item.icon}
      </span>
      <span className={`whitespace-nowrap text-sm ${item.active ? "font-semibold" : "font-normal"}`}>
        {item.label}
      </span>
    </div>
  )
}

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px] transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "260px", backgroundColor: "#CDD6E0" }}
      >
        {/* Blue Header */}
        <div className="flex items-center justify-between px-4 py-4" style={{ backgroundColor: "#1565A8" }}>
          <div className="flex items-center gap-3">
            <LayoutDashboard size={24} color="white" />
            <div>
              <p className="text-lg font-bold leading-tight text-white">Painel Médico</p>
              <p className="text-xs italic text-[#90c4e8]">Médico</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Unidade Selecionada */}
        <div className="border-b px-4 py-3" style={{ borderColor: "#b4c8d6" }}>
          <p className="mb-1.5 text-xs font-medium" style={{ color: "#1976D2" }}>
            Unidade Selecionada
          </p>
          <div className="flex items-start gap-2">
            <Table2 size={20} className="mt-0.5 shrink-0" style={{ color: "#2e7d55" }} />
            <div>
              <p className="text-sm font-semibold leading-tight text-[#2e7d55]">
                Clinica de Oncologia e Mastologia
              </p>
              <p className="mt-0.5 text-xs text-[#1976D2]">COMN</p>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="border-b" style={{ borderColor: "#b4c8d6" }}>
          {mainNav.map((item) => (
            <div key={item.label} className="border-b last:border-0" style={{ borderColor: "#b4c8d6" }}>
              <NavItemRow item={item} />
            </div>
          ))}
        </div>

        {/* Paciente Info */}
        <div className="border-b px-4 py-2" style={{ borderColor: "#b4c8d6" }}>
          <p className="text-xs font-medium text-[#1976D2]">
            Paciente: 003.921.464-87
          </p>
        </div>

        {/* Gestão do Paciente */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-2.5">
            <p className="text-xs font-bold text-black uppercase tracking-wider opacity-70">Gestão do Paciente</p>
          </div>
          {gestaoNav.map((item) => (
            <NavItemRow key={item.label} item={item} />
          ))}
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-4" style={{ borderColor: "#b4c8d6" }}>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-400 text-sm font-bold text-white shadow-sm">
              D
            </div>
            <span className="text-sm font-semibold text-[#1c2f3a]">Developer</span>
          </div>
        </div>
      </div>
    </>
  )
}

