import React from 'react';
import JugadoresTarjetas from '../JugadoresTarjetas';
import Goleadores from '../Goleadores';

const Tarjet = () => {
  // Lista de jugadores con tarjetas amarillas y rojas
  const jugadores = [
    { nombre: 'Carlos', equipo: "Barcelona", numero: "10", amarillas: 3, rojas: 1 },
    { nombre: 'Ronaldo', equipo: "Real Madrid", numero: "7", amarillas: 5, rojas: 2 },
    { nombre: 'Andres', equipo: "Boca Juniors", numero: "10", amarillas: 4, rojas: 0 },
    { nombre: 'Mario', equipo: "River", numero: "10", amarillas: 2, rojas: 2 },
    { nombre: 'Hader', equipo: "Nacional", numero: "1", amarillas: 6, rojas: 1 },
    // Agrega más jugadores si es necesario
  ];

  return (
    <div> 
    <Goleadores jugadores={jugadores} />
      {/* Mostrar los jugadores con tarjetas */}
      <JugadoresTarjetas jugadores={jugadores} />

      {/* Mostrar los goleadores */}
      
    </div>
  );
};

export default Tarjet;
