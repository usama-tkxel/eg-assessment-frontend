import React from 'react';

import { Button } from '@chakra-ui/react';

const CustomButton = ({
  icon,
  className,
  suffix = '',
  children = '',
  variant = 'solid',
  ...rest
}) => {
  return (
    <Button
      className={`inline-flex items-center gap-x-2 rounded-md px-3 py-2 ${className}`}
      {...rest}
      variant={variant}
    >
      {icon && <span className={suffix}>{icon}</span>}
      <span>{children}</span>
    </Button>
  );
};

export default CustomButton;
