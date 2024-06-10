import React from "react";
import { HStack, Spacer, Text, Icon, VStack, Image } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <HStack
        align={"center"}
        justifyContent={"center"}
        height={"30vh"}
        width={"100%"}
        px={4}
        py={4}
        bg={"#adf6f2"}
      >
        <HStack bg={"#adf6f2"} width={"70%"}>
          <VStack>
            <Icon as={FaRegUser} boxSize={16} color={"#2cccc4"} />
            <Text as={"i"} fontSize={"2xl"} color={"black"}>
              Profile
            </Text>
          </VStack>
          <Image ml={10} src="lion.png" width={"10%"} height={"auto"} />
          <Spacer />
          <Text px={4} fontSize={'5xl'} cursor={"pointer"} onClick={() => navigate("/dashboard")}>
            HOME
          </Text>
          <Text px={4} fontSize={'5xl'} onClick={() => navigate("/tasks")}>TASKS</Text>
          <Text px={4} fontSize={'5xl'} onClick={() => navigate("/games")}>GAMES</Text>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
