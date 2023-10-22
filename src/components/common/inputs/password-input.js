import React, { forwardRef, useRef } from 'react';

import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from '@chakra-ui/react';

import { HiEye, HiEyeOff } from 'react-icons/hi';

export const PasswordInput = forwardRef((props, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef(null);
  const { required = true } = props;
  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <InputGroup>
      <InputRightElement>
        <IconButton
          variant="text"
          aria-label={isOpen ? 'Mask password' : 'Reveal password'}
          icon={isOpen ? <HiEyeOff /> : <HiEye />}
          onClick={onClickReveal}
        />
      </InputRightElement>
      <Input
        ref={mergeRef}
        type={isOpen ? 'text' : 'password'}
        autoComplete="current-password"
        required={required}
        {...props}
      />
    </InputGroup>
  );
});

export default PasswordInput;
