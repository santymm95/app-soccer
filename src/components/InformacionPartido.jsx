import React, { useState } from "react";
import "./Styles/card.css";

const InformacionPartido = ({ fecha, hora, equipoLocal, equipoVisitante }) => {
  // Estados para los marcadores
  const [marcadorLocal, setMarcadorLocal] = useState(0);
  const [marcadorVisitante, setMarcadorVisitante] = useState(0);

  return (
    <div className="partido-container">

      <div className="partido">
        <p><span className="partido-fecha-hora">Fecha:</span> {fecha}</p>
        <p><span className="partido-fecha-hora">Hora:</span> {hora}</p>
      </div>
      <div className="partido-info">
        <p><span className="equipo-nombre">{equipoLocal}</span> vs <span className="equipo-nombre">{equipoVisitante}</span></p>
      </div>
      <div className="partido-info">
        {/* Campos de entrada para los marcadores */}
        <label>Marcador {equipoLocal}: </label>
        <input
          type="number"
          value={marcadorLocal}
          onChange={(e) => setMarcadorLocal(parseInt(e.target.value))}
        />
        <label>Marcador {equipoVisitante}: </label>
        <input
          type="number"
          value={marcadorVisitante}
          onChange={(e) => setMarcadorVisitante(parseInt(e.target.value))}
        />
      </div>
      <div className="divisor"></div>
    </div>
  );
};

export default InformacionPartido;
