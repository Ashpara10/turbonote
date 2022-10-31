import { Heading, Text, VStack } from "@chakra-ui/react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import NoteLayout from "../../components/layouts/NoteLayout";
import { db } from "../../lib/firebase";

const NotePage = ({ note }: any) => {
  const noteParsed = JSON.parse(note);
  console.log(noteParsed);
  const { title, createdAt, content } = noteParsed;
  return (
    <VStack
      as="div"
      w={"full"}
      px={"3"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      my={"80px"}
    >
      <NoteLayout>
        <VStack gap={"10px"} maxW={"3xl"} as="article">
          <Head>
            <title>{title}</title>
          </Head>

          <Heading px={"3"} size={{ base: "xl", md: "2xl" }}>
            {title}
          </Heading>
          <Text>{new Date(createdAt?.nanoseconds).toLocaleString()}</Text>
          <Text px={"3"}>{content}</Text>
        </VStack>
      </NoteLayout>
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
    revalidate: 10,
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
