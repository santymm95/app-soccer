import React, { useState } from 'react';
import './Styles/Formulario.css';

const FormularioInscripcion = () => {
    const [nombreEquipo, setNombreEquipo] = useState('');
    const [barrioEquipo, setBarrioEquipo] = useState('');
    const [equiposInscritos, setEquiposInscritos] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (equiposInscritos.length >= 10) {
            setError('Se ha alcanzado el máximo de equipos inscritos (10)');
            return;
        }

        const equipoExistente = equiposInscritos.find(equipo => equipo.barrio === barrioEquipo);

        if (equipoExistente) {
            setError('Ya hay un equipo inscrito en este barrio');
            return;
        }

        const nuevoEquipo = {
            nombre: nombreEquipo,
            barrio: barrioEquipo,
            id: generateID(),
            fechaInscripcion: new Date().toLocaleString()
        };

        setEquiposInscritos([...equiposInscritos, nuevoEquipo]);
        setNombreEquipo('');
        setBarrioEquipo('');
        setError('');
    };

    const generateID = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    return (
        
        <div>
         <div className="titte">
         <h2>Formulario de Inscripción</h2>
      </div>
             <div className='form-container'>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre del Equipo:</label>
                    <input
                        type="text"
                        value={nombreEquipo}
                        onChange={(e) => setNombreEquipo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Barrio:</label>
                    <input
                        type="text"
                        value={barrioEquipo}
                        onChange={(e) => setBarrioEquipo(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Inscribir Equipo</button>
            </form>
            <h3>Equipos Inscritos:</h3>
            <ul>
                {equiposInscritos.map((equipo, index) => (
                    <li key={index}>
                        {equipo.nombre} - {equipo.barrio} - ID: {equipo.id} - Inscripción: {equipo.fechaInscripcion}
                    </li>
                ))}
            </ul>
             </div>   
        </div>
    );
};

export default FormularioInscripcion;
