import { Box, Flex, Heading, Icon, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react';
import { DiAndroid, DiCodeigniter, DiWebplatform } from 'react-icons/di';
function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    7+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
            </Box>
            <Box alignSelf="center" px="10" py="16">
                <Text fontWeight="bold" fontSize="2xl">UI\UX Designer and Developer</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >

                    <Flex ml={isNotSmallerScreen ? "4" : 0} rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Android Apps
                        </Text>

                    </Flex>
                    <Flex ml={isNotSmallerScreen ? "4" : 0} rounded="xl" direction="column" mt={4} bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{bg : "green.400"}}>
                        <Icon color="white" p="4" as={DiCodeigniter} w="24" color="black" h="24" />
                        <Text color="white" p="4" fontSize="xl"  color="black" fontWeight="semibold">
                            Front End Developer
                        </Text>

                    </Flex>
                    <Flex ml={isNotSmallerScreen ? "4" : 0} rounded="xl" direction="column" mt={4} bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{bg : "teal.400"}}>
                        <Icon color="white" p="4" as={DiWebplatform}  color="black" w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl"  color="black" fontWeight="semibold">
                            Web Designer
                        </Text>

                    </Flex>
                </Flex>


            </Box>
        </Flex>
    )
}

export default Profile
