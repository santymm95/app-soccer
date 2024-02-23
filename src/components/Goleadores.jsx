import React from 'react';
import './Styles/goleadores.css';
  // Asegúrate de ajustar la ruta según la ubicación de tu archivo CSS

const Goleadores = ({ jugadores }) => {
  // Ordenar jugadores por la cantidad de goles de mayor a menor
  const jugadoresOrdenados = jugadores.sort((a, b) => b.goles - a.goles).slice(0, 5);

  return (
    <div className="goleadores-container">
      <h2>Top 5 Goleadores</h2>
      <table>
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Goles</th>
          </tr>
        </thead>
        <tbody>
          {jugadoresOrdenados.map((jugador, index) => (
            <tr key={index}>
              <td>{jugador.nombre}</td>
              <td>{jugador.goles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Goleadores;
