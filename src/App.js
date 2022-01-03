import { Flex, Heading, IconButton, Spacer, useColorMode, VStack } from "@chakra-ui/react";
import { FaMoon, Fainstagram, FaGithub, FaLinkedin, FaSun, FaInstagram } from 'react-icons/fa';
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";



  return (
    <VStack p={5} overflow="hidden">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Shayan Afkane</Heading>
      
      <Spacer ></Spacer>
      <IconButton icon={<FaLinkedin />} isRound={true} onClick={toggleColorMode}></IconButton>
      <IconButton ml="2" icon={<FaInstagram />} isRound={true} onClick={toggleColorMode}></IconButton>
      <IconButton ml="2" icon={<FaGithub />} isRound={true} onClick={toggleColorMode}></IconButton>
      <IconButton ml="8" icon={isDark ? <FaSun /> : <FaMoon />} isRound={true} onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
