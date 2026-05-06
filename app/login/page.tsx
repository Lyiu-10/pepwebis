import { LoginForm } from "@/components/auth/LoginForm"

export const metadata = {
  title: "Login - PepWeb Médica",
  description: "Área de acesso para médicos",
}

export default function LoginPage() {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#CDD6E0" }}
    >
      {/* Centered Card */}
      <div
        className="flex overflow-hidden rounded-3xl"
        style={{
          width: "1200px",
          height: "500px",
          border: "1px solid rgba(255,255,255,0.45)",
          boxShadow: "0 25px 50px rgba(182, 208, 226, 0.6), 0 10px 20px rgba(0, 0, 0, 0.03)"
        }}
      >

        {/* Left Panel */}
        <div
          className="relative flex shrink-0 flex-col items-center justify-center overflow-hidden px-10"
          style={{
            width: "600px",
            height: "500px",
            background: "linear-gradient(135deg, #A7CCE4 0%, #B3C4E4 100%)",
          }}
        >
          {/* Decorative circle top-right */}
          <div
            className="absolute -right-4 -top-4"
            style={{
              width: "160px",
              height: "160px",
              background: "linear-gradient(180deg, #7AB2D6 0%, rgba(122, 178, 214, 0.2) 100%)",
              borderRadius: "0 0 0 100%",
              opacity: 0.8,
            }}
          />
          {/* Decorative circle bottom-left */}
          <div
            className="absolute -bottom-4 -left-4"
            style={{
              width: "160px",
              height: "160px",
              background: "linear-gradient(180deg, #7AB2D6 0%, rgba(122, 178, 214, 0.2) 100%)",
              borderRadius: "0 100% 0 0",
              opacity: 0.6,
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            <img
              src="/Logo-Ongology-White.png"
              alt="Oncology Group"
              style={{ width: "250px", height: "160px", objectFit: "contain" }}
              className="mx-auto mb-8"
            />
            <h1 className="mb-3 text-2xl font-bold text-black">
              Bem-vindo à área Médica
            </h1>
            <p className="text-sm text-black">
              Acesse sua conta para gerenciar pacientes e consultas
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div
          className="flex shrink-0 flex-col items-center justify-center px-12"
          style={{ width: "600px", height: "500px", backgroundColor: "#C1D0DE" }}
        >
          <div className="w-full">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-black">Acesso Médica</h2>
              <p className="mt-1 text-sm text-black">Entre com suas credenciais</p>
            </div>

            <LoginForm />
          </div>
        </div>

      </div>
    </div>
  )
}
