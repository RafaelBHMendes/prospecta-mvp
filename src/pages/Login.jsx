import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação (pode ser implementada posteriormente)
    alert(`Login realizado com: ${email}`);
    navigate("/"); // Redireciona para a Home após o login
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#C9D1D9] flex items-center justify-center">
      <div className="bg-[#161B22] p-8 rounded-xl border border-[#30363D] shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0D1117] border border-[#30363D] p-2 rounded-lg focus:outline-none focus:border-[#58A6FF]"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="senha">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full bg-[#0D1117] border border-[#30363D] p-2 rounded-lg focus:outline-none focus:border-[#58A6FF]"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#238636] text-white py-2 rounded-lg hover:bg-[#2ea043] transition duration-300"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;