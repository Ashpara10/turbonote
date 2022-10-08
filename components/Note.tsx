import { VStack } from "@chakra-ui/react";
import { collection, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";
import NoteCard from "./NoteCard";

const Notes = () => {
  const ref = collection(db, "notes");
  const q = query(ref);
  const [value] = useCollection(q);
  console.log(
    value?.docs.map((e) => {
      return e.id, e.data();
    })
  );
  return (
    <VStack w="full" maxW="md">
      {value?.docs?.map((e: any) => {
        return <NoteCard key={e} id={e.id} note={e.data()} />;
      })}
    </VStack>
  );
};

export default Notes;
