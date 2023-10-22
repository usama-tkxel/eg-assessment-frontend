/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  getAuthUser,
  getMGCustomerServiceStatus,
  getSMAdminStatus,
  getSMSalesRep,
  getSuperAdminStatus,
} from 'src/selectors/auth';

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

import { AiOutlineShoppingCart, AiOutlinePlus } from 'react-icons/ai';

import CompanyLogo from 'src/assets/header/companylogo.png';
import {
  ADMIN_USER_LISTING_ROUTE,
  CHANGE_PASSWORD,
  DEFAULT_ROUTE_ORDERS,
  LOGIN,
  SALES_PERSON_INFO_ROUTE,
} from 'src/constants/routes';

import { Spinner } from '@chakra-ui/react';
import { resetOrder } from 'src/redux-slices/order';
import ReportModal from 'src/components/modals/report-modal';
import { FaFileDownload } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const user = useSelector(getAuthUser);
  const { name = '', email = '' } = user;
  const dispatch = useDispatch();
  const mgCustomerService = useSelector(getMGCustomerServiceStatus);
  const isSuperAdmin = useSelector(getSuperAdminStatus);
  const isSMAdmin = useSelector(getSMAdminStatus);
  const isSMSalesRep = useSelector(getSMSalesRep);

  const location = useLocation();

  const logoutUser = () => {
    setLoggingOut(true);
    dispatch(logout())
      .unwrap()
      .then((res) => {
        setLoggingOut(false);
        dispatch(resetOrder());
        navigate(LOGIN);
      });
  };

  const clickOnResetOrder = () => {
    dispatch(resetOrder());
  }

  const openReportModal = () => {
    setShowReportModal(true);
  }

  const closeReportModal = () => {
    setShowReportModal(false);
  }

  return (
    <div className="bg-[#F6F7FD] flex justify-between items-center px-8 py-1 border-b border-[#FBFBFE]">
      <div className="flex items-center gap-x-4">
        <div className="">
          <img src={CompanyLogo} alt="comapany logo" />
        </div>

        <LinkButton
          className="bg-[#EEEEFC] hover:bg-indigo-100 text-sm font-semibold text-indigo-600 ml-6"
          icon={<AiOutlineShoppingCart className="h-4 w-4" />}
          to={DEFAULT_ROUTE_ORDERS}
        >
          {isSMSalesRep ? 'My Orders' : 'All Orders'}
        </LinkButton>
        {isSMSalesRep && (
          <LinkButton
            className="bg-[#EEEEFC] hover:bg-indigo-100 text-sm font-semibold text-indigo-600"
            icon={<AiOutlinePlus className="h-4 w-4" />}
            to={SALES_PERSON_INFO_ROUTE}
            onClick={clickOnResetOrder}
          >
            New Order
          </LinkButton>
        )}

        {((isSuperAdmin || isSMAdmin) && location.pathname === DEFAULT_ROUTE_ORDERS)  && (
          <LinkButton
            className="bg-[#EEEEFC] hover:bg-indigo-100 text-sm font-semibold text-indigo-600"
            icon={<FaFileDownload className="h-4 w-4" />}
            onClick={openReportModal}
          >
            Reports
          </LinkButton>
        )}
        
        {(isSuperAdmin || isSMAdmin) && (
          <LinkButton
            className="bg-[#EEEEFC] hover:bg-indigo-100 text-sm font-semibold text-indigo-600 ml-2"
            to={ADMIN_USER_LISTING_ROUTE}
          >
            Admin Panel
          </LinkButton>
        )}
      </div>
      <div className="flex items-center gap-x-4">
        <HStack spacing={{ base: '0', md: '6' }}>
          <Flex alignItems="center">
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}
              >
                <HStack>
                  <Avatar
                    size="sm"
                    src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="0"
                    ml="0"
                  >
                    <Text fontSize="sm" fontWeight="500">
                      {name}
                    </Text>
                    <Text fontSize="xs" color="gray.600">
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
                <MenuItem onClick={() => navigate(CHANGE_PASSWORD)}>Change Password</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logoutUser}>
                  {loggingOut ? (
                    <Spinner size="sm" label="logging out.." />
                  ) : (
                    'Sign out'
                  )}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </div>
      <ReportModal onClose={closeReportModal} isOpen={showReportModal} />
    </div>
  );
};

export default Header;
