import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link as UILink,
  FormErrorMessage,
} from '@chakra-ui/react';

import { signUpUser } from 'src/actions/auth';

import { useForm } from 'react-hook-form';

import InputField from 'src/components/common/inputs/input-field';
import PasswordInput from 'src/components/common/inputs/password-input';
import { validateEmail } from 'src/helpers';
import { HOME, LOGIN } from 'src/constants/routes';
import { getAuthenticationStatus } from 'src/selectors/auth';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting: isFormUpdating },
  } = useForm();

  const isAuthenticated = useSelector(getAuthenticationStatus);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(HOME);
    }
  }, [isAuthenticated]);

  const onSubmit = (values) => {
    if (isSubmitting || isFormUpdating) {
      return;
    }
    setIsSubmitting(true);
    dispatch(signUpUser(values))
      .unwrap()
      .then((res) => {
        setIsSubmitting(false);
        const { message = '', authenticated = false } = res;
        return setError(message);
      })
      .catch((err) => {
        setIsSubmitting(false);
      });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <form id='login-form' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl
                    id='firstName'
                    isRequired
                    isInvalid={errors.firstName}
                  >
                    <InputField
                      id='firstName'
                      label='First Name'
                      type='text'
                      name='firstName'
                      register={register('firstName', {
                        required: 'first name is required',
                      })}
                      error={errors?.firstName?.message}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl
                    id='lastName'
                    isRequired
                    isInvalid={errors.lastName}
                  >
                    <InputField
                      id='lastName'
                      label='Last Name'
                      type='text'
                      name='lastName'
                      register={register('lastName', {
                        required: 'last name is required',
                      })}
                      error={errors?.lastName?.message}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id='email' isRequired isInvalid={errors.email}>
                <InputField
                  id='email'
                  label='Email address'
                  type='email'
                  name='email'
                  register={register('email', {
                    required: 'Email address is required',
                    validate: (value) => {
                      if (!validateEmail(value)) {
                        return 'Email is not valid';
                      }
                    },
                  })}
                  error={errors?.email?.message}
                />
              </FormControl>
              <FormControl id='password' isRequired isInvalid={errors.password}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <PasswordInput
                  name='password'
                  id='password'
                  {...register('password', {
                    required: 'This is required',
                  })}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <div>
                {' '}
                {Boolean(error) && (
                  <FormControl isInvalid={Boolean(error)}>
                    <FormErrorMessage>{error}</FormErrorMessage>
                  </FormControl>
                )}
              </div>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText='Submitting...'
                  type='submit'
                  isLoading={isSubmitting}
                  size='lg'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user?{' '}
                  <Link to={LOGIN}>
                    <UILink color={'blue.400'}>Login</UILink>{' '}
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Flex>
  );
};
export default Signup;
