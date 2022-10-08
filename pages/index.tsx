import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import {
  Box,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Notes from "../components/Note";
import BaseLayout from "../components/layouts/BaseLayout";

const Home = ({ data }: { data: any[] }) => {
  const cardBg = useColorModeValue("gray.500", "blackAlpha.500");
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <BaseLayout>
        <VStack>
          <Notes />
        </VStack>
      </BaseLayout>
    </div>
  );
};

export default Home;
