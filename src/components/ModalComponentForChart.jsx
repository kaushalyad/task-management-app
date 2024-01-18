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
const  ModalComponentForChart=() =>{
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="linkedin">View Chart</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered="true" size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Task Graph [2024]</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Chart />
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
}
export default ModalComponentForChart;
