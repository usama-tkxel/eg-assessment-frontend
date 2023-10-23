/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAuthUser } from 'src/selectors/auth';

import { logout } from 'src/actions/auth';

import { Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/menu';
import { Avatar } from '@chakra-ui/avatar';
import { useColorModeValue } from '@chakra-ui/color-mode';

import LinkButton from 'src/components/common/button/link-button';

import CompanyLogo from 'src/assets/header/companylogo.png';
import { LOGIN } from 'src/constants/routes';

import { Spinner } from '@chakra-ui/react';

const Header = () => {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);
  const user = useSelector(getAuthUser);
  const { firstName = '', email = '', lastName = '' } = user;
  const name = firstName + lastName;
  const dispatch = useDispatch();
  console.log(user);
  const logoutUser = () => {
    setLoggingOut(true);
    dispatch(logout())
      .unwrap()
      .then((res) => {
        setLoggingOut(false);
        navigate(LOGIN);
      });
  };

  return (
    <div className='bg-[#F6F7FD] flex justify-between items-center px-8 py-1 border-b border-[#FBFBFE]'>
      <div className='flex items-center gap-x-4'>
        <div className=''>Easygenrator</div>
      </div>
      <div className='flex items-center gap-x-4'>
        <HStack spacing={{ base: '0', md: '6' }}>
          <Flex alignItems='center'>
            <Menu>
              <MenuButton
                py={2}
                transition='all 0.3s'
                _focus={{ boxShadow: 'none' }}
              >
                <HStack>
                  <Avatar
                    size='sm'
                    src='https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems='flex-start'
                    spacing='0'
                    ml='0'
                  >
                    <Text fontSize='sm' fontWeight='500'>
                      {name}
                    </Text>
                    <Text fontSize='xs' color='gray.600'>
                      {email}
                    </Text>
                  </VStack>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
              >
                <MenuItem>Profile</MenuItem>

                <MenuDivider />
                <MenuItem onClick={logoutUser}>
                  {loggingOut ? (
                    <Spinner size='sm' label='logging out..' />
                  ) : (
                    'Sign out'
                  )}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </div>
    </div>
  );
};

export default Header;
