import React from "react";
import Footer from "./Footer";
import {
  Box,
  VStack,
  Text,
  Button,
  Icon,
  Input,
  Checkbox,
  HStack,
  useToast
} from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const toast= useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const passwordRegex = /^.{8,}$/;
  
    if (username === "" || password === "" ) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
  
  
    if (!passwordRegex.test(password)) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
  
    // If all checks pass, show success toast and navigate to dashboard
    toast({
      title: "Success",
      description: "Login successful.",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top-right",
    });
    navigate("/dashboard");
  };


  
  return (
    <>
      <Box
        backgroundImage="url('/login.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        height="100vh"
        position="relative"
      >
        <VStack
          position="absolute"
          mt={["15%", "5%"]}
          mr={[0, "10%"]}
          ml={["4%", "25%"]}
          align={"center"}
          bg={"#41807c"}
          p={4}
          borderRadius={"16px"}
          width={["90%", "50%"]}
          height={"80vh"}
          justifyContent={"center"}
          spacing={8}
        >
          <Icon as={FaRegUser} w={20} h={20} color={"#f1c50e"} />
          <Text
            fontSize={["lg", "5xl"]}
            fontWeight={"semibold"}
            color={"#f1c50e"}
          >
            User Login
          </Text>

          <Input
            rounded={"16px"}
            height={"7vh"}
            width={"80%"}
            p={4}
            bg={"white"}
            color={"black"}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            rounded={"16px"}
            height={"7vh"}
            width={"80%"}
            type="password"
            p={4}
            bg={"white"}
            color={"black"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <HStack width={"80%"} justify={'flex-end'} align={'flex-end'}>
            <Text color={"white"}>Forgot Password?</Text>
          </HStack>

          <HStack width={"80%"} align={"flex-start"}>
            <Checkbox color={"white"} defaultChecked>
              Remember Me
            </Checkbox>
          </HStack>
          <Button
            width={"80%"}
            px={8}
            py={6}
            rounded={"20px"}
            color={"black"}
            bg={"#f1c50e"}
            size={"lg"}
            _hover={{
              bg: "#2cccc4",
              color: "black",
            }}
            onClick={handleLogin}
            >
            Login
          </Button>
          <Text
            fontSize={"20px"}
            color={"white"}
            as={"i"}
            fontWeight={'semibold'}
            onClick={() => navigate("/register")}
            cursor={'pointer'}
          >
            Don't have an account? Click here
          </Text>
        </VStack>
      </Box>

      <Footer />
    </>
  );
};

export default Login;
