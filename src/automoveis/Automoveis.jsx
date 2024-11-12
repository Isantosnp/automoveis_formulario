import React, { useState } from "react";

export default function Automoveis() {
  const [marca, setMarca] = useState("");
  const [ano, setAno] = useState("");
  const [modelo, setModelo] = useState("");

  const handleSubmit = () => {
    console.log("Automóvel:", { marca, ano, modelo });
  };

  return (
    <div className="container">
      <h1>Automóveis</h1>
      <div className="formularioAutomovel">
        <input
          type="text"
          placeholder="Digite aqui a marca do seu automóvel."
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite aqui o ano do seu automóvel."
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite aqui o modelo do seu automóvel."
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
        <button onClick={handleSubmit}>Salvar</button>
      </div>
    </div>
  );
}
