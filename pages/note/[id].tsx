import { Heading, Text, VStack } from "@chakra-ui/react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { db } from "../../lib/firebase";

const NotePage = ({ note }: any) => {
  const noteParsed = JSON.parse(note);
  const { title, createdAt } = noteParsed;
  return (
    <VStack as="div">
      <Head>
        <title>{title}</title>
      </Head>
      <Heading size={"lg"}>{title}</Heading>
      <Text>{new Date(createdAt.nanoseconds).toLocaleDateString()}</Text>
    </VStack>
  );
};

export default NotePage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ref = doc(db, "notes", String(params?.id));
  const note = await getDoc(ref);

  return {
    props: {
      note: JSON.stringify(note.data()),
    },
    notFound: !note.exists() && "Note does not exists",
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const ref = collection(db, "notes");
  const data = await getDocs(ref);
  return {
    paths: data.docs.map((e) => {
      return { params: { id: e.id } };
    }),
    fallback: false,
  };
};
