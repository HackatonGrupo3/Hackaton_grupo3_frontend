// src/pages/home/HomePage.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Icono de inicio
import Button from '@components/ui/Button/Button';
import Card from '@components/ui/Card/Card';

const HomePage = () => {
  return (
    // Fondo principal usando el color de fondo claro
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background-light dark:bg-dark-background">
      {/* Tarjeta con fondo blanco y sombra suave */}
      <Card className="max-w-md text-center p-8 space-y-4 shadow-lg rounded-xl">
        {/* Icono principal usando el color de acento */}
        <FaHome className="mx-auto w-16 h-16 text-accent" />

        {/* Título principal usando la fuente 'display' y color primario */}
        <h1 className="text-4xl font-bold font-display leading-tight">
          ¡Bienvenido a la Aventura del Ratoncito Pérez!
        </h1>

        {/* Texto general usando la fuente 'body' y color de texto secundario */}
        <p className="text-lg text-text-secondary font-body mt-4">
          Ayuda al Ratoncito Pérez a recuperar las monedas mágicas perdidas en Madrid.
          ¡Una experiencia interactiva para toda la familia!
        </p>

        <div className="flex justify-center space-x-4 mt-8">
          {/* Link que envuelve el botón para que sea navegable */}
          <Link to="/map">
            {/* Botón principal usando el color primario */}
            <Button variant="primary">Comenzar Aventura</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
