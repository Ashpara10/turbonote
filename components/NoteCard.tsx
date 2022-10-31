import {
  Box,
  Flex,
  Heading,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import router from "next/router";
import { Note } from "../lib/types";

const NoteCard = ({ note, id }: { note: Note; id: string }) => {
  return (
    <Box
      py="4"
      px={"5"}
      borderRadius={"2xl"}
      border={"1px"}
      borderColor={useColorModeValue("gray.300", "whiteAlpha.200")}
      mb={"3"}
      maxW={"sm"}
      w="full"
    >
      <Heading
        size={"md"}
        onClick={() => router.push("/note/[id]", `/note/${id}`)}
      >
        {note.title}
      </Heading>
      <Flex
        px="2"
        mt={"2"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text>{new Date(note?.createdAt?.nanoseconds).toDateString()}</Text>
        <Tag colorScheme={"purple"}>#{note.tag}</Tag>
      </Flex>
    </Box>
  );
};

export default NoteCard;
