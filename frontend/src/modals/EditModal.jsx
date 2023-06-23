import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
const EditModal = ({ name, id }) => {
  const [newName, setNewName] = useState("");
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleEdit = async () => {
    try {
      await axios.put(`http://localhost:7000/update_user/${id}`, {
        name: newName,
      });
    } catch (error) {
      console.error("Error in updating user:", error);
    }
  };
  return (
    <>
      <Button onClick={onOpen}>Edit</Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Edit Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={"column"} gap="10px">
              <Input
                defaultValue={name}
                onChange={(e) => setNewName(e.target.value)}
              />
            </Flex>
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"space-between"}>
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
