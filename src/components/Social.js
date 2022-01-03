import { HStack, Icon, useMediaQuery, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa';
function Social() {


    const [isNotSmallerScreen] = useMediaQuery("(min-width:991px)");
    return (

    
            <HStack  w={isNotSmallerScreen ? "100%" : "auto"} >

                <Flex w={isNotSmallerScreen ? "100%" : "auto"} direction={isNotSmallerScreen ? "row" : "column"}  justifyContent={isNotSmallerScreen ? "space-around" : "center"}  >

                    <Icon as={FaFacebook} boxSize="50" mt={isNotSmallerScreen ? "0" : "5"} />
                    <Icon as={FaGoogle} boxSize="50" mt={isNotSmallerScreen ? "0" : "5"} />
                    <Icon as={FaShopify} boxSize="50" mt={isNotSmallerScreen ? "0" : "5"} />
                    <Icon as={FaSpotify} boxSize="50" mt={isNotSmallerScreen ? "0" : "5"} />



                </Flex>
            </HStack>
       

    )
}

export default Social
