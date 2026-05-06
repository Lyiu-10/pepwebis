"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export function LoginForm() {
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const [mostrarSenha, setMostrarSenha] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implementar lógica de login
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Usuário Field */}
      <div>
        <label htmlFor="usuario" className="block text-sm font-medium text-black">
          Usuário
        </label>
        <input
          id="usuario"
          type="text"
          placeholder="Digite seu usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="mt-2 w-full rounded-lg border border-gray-300 bg-[#E3E8ED] px-4 py-3 text-black placeholder-gray-500 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      {/* Senha Field */}
      <div>
        <label htmlFor="senha" className="block text-sm font-medium text-black">
          Senha
        </label>
        <div className="relative">
          <input
            id="senha"
            type={mostrarSenha ? "text" : "password"}
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 bg-[#E3E8ED] px-4 py-3 pr-12 text-black placeholder-gray-500 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={() => setMostrarSenha(!mostrarSenha)}
            className="absolute inset-y-0 right-3 flex items-center pt-2 transition-opacity hover:opacity-80"
            style={{ color: "#1565C0" }}
          >
            {mostrarSenha ? (
              <Eye className="h-5 w-5" />
            ) : (
              <EyeOff className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-8 w-full rounded-md bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        ENTRAR
      </button>

      {/* Security Notice */}
      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-black">
        <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
        <p>Conexão segura e criptografada</p>
      </div>
    </form>
  )
}
