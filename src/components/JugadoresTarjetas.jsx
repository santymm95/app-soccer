import React from 'react';
import './Styles/goleadores.css';

const JugadoresTarjetas = ({ jugadores }) => {
  // Ordenar jugadores por cantidad total de tarjetas (amarillas + rojas)
  const jugadoresOrdenados = jugadores.sort((a, b) => (b.amarillas + b.rojas) - (a.amarillas + a.rojas)).slice(0, 5);

  return (
    <div className='container-jugadores-tarjetas'>
      <h2>Dato de tajetas</h2>
      <table>
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Equipo</th>
            <th>Número</th>
            <th>Amarillas</th>
            <th>Rojas</th>
          </tr>
        </thead>
        <tbody>
          {jugadoresOrdenados.map((jugador, index) => (
            <tr key={index}>
              <td>{jugador.nombre}</td>
              <td>{jugador.equipo}</td>
              <td>{jugador.numero}</td>
              <td>{jugador.amarillas}</td>
              <td>{jugador.rojas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JugadoresTarjetas;
