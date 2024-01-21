import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Chart from "./Chart";

const ModalComponentForChart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [rerenderChart, setRerenderChart] = useState(0);

  const handleViewChart = () => {
    setRerenderChart((prev) => prev + 1);
    onOpen();
  };

  return (
    <>
      <Button
        onClick={handleViewChart}
        colorScheme="linkedin"
        size={["xs", "md"]}
      >
        View Chart
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered="true" size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Task Graph </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Chart rerender={rerenderChart} />
          </ModalBody>
          <ModalFooter justifyContent="flex-end">
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponentForChart;
