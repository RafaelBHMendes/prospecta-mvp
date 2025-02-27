import React, { useState, useEffect } from "react";
import empresasData from "../data/empresas.json";
import EmpresaCard from "../components/EmpresaCard";
import Paginacao from "../components/Paginacao";

const Home = () => {
  const [cidade, setCidade] = useState("");
  const [area, setArea] = useState("");
  const [regiao, setRegiao] = useState("");
  const [raio, setRaio] = useState("");
  const [empresasFiltradas, setEmpresasFiltradas] = useState(empresasData);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const empresasPorPagina = 6;

  const cidadesUnicas = [...new Set(empresasData.map((e) => e.cidade))];
  const areasUnicas = [...new Set(empresasData.map((e) => e.area))];

  const regioesPorCidade = {
    Fortaleza: ["Centro", "Aldeota", "Meireles", "Mucuripe", "Praia de Iracema"],
    "São Paulo": ["Centro", "Jardins", "Moema", "Pinheiros", "Vila Madalena"],
    Sobral: ["Centro", "Junco", "Derby", "Dom Expedito", "Coração de Jesus"]
  };

  const coordenadasPorRegiao = {
    Centro: { lat: -3.71722, lng: -38.54337 },
    Aldeota: { lat: -3.73647, lng: -38.49765 },
    Meireles: { lat: -3.73045, lng: -38.50886 },
    Mucuripe: { lat: -3.72591, lng: -38.48474 },
    "Praia de Iracema": { lat: -3.71916, lng: -38.52532 },
    Jardins: { lat: -23.56168, lng: -46.65598 },
    Moema: { lat: -23.60164, lng: -46.66958 },
    Pinheiros: { lat: -23.56141, lng: -46.70132 },
    "Vila Madalena": { lat: -23.55148, lng: -46.69126 },
    Junco: { lat: -3.68944, lng: -40.34972 },
    Derby: { lat: -3.68611, lng: -40.34972 },
    "Dom Expedito": { lat: -3.67833, lng: -40.34972 },
    "Coração de Jesus": { lat: -3.675, lng: -40.34972 }
  };

  const calcularDistancia = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Raio da Terra em km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distância em km
  };

  useEffect(() => {
    let filtradas = empresasData;
    if (cidade) filtradas = filtradas.filter((e) => e.cidade === cidade);
    if (area) filtradas = filtradas.filter((e) => e.area === area);
    if (regiao) filtradas = filtradas.filter((e) => e.municipio === regiao);
    if (raio && regiao) {
      const { lat, lng } = coordenadasPorRegiao[regiao];
      filtradas = filtradas.filter((e) => {
        const { lat: latEmpresa, lng: lngEmpresa } = coordenadasPorRegiao[e.regiao];
        return calcularDistancia(lat, lng, latEmpresa, lngEmpresa) <= raio;
      });
    }
    setEmpresasFiltradas(filtradas);
    setPaginaAtual(1); // Resetar para a primeira página ao aplicar filtros
  }, [cidade, area, regiao, raio]);

  // Lógica de paginação
  const indiceUltimaEmpresa = paginaAtual * empresasPorPagina;
  const indicePrimeiraEmpresa = indiceUltimaEmpresa - empresasPorPagina;
  const empresasPaginaAtual = empresasFiltradas.slice(
    indicePrimeiraEmpresa,
    indiceUltimaEmpresa
  );

  const totalPaginas = Math.ceil(empresasFiltradas.length / empresasPorPagina);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1117] to-[#161B22] text-[#C9D1D9] p-6 pb-24">
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
        <span className="bg-gradient-to-r from-[#58A6FF] to-[#238636] bg-clip-text text-transparent">
          Filtrar Leads
        </span>
      </h1>
      <div className="flex justify-center gap-4 mb-6">
        <select
          className="bg-[#161B22] text-[#C9D1D9] border border-[#30363D] p-2 rounded-lg shadow-sm focus:outline-none focus:border-[#58A6FF]"
          value={cidade}
          onChange={(e) => {
            setCidade(e.target.value);
            setRegiao(""); // Resetar a região ao mudar a cidade
          }}
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

        <select
          className="bg-[#161B22] text-[#C9D1D9] border border-[#30363D] p-2 rounded-lg shadow-sm focus:outline-none focus:border-[#58A6FF]"
          value={regiao}
          onChange={(e) => setRegiao(e.target.value)}
          disabled={!cidade}
        >
          <option value="">Todos os municípios</option>
          {cidade && empresasData
            .filter((e) => e.cidade === cidade)
            .map((e) => e.municipio)
            .filter((v, i, a) => a.indexOf(v) === i)
            .map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
        </select>

        <input
          type="number"
          className="bg-[#161B22] text-[#C9D1D9] border border-[#30363D] p-2 rounded-lg shadow-sm focus:outline-none focus:border-[#58A6FF]"
          value={raio}
          onChange={(e) => setRaio(e.target.value)}
          placeholder="Raio (km)"
          disabled={!regiao}
        />
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