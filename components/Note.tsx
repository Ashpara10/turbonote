import { Spinner, VStack } from "@chakra-ui/react";
import { collection, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";
import NoteCard from "./NoteCard";

const Notes = () => {
  const ref = collection(db, "notes");
  const q = query(ref);
  const [value] = useCollection(q);

  return (
    <VStack w="full" maxW="md">
      {value?.docs ? (
        value?.docs?.map((e: any) => {
          return <NoteCard key={e} id={e.id} note={e.data()} />;
        })
      ) : (
        <Spinner speed="0.60s" />
      )}
    </VStack>
  );
};

export default Notes;
