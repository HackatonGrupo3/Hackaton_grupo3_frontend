// src/components/ui/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-body font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white focus:ring-primary',
    secondary: 'bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button type={type} onClick={onClick} className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;