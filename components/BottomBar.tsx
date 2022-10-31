import React, { useState } from "react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { auth, db } from "../lib/firebase";

const BottomBar = () => {
  const [note, setNote] = useState<{
    title: string;
    content: string;
  }>({ title: "", content: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const createNote = async () => {
    // const ref = collection(db, "notes");
    // const newNote = await addDoc(ref, {
    //   title: note.title,
    //   content: note.content,
    //   createdAt: Timestamp.now(),
    // });
    // console.log(newNote);
    console.log(note.title);
  };
  return (
    <Flex
      display={{ sm: "flex", md: "none" }}
      gap={"10px"}
      py={"2"}
      px={"3"}
      borderTop="1px"
      borderColor={"whiteAlpha.200"}
      alignItems={"center"}
      justifyContent={"center"}
      bg={useColorModeValue("white", "#121212")}
      w={"full"}
      pos={"fixed"}
      bottom={"0"}
      left={"0"}
      right={"0"}
    >
      <IconButton
        bg={"transparent"}
        aria-label="add-note-btn"
        icon={<AddIcon />}
        onClick={onOpen}
      />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          bg={useColorModeValue("white", "blackAlpha.800")}
          backdropFilter="blur(10px)"
        >
          <ModalHeader>New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                value={note.title}
                onChange={(e: any) =>
                  setNote({ ...e, [e.target.name]: e.target.value })
                }
                placeholder="'I love Kanye'"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Content</FormLabel>
              <Input
                name="content"
                value={note.content}
                onChange={(e: any) =>
                  setNote({ ...e, [e.target.name]: e.target.value })
                }
                placeholder="I love the old Kanye"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" onClick={() => createNote()} mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <IconButton
        bg={"transparent"}
        aria-label="add-note-btn"
        icon={<SearchIcon />}
      />
      <Avatar
        p="0.5"
        size={"sm"}
        name={`${auth?.currentUser?.displayName}`}
        src={`${auth?.currentUser?.photoURL}`}
      />
    </Flex>
  );
};

export default BottomBar;
