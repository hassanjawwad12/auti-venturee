import React from "react";
import Footer from "./Footer";
import { Box, VStack } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
    <Box
        backgroundImage="url('/landing.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        height="100vh"
        position="relative"
      >
        <VStack
          position="absolute"
          top={["52%", "52%"]}
          left="35%"
          transform="translate(-50%, -50%)"
          align={"center"}
          mt={1}
        >

        </VStack>
        </Box>      
      <Footer />
    </>
  );
};

export default Login;
