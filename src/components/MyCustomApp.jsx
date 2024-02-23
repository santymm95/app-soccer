import React, { useState, useEffect } from 'react';
import '../App.css'; // Importa el archivo CSS

const CustomElectronicNotice = ({ notices, intervalTime }) => {
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNoticeIndex((prevIndex) =>
        (prevIndex + 1) % notices.length
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [notices, intervalTime]);

  return (
    <div className="custom-electronic-notice-container">
      <div className="custom-electronic-notice">
        <p>{notices[currentNoticeIndex]}</p>
      </div>
    </div>
  );
};

// Ejemplo de uso del componente CustomElectronicNotice
const MyCustomApp = () => {
  const notices = ["Esto es un espacio dedicado a publicidad y ofertas exclusivas."]; // Lista de avisos
  const intervalTime = 3000; // Intervalo de tiempo en milisegundos

  return (
    <div className="app-container">
       
      <CustomElectronicNotice notices={notices} intervalTime={intervalTime} />
    </div>
  );
};

export default MyCustomApp;
