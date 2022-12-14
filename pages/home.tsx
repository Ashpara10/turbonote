import { VStack } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import BaseLayout from "../components/layouts/BaseLayout";
import Notes from "../components/Note";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Turbonote - Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <BaseLayout>
        <Header />
        <VStack>
          <Notes />
        </VStack>
      </BaseLayout>
    </div>
  );
};

export default Dashboard;
