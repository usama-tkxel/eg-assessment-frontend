import React from 'react';
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { AiFillWarning } from 'react-icons/ai';

const ErrorPage = () => {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Box textAlign="center" py={10} px={6}>
        <AiFillWarning
          style={{ fontSize: '50px', color: 'orange', display: 'inline' }}
        />

        <Heading as="h2" size="xl" mt={6} mb={2}>
          Something Went Wrong
        </Heading>
        <Text color="gray.500">
          Our team has been notified. you can Refresh or try again later
        </Text>
      </Box>
    </Flex>
  );
};

export default ErrorPage;
