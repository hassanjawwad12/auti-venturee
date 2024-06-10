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
} from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [guardianemail, setGuardianemail] = useState("");
  const [gender , setGender] = useState("");

  return (
    <>
      <Box
        backgroundImage="url('/login.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        height="110vh"
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
          height={"96vh"}
          justifyContent={"center"}
          spacing={8}
        >
          <Icon as={FaRegUser} w={20} h={20} color={"#f1c50e"} />
          <Text
            fontSize={["lg", "5xl"]}
            fontWeight={"semibold"}
            color={"#f1c50e"}
          >
            User Signup
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
            p={4}
            bg={"white"}
            color={"black"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        
          <Input
            rounded={"16px"}
            height={"7vh"}
            width={"80%"}
            p={4}
            bg={"white"}
            color={"black"}
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <Input
            rounded={"16px"}
            height={"7vh"}
            width={"80%"}
            p={4}
            bg={"white"}
            color={"black"}
            placeholder="enter gender"
            value={gender}

            onChange={(e) => setGender(e.target.value)}
            />

          <Input
            rounded={"16px"}
            height={"7vh"}
            width={"80%"}
            p={4}
            bg={"white"}
            color={"black"}
            placeholder="Guardian Email"
            value={guardianemail}
            onChange={(e) => setGuardianemail(e.target.value)}
          />

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
            onClick={() => navigate("/login")}
          >
            Confirm Signup
          </Button>
        </VStack>
      </Box>


      <Footer />
    </>
  );
};

export default Signup;
