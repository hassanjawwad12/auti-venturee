import React from "react";
import {
  HStack,
  Spacer,
  Text,
  Icon,
  VStack,
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Box,
  Stack
} from "@chakra-ui/react";
import { FaRegUser, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              aria-label="Open Menu"
              size="lg"
              mr={2}
              icon={<FaBars />}
              onClick={onOpen}
            />
          </Box>
          <Stack direction={'row'} display={{ base: "none", md: "block" }}>
            <Text px={4} fontSize={'5xl'} cursor={"pointer"} onClick={() => navigate("/dashboard")}>
              HOME
            </Text>
            <Text px={4} fontSize={'5xl'} onClick={() => navigate("/tasks")}>TASKS</Text>
            <Text px={4} fontSize={'5xl'} onClick={() => navigate("/games")}>GAMES</Text>
          </Stack>
        </HStack>
      </HStack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                <Text fontSize={'5xl'} cursor={"pointer"} onClick={() => { navigate("/dashboard"); onClose(); }}>
                  HOME
                </Text>
                <Text fontSize={'5xl'} onClick={() => { navigate("/tasks"); onClose(); }}>TASKS</Text>
                <Text fontSize={'5xl'} onClick={() => { navigate("/games"); onClose(); }}>GAMES</Text>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Navbar;