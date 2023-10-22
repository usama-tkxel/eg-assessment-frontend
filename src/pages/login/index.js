import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import PasswordInput from 'src/components/common/inputs/password-input';
import InputField from 'src/components/common/inputs/input-field';
import Footer from 'src/components/common/footer/index';

import { loginUser } from 'src/actions/auth';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';

import { validateEmail } from 'src/helpers';
import { getAuthenticationStatus } from 'src/selectors/auth';

import { FORGOT_PASSWORD, LOGIN, PAGE_NOT_FOUND } from 'src/constants/routes';

export const Login = () => {
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
    if (!isSubmitting && isAuthenticated) {
      return navigate(LOGIN);
    }
    navigate(PAGE_NOT_FOUND);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (values) => {
    setError('');
    if (isSubmitting || isFormUpdating) {
      return;
    }
    setIsSubmitting(true);

    const { email = '', password = '' } = values ?? {};
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then((res) => {
        console.log(res);
        setIsSubmitting(false);
        navigate('/');
      })
      .catch((err) => {
        setIsSubmitting(false);
        setError('Invalid Credentials');
      });
  };

  return (
    <Box minH='100vh' bg={useColorModeValue('gray.50', 'gray.800')}>
      <Flex align='center' justify='center' width='full'>
        <Container
          maxW='lg'
          py={{ base: '12', md: '24' }}
          px={{ base: '0', sm: '8' }}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <form id='login-form' onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing='8'>
              <Stack spacing='6'>
                <Stack align='center'>
                  <Heading fontSize='4xl' textAlign='center' color='gray.800'>
                    Easy Generator Login
                  </Heading>
                </Stack>
              </Stack>
              <Box
                py={{ base: '0', sm: '8' }}
                px={{ base: '4', sm: '10' }}
                bg={{ base: 'transparent', sm: 'bg.surface' }}
                borderRadius='10px'
                border='1px solid #e8e8e8'
                boxShadow={{ base: '8', sm: 'md' }}
              >
                <Stack spacing='6'>
                  <Stack spacing='5'>
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

                    <FormControl
                      id='password'
                      isRequired
                      isInvalid={errors.password}
                    >
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
                    {Boolean(error) && (
                      <FormControl isInvalid={Boolean(error)}>
                        <FormErrorMessage>{error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Stack>
                  <HStack justify='space-between'>
                    <Checkbox defaultChecked>Remember me</Checkbox>
                    <Button variant='text' size='sm'>
                      <Link to={FORGOT_PASSWORD}> Forgot password?</Link>
                    </Button>
                  </HStack>
                  <Stack spacing='6'>
                    <Button type='submit' isLoading={isSubmitting}>
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </form>
        </Container>
      </Flex>

      <Footer />
    </Box>
  );
};

export default Login;
