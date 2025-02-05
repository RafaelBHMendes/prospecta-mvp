import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import empresasData from "../data/empresas.json";

const EmpresaDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const empresa = empresasData.find((e) => e.id === parseInt(id));

  if (!empresa) {
    return (
      <div className="min-h-screen bg-[#0D1117] text-[#C9D1D9] flex items-center justify-center">
        <p className="text-center text-[#8B949E]">Empresa não encontrada.</p>
      </div>
    );
  }

  const handleFavoritar = () => {
    alert(`Empresa ${empresa.nome} adicionada aos favoritos!`);
  };

  const handleLigar = () => {
    window.location.href = `tel:${empresa.telefone}`;
  };

  const handleEnviarMensagem = () => {
    const mensagem = `Olá, ${empresa.nome}! Gostaria de mais informações.`;
    window.location.href = `https://wa.me/${empresa.telefone.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(mensagem)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1117] to-[#161B22] text-[#C9D1D9] p-6">
      <div className="container mx-auto">
        {/* Botão de voltar */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-[#58A6FF] hover:text-[#58A6FF]/80 transition duration-300 flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Voltar</span>
        </button>

        {/* Card de detalhes da empresa */}
        <div className="bg-gradient-to-br from-[#161B22] to-[#0D1117] p-8 rounded-xl border border-[#30363D] shadow-lg">
          <h2 className="text-3xl font-semibold text-[#C9D1D9] mb-4">
            {empresa.nome}
          </h2>

          {/* Informações da empresa */}
          <div className="space-y-4 text-[#8B949E]">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-map-pin"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p>{empresa.cidade}</p>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-briefcase"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <p>{empresa.area}</p>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <p>{empresa.telefone}</p>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
              <a
                href={`https://instagram.com/${empresa.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58A6FF] hover:text-[#58A6FF]/80 transition duration-300"
              >
                {empresa.instagram}
              </a>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={handleFavoritar}
              className="flex items-center space-x-2 bg-[#238636] text-white px-6 py-3 rounded-lg hover:bg-[#2ea043] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>Favoritar</span>
            </button>

            <button
              onClick={handleLigar}
              className="flex items-center space-x-2 bg-[#238636] text-white px-6 py-3 rounded-lg hover:bg-[#2ea043] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Ligar</span>
            </button>

            <button
              onClick={handleEnviarMensagem}
              className="flex items-center space-x-2 bg-[#238636] text-white px-6 py-3 rounded-lg hover:bg-[#2ea043] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-message-circle"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Enviar Mensagem</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpresaDetalhes;