import { Flex, Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { FaMoon, Fainstagram, FaGithub , FaLinkedin, FaSun } from 'react-icons/fa';
function App() {

  const {colorMode , toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";



  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Shayan Afkane</Heading>
      </Flex>
      <IconButton ml="8" icon={isDark ? <FaSun/> : <FaMoon/>} isRound={true} onClick={toggleColorMode}></IconButton>
    </VStack>
  );
}

export default App;
