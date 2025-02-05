import React from "react";
import { useNavigate } from "react-router-dom";

const EmpresaCard = ({ empresa }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/empresa/${empresa.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gradient-to-br from-[#161B22] to-[#0D1117] p-6 rounded-xl border border-[#30363D] shadow-lg hover:shadow-xl hover:border-[#58A6FF] transition-all duration-300 cursor-pointer transform hover:scale-105"
    >
      {/* Nome da empresa */}
      <h2 className="text-xl font-semibold text-[#C9D1D9] mb-2">
        {empresa.nome}
      </h2>

      {/* Informações da empresa */}
      <div className="space-y-2 text-[#8B949E]">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
          <p> {empresa.cidade}</p>
        </div>

        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
          <p> {empresa.area}</p>
        </div>

        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
          <p> {empresa.telefone}</p>
        </div>
      </div>

      {/* Instagram */}
      <div className="mt-4">
        <a
          href={`https://instagram.com/${empresa.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-[#58A6FF] hover:text-[#58A6FF]/80 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
          <span>{empresa.instagram}</span>
        </a>
      </div>
    </div>
  );
};

export default EmpresaCard;