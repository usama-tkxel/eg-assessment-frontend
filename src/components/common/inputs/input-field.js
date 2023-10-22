import {
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';

const InputField = ({
  className = '',
  label = null,
  prefixIcon,
  suffixIcon,
  error = null,
  type = 'text',
  errorBorderColor = 'red.300',
  id = '',
  name = '',
  variant = 'outline',
  register = {},
  step = '0.01',
  ...rest
}) => {
  return (
    <>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        {prefixIcon && <InputLeftElement>{prefixIcon}</InputLeftElement>}
        <Input
          id={id}
          name={name}
          //   placeholder={label}
          errorBorderColor={errorBorderColor}
          type={type}
          step={step}
          className={`${className}`}
          variant={variant}
          {...register}
          {...rest}
        />
        {suffixIcon && <InputRightElement>{suffixIcon}</InputRightElement>}
      </InputGroup>

      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </>
  );
};

export default InputField;
