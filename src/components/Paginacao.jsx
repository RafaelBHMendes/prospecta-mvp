import React from "react";

const Paginacao = ({ paginaAtual, totalPaginas, mudarPagina }) => {
  const irParaPaginaAnterior = () => {
    if (paginaAtual > 1) {
      mudarPagina(paginaAtual - 1);
    }
  };

  const irParaProximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      mudarPagina(paginaAtual + 1);
    }
  };

  // Função para gerar os botões de paginação
  const gerarBotoesPagina = () => {
    const botoes = [];
    const maxBotoes = 7; // Máximo de botões de página visíveis (excluindo as setas)

    if (totalPaginas <= maxBotoes) {
      // Mostrar todas as páginas
      for (let i = 1; i <= totalPaginas; i++) {
        botoes.push(i);
      }
    } else {
      // Mostrar páginas com "..." e a última página
      if (paginaAtual <= 3) {
        // Mostrar as primeiras 3 páginas, a próxima e "..." e a última
        for (let i = 1; i <= 3; i++) {
          botoes.push(i);
        }
        botoes.push(4); // Garantir que o "..." esteja a uma página de distância
        botoes.push("...");
        botoes.push(totalPaginas);
      } else if (paginaAtual > totalPaginas - 3) {
        // Mostrar a primeira página, "..." e as últimas 4 páginas
        botoes.push(1);
        botoes.push("...");
        for (let i = totalPaginas - 3; i <= totalPaginas; i++) {
          botoes.push(i);
        }
      } else {
        // Mostrar a primeira página, "..." , página atual e próximas, "..." e a última
        botoes.push(1);
        botoes.push("...");
        for (let i = paginaAtual - 1; i <= paginaAtual + 1; i++) {
          botoes.push(i);
        }
        botoes.push("...");
        botoes.push(totalPaginas);
      }
    }

    return botoes.map((botao, index) => (
      <button
        key={index}
        onClick={() => {
          if (typeof botao === "number") {
            mudarPagina(botao);
          }
        }}
        className={`px-4 py-2 rounded-lg border border-[#30363D] ${
          paginaAtual === botao
            ? "bg-[#238636] text-white"
            : "bg-[#161B22] text-[#C9D1D9] hover:bg-[#238636] hover:text-white"
        } transition duration-300`}
        disabled={botao === "..."}
      >
        {botao}
      </button>
    ));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0D1117] border-t border-[#30363D] py-4 shadow-lg">
      <div className="flex justify-center gap-2 items-center">
        {/* Botão de página anterior */}
        <button
          onClick={irParaPaginaAnterior}
          disabled={paginaAtual === 1}
          className="px-4 py-2 rounded-lg border border-[#30363D] bg-[#161B22] text-[#C9D1D9] hover:bg-[#238636] hover:text-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Botões de página */}
        {gerarBotoesPagina()}

        {/* Botão de próxima página */}
        <button
          onClick={irParaProximaPagina}
          disabled={paginaAtual === totalPaginas}
          className="px-4 py-2 rounded-lg border border-[#30363D] bg-[#161B22] text-[#C9D1D9] hover:bg-[#238636] hover:text-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Paginacao;