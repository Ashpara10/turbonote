import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import router from "next/router";
import { Note } from "../lib/types";

const NoteCard = ({ note }: { note: Note }) => {
  // console.log(note);
  return (
    <Box
      p="3"
      borderRadius={"lg"}
      border={"1px"}
      borderColor={useColorModeValue("gray.300", "whiteAlpha.200")}
      m={"3"}
      maxW={"sm"}
      w="full"
    >
      <Heading
        size={"md"}
        onClick={() => router.push("/note/[id]", `/note/${note.id}`)}
      >
        {note.title}
      </Heading>
    </Box>
  );
};

export default NoteCard;
