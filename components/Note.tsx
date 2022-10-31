import { Spinner, VStack } from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  useCollection,
  useCollectionData,
  useCollectionDataOnce,
} from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";
import { Note } from "../lib/types";
import NoteCard from "./NoteCard";

const Notes = () => {
  const ref = collection(db, "notes");
  const q = query(ref);
  const [value] = useCollectionData(q);
  const [note, setNotes] = useState<any[]>([]);

  const getNotes = async () => {
    const notes = await getDocs(q);
    setNotes(notes.docs);
    console.log(
      notes.docs.map((e) => {
        return { id: e.id, note: e.data() };
      })
    );
  };
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <VStack w="full" maxW="md" mb="20">
      {note ? (
        note?.map((e) => {
          return <NoteCard key={e} id={e.id} note={e.data()} />;
        })
      ) : (
        <Spinner speed="0.60s" />
      )}
    </VStack>
  );
};

export default Notes;
