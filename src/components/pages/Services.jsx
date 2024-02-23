import React from "react";
import InformacionPartido from "../InformacionPartido";

export const Services = () => {
  const equipos = ["Equipo 1", "Equipo 2", "Equipo 3", "Equipo 4", "Equipo 5",];

  const partidos = [];

  // Generación de enfrentamientos "todos contra todos"
  for (let i = 0; i < equipos.length - 1; i++) {
    for (let j = i + 1; j < equipos.length; j++) {
      partidos.push({
        fecha: "2024-02-22",
        hora: "18:00",
        equipoLocal: equipos[i],
        equipoVisitante: equipos[j]
      });
    }
  }

  return (
    <div className="container-inf">
      {partidos.map((partido, index) => (
        <InformacionPartido
          key={index}
          fecha={partido.fecha}
          hora={partido.hora}
          equipoLocal={partido.equipoLocal}
          equipoVisitante={partido.equipoVisitante}
        />
      ))}
    </div>
  );
};

export default Services;
