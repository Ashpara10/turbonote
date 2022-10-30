import { Spinner, VStack } from "@chakra-ui/react";
import { collection, query } from "firebase/firestore";
import {
  useCollection,
  useCollectionData,
  useCollectionDataOnce,
} from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";
import NoteCard from "./NoteCard";

const Notes = () => {
  const ref = collection(db, "notes");
  const q = query(ref);
  const [value] = useCollectionData(q);

  return (
    <VStack w="full" maxW="md">
      {value ? (
        value?.map((e: any) => {
          return <NoteCard key={e} note={e} />;
        })
      ) : (
        <Spinner speed="0.60s" />
      )}
    </VStack>
  );
};

export default Notes;
