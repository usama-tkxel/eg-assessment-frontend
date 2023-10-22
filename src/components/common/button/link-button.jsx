import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({
  icon,
  className,
  iconClassName = '',
  children = '',
  to = '#',
  ...rest
}) => {
  return (
    <Link
      className={`inline-flex items-center gap-x-2 rounded-md px-3 py-2 ${className}`}
      {...rest}
      to={to}
    >
      {icon && <span className={iconClassName}>{icon}</span>}
      {children}
    </Link>
  );
};

export default LinkButton;
