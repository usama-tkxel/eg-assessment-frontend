import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from 'src/components/common/header';
import { getAuthUser } from 'src/selectors/auth';

const Home = () => {
  const { firstName = '', lastName = '' } = useSelector(getAuthUser);
  return (
    <div>
      <Header />{' '}
      <Flex align='center' justify='center' width='full'>
        {`Welcom to Application ${firstName} ${lastName}`}
      </Flex>
    </div>
  );
};

export default Home;
