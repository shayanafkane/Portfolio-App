import { Circle, Flex, Stack, useColorMode, useMediaQuery, Box, Text, Button, Image } from '@chakra-ui/react'
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");


    return (

        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} >

                <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-end">
                    <Text fontSize="5xl" fontWeight="semibold">Hi , I am</Text>
                    <Text fontSize="7xl" bgGradient="linear(to-r , cyan.400 , blue.500 , purple.600)" bgClip="text" fontWeight="bold">Shayan Afkane</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Lorem ipsum dolor sit amet. Est voluptatum rerum sed quos tenetur eum quis officia. Hic tempora omnis sit consectetur aliquid et galisum similique.</Text>
                    <Button mt={8} colorScheme='blue' onClick={() => window.open("https://shayanafkane.ir")}>Hire Me</Button>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"}
                    borderRadius="full" backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://res.cloudinary.com/dpzrxnav1/image/upload/v1641201468/test/ezgif.com-gif-maker_11_pznwag.jpg' />
            </Flex>
        </Stack>
    )
}

export default Header;
