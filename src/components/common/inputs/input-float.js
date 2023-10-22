import React from 'react';
import 'src/components/common/inputs/index.css';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from '@chakra-ui/react';

const CustomInput = ({
  label,
  prefixIcon = null,
  suffixIcon = null,
  filled = false,
  errorMessage,
  infoMessage,
  register,
  labelClass = 'peer-placeholder-shown:text-gray-500 float-label',
  ...rest
}) => {
  return (
    <FormControl variant="floating" isInvalid={Boolean(errorMessage)}>
      <InputGroup>
        {prefixIcon && (
          <InputLeftElement
            pointerEvents="none"
            classname="absolute left-8 top-1/2 -translate-y-1/4"
            h={'100%'}
          >
            {prefixIcon}
          </InputLeftElement>
        )}
        <Input
          placeholder=" "
          className={`${
            prefixIcon ? 'pl-12' : 'pl-8'
          } peer w-full placeholder:text-transparent py-2.5 rounded-sm custom-classes input-blue-outline1 pl-32  text-gray-500`}
          {...register}
          // {prefixIcon ? paddingLeft='32px' : paddingLeft = ''}
          paddingY={'24px'}
          {...rest}
        />
        {suffixIcon && (
          <InputRightElement pointerEvents="none">
            {suffixIcon}
          </InputRightElement>
        )}
        {/* It is important that the Label comes after the Control due to css selectors */}
        <FormLabel className={labelClass} fontWeight={'400'}>
          {label}
        </FormLabel>
      </InputGroup>
      {infoMessage && <FormHelperText>{infoMessage}</FormHelperText>}
      <FormErrorMessage className="position-absolute absolute top-10">
        {errorMessage && errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomInput;
