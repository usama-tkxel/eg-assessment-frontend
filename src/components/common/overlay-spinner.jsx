import { AlertDialog, AlertDialogOverlay, Spinner } from '@chakra-ui/react';
import React from 'react';

const OverlaySpinner = ({ isOpen }) => {
  return (
    <AlertDialog isOpen={isOpen}>
      <AlertDialogOverlay
        style={{ opacity: 0.01 }}
        className="flex justify-center items-center h-100"
      >
        <Spinner
          thickness="3px"
          speed="0.85s"
          emptyColor="gray.300"
          color="blue.500"
          size="xl"
        />
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default OverlaySpinner;
