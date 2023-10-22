import React, { useEffect } from 'react';

import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { AiFillWarning } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { getAuthenticationStatus } from 'src/selectors/auth';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const isAuthenticated = useSelector(getAuthenticationStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, []);
  return (
    <>
      {isAuthenticated && (
        <Flex
          minH="100vh"
          align="center"
          justify="center"
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Box textAlign="center" py={10} px={6}>
            <AiFillWarning
              style={{ fontSize: '50px', color: 'red', display: 'inline' }}
            />

            <Heading as="h2" size="xl" mt={6} mb={2}>
              Unauthorised
            </Heading>
            <Text color="gray.500">404 Page not Found</Text>
          </Box>
        </Flex>
      )}
    </>
  );
};
export default NotFound;
