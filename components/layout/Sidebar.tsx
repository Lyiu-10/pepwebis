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
  Table2,
  ChevronLeft,
  Menu,
  LayoutDashboard,
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

function NavItemRow({ item, open }: { item: NavItem; open: boolean }) {
  return (
    <div
      title={!open ? item.label : undefined}
      className={`group relative flex cursor-pointer items-center transition-all duration-300 ${
        open ? "gap-3 px-4 py-2.5" : "justify-center py-2.5"
      } hover:bg-[#1565A8]/10`}
      style={{
        backgroundColor: item.active ? "rgba(163,196,218,0.45)" : "transparent",
        color: item.disabled ? "#9aadb8" : "#1c2f3a",
      }}
    >
      {/* Hover Indicator — "Sobe" animation */}
      <div 
        className="absolute left-0 bottom-0 w-1 bg-[#1565A8] transition-all duration-300 ease-out h-0 group-hover:h-full" 
      />

      <span className="shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ color: item.disabled ? "#9aadb8" : "#3a5f72" }}>
        {item.icon}
      </span>
      {open && (
        <span className={`whitespace-nowrap text-sm transition-transform duration-300 group-hover:translate-x-1 ${item.active ? "font-semibold" : "font-normal"}`}>
          {item.label}
        </span>
      )}
    </div>
  )
}

export function Sidebar({ open, onToggle, onClose }: { open: boolean; onToggle: () => void; onClose: () => void }) {
  return (
    <>
      {/* Backdrop — only when fully expanded */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px] transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar — always visible, collapses to icon strip */}
      <div
        className="fixed inset-y-0 left-0 z-50 flex flex-col overflow-hidden shadow-2xl transition-all duration-300 ease-in-out"
        style={{
          width: open ? "260px" : "56px",
          backgroundColor: "#CDD6E0",
        }}
      >
        {/* Header */}
        <div
          className="flex shrink-0 items-center justify-between overflow-hidden px-4 py-4"
          style={{ backgroundColor: "#1565A8", minHeight: "60px" }}
        >
          <div className={`flex items-center ${open ? "gap-3" : "w-full justify-center"}`}>
            <button
              onClick={onToggle}
              className="rounded-md p-1 transition-all duration-200 hover:bg-white/10 hover:scale-110 active:scale-90"
              title={open ? "Recolher menu" : "Expandir menu"}
            >
              {open ? (
                <LayoutDashboard size={24} color="white" className="shrink-0" />
              ) : (
                <Menu size={24} color="white" className="shrink-0" />
              )}
            </button>
            {open && (
              <div>
                <p className="whitespace-nowrap text-lg font-bold leading-tight text-white">Painel Médico</p>
                <p className="text-xs italic text-[#90c4e8]">Médico</p>
              </div>
            )}
          </div>
          {open && (
            <button 
              onClick={onClose} 
              className="shrink-0 text-white/70 transition-all duration-200 hover:scale-125 hover:text-white active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
          )}
        </div>

        {/* Unidade Selecionada */}
        <div className="shrink-0 border-b px-4 py-3" style={{ borderColor: "#b4c8d6" }}>
          {open ? (
            <>
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
            </>
          ) : (
            <div className="flex justify-center" title="Clinica de Oncologia e Mastologia">
              <Table2 size={20} style={{ color: "#2e7d55" }} />
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <div className="shrink-0 border-b" style={{ borderColor: "#b4c8d6" }}>
          {mainNav.map((item) => (
            <div key={item.label} className="border-b last:border-0" style={{ borderColor: "#b4c8d6" }}>
              <NavItemRow item={item} open={open} />
            </div>
          ))}
        </div>

        {/* Paciente Info — only when expanded */}
        {open && (
          <div className="shrink-0 border-b px-4 py-2" style={{ borderColor: "#b4c8d6" }}>
            <p className="text-xs font-medium text-[#1976D2]">Paciente: 003.921.464-87</p>
          </div>
        )}

        {/* Gestão do Paciente */}
        <div className="flex-1 overflow-y-auto">
          {open && (
            <div className="px-4 py-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-black opacity-70">
                Gestão do Paciente
              </p>
            </div>
          )}
          {gestaoNav.map((item) => (
            <NavItemRow key={item.label} item={item} open={open} />
          ))}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t px-0 py-4" style={{ borderColor: "#b4c8d6" }}>
          <div className={`flex items-center ${open ? "gap-3 px-4" : "justify-center"}`}>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-400 text-sm font-bold text-white shadow-sm">
              D
            </div>
            {open && (
              <span className="whitespace-nowrap text-sm font-semibold text-[#1c2f3a]">Developer</span>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
