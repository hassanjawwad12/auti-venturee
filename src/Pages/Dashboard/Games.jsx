import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import Tasks from "./Tasks";
import { VStack, Image, Text, HStack } from "@chakra-ui/react";

const Games = () => {
  return (
    <>
      <Navbar />
      <VStack
        height={"full"}
        width={"100%"}
        align={"center"}
        justifyContent={"center"}
        p={4}
      >
        <HStack width={["100%", "25%"]} ml={5} justifyContent={"space-between"}>
          <Text
            color={"#41807c"}
            letterSpacing={2}
            fontSize={["lg", "6xl"]}
            fontWeight={"bold"}
          >
            GAMES
          </Text>
          <Image src="3500896.png" width={["20%", "20%"]} height={"auto"} />
        </HStack>
        <Text fontSize={'4xl'} textAlign={'center'} as={'i'} color={'black'} width={['90%','70%']}>
          Indulgde in our highly interactive games which are a learning and fun
          experience in one !!
        </Text>
      </VStack>
      <Tasks />
      <Footer />
    </>
  );
};

export default Games;
