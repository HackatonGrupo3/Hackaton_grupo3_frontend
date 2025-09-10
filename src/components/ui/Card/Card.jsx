// src/components/ui/Card/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className = '', ...props }) => {
  // Estilos base para la tarjeta, con sombreado y bordes redondeados
  const baseStyles = 'rounded-lg shadow-md p-6 bg-white dark:bg-gray-800';
  
  // Combinamos los estilos base con cualquier clase adicional que se pase
  const combinedStyles = `${baseStyles} ${className}`;

  return (
    <div className={combinedStyles} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;