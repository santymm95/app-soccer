import React from 'react';
import './Styles/tabla.css'; // Asegúrate de que la ruta sea correcta

const TablaPosiciones = () => {
  const equipos = [
    { 
      nombre: 'Equipo 1',
      partidosJugados: 10,
      ganados: 6,
      empatados: 2,
      perdidos: 2,
      golesFavor: 25,
      golesContra: 15,
      diferenciaGoles: 10
    },
    { 
      nombre: 'Equipo 2',
      partidosJugados: 10,
      ganados: 5,
      empatados: 3,
      perdidos: 2,
      golesFavor: 20,
      golesContra: 12,
      diferenciaGoles: 8
    },
    { 
      nombre: 'Equipo 3',
      partidosJugados: 10,
      ganados: 4,
      empatados: 3,
      perdidos: 3,
      golesFavor: 18,
      golesContra: 18,
      diferenciaGoles: 0
    },
    { 
      nombre: 'Equipo 4',
      partidosJugados: 10,
      ganados: 3,
      empatados: 4,
      perdidos: 3,
      golesFavor: 16,
      golesContra: 17,
      diferenciaGoles: -1
    },
    { 
      nombre: 'Equipo 5',
      partidosJugados: 10,
      ganados: 3,
      empatados: 3,
      perdidos: 4,
      golesFavor: 14,
      golesContra: 16,
      diferenciaGoles: -2
    },
    { 
      nombre: 'Equipo 6',
      partidosJugados: 10,
      ganados: 2,
      empatados: 5,
      perdidos: 3,
      golesFavor: 12,
      golesContra: 13,
      diferenciaGoles: -1
    },
    { 
      nombre: 'Equipo 7',
      partidosJugados: 10,
      ganados: 2,
      empatados: 4,
      perdidos: 4,
      golesFavor: 13,
      golesContra: 15,
      diferenciaGoles: -2
    },
    { 
      nombre: 'Equipo 8',
      partidosJugados: 10,
      ganados: 2,
      empatados: 3,
      perdidos: 5,
      golesFavor: 11,
      golesContra: 14,
      diferenciaGoles: -3
    },
    { 
      nombre: 'Equipo 9',
      partidosJugados: 10,
      ganados: 1,
      empatados: 4,
      perdidos: 5,
      golesFavor: 10,
      golesContra: 18,
      diferenciaGoles: -8
    },
    { 
      nombre: 'Equipo 10',
      partidosJugados: 10,
      ganados: 1,
      empatados: 2,
      perdidos: 7,
      golesFavor: 8,
      golesContra: 20,
      diferenciaGoles: -12
    }
  ];
  
  // Calcular puntos
  equipos.forEach(equipo => {
    equipo.puntos = equipo.ganados * 3 + equipo.empatados;
  });
  

  return (
    <div className='container-tabla'>
      <h2>Tabla de Posiciones</h2>
      <table className="tabla-posiciones">
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Puntos</th>
            <th>Partidos Jugados</th>
            <th>Ganados</th>
            <th>Empatados</th>
            <th>Perdidos</th>
            <th>Goles a Favor</th>
            <th>Goles en Contra</th>
            <th>Diferencia de Goles</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map((equipo, index) => (
            <tr key={index}>
              <td>{equipo.nombre}</td>
              <td>{equipo.puntos}</td>
              <td>{equipo.partidosJugados}</td>
              <td>{equipo.ganados}</td>
              <td>{equipo.empatados}</td>
              <td>{equipo.perdidos}</td>
              <td>{equipo.golesFavor}</td>
              <td>{equipo.golesContra}</td>
              <td>{equipo.diferenciaGoles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaPosiciones;
