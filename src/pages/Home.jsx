import React, { useState, useEffect } from "react";
import empresasData from "../data/empresas.json";
import EmpresaCard from "../components/EmpresaCard";
import Paginacao from "../components/Paginacao";

const Home = () => {
  const [cidade, setCidade] = useState("");
  const [area, setArea] = useState("");
  const [empresasFiltradas, setEmpresasFiltradas] = useState(empresasData);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const empresasPorPagina = 6;

  const cidadesUnicas = [...new Set(empresasData.map((e) => e.cidade))];
  const areasUnicas = [...new Set(empresasData.map((e) => e.area))];

  useEffect(() => {
    let filtradas = empresasData;
    if (cidade) filtradas = filtradas.filter((e) => e.cidade === cidade);
    if (area) filtradas = filtradas.filter((e) => e.area === area);
    setEmpresasFiltradas(filtradas);
    setPaginaAtual(1); // Resetar para a primeira página ao aplicar filtros
  }, [cidade, area]);

  // Lógica de paginação
  const indiceUltimaEmpresa = paginaAtual * empresasPorPagina;
  const indicePrimeiraEmpresa = indiceUltimaEmpresa - empresasPorPagina;
  const empresasPaginaAtual = empresasFiltradas.slice(
    indicePrimeiraEmpresa,
    indiceUltimaEmpresa
  );

  const totalPaginas = Math.ceil(empresasFiltradas.length / empresasPorPagina);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1117] to-[#161B22] text-[#C9D1D9] p-6 pb-24"> {/* Adicione pb-24 para evitar sobreposição */}
      <h1 className="text-3xl font-semibold text-center mb-6 flex items-center justify-center space-x-2">
  {/* Ícone de lupa */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#58A6FF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-search"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>

  {/* Texto com gradiente */}
  <span className="bg-gradient-to-r from-[#58A6FF] to-[#238636] bg-clip-text text-transparent">
    Filtrar Leads
  </span>
</h1>
      <div className="flex justify-center gap-4 mb-6">
        <select
          className="bg-[#161B22] text-[#C9D1D9] border border-[#30363D] p-2 rounded-lg shadow-sm focus:outline-none focus:border-[#58A6FF]"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        >
          <option value="">Todas as cidades</option>
          {cidadesUnicas.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          className="bg-[#161B22] text-[#C9D1D9] border border-[#30363D] p-2 rounded-lg shadow-sm focus:outline-none focus:border-[#58A6FF]"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          <option value="">Todas as áreas</option>
          {areasUnicas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {empresasPaginaAtual.length > 0 ? (
          empresasPaginaAtual.map((empresa) => (
            <EmpresaCard key={empresa.id} empresa={empresa} />
          ))
        ) : (
          <p className="text-center col-span-3 text-[#8B949E]">
            Nenhuma empresa encontrada.
          </p>
        )}
      </div>

      {/* Paginação fixa no rodapé */}
      <Paginacao
        paginaAtual={paginaAtual}
        totalPaginas={totalPaginas}
        mudarPagina={setPaginaAtual}
      />
    </div>
  );
};

export default Home;