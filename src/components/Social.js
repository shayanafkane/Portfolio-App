import { HStack, Icon, useMediaQuery , Flex } from '@chakra-ui/react'
import React from 'react'
import {FaFacebook , FaGoogle , FaSpotify , FaShopify} from 'react-icons/fa';
function Social() {


    const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");
    return (
        <div>
            
            <HStack spacing="24">
            <Flex direction={isNotSmallerScreen ? "row" : "column"}>

                <Icon as={FaFacebook} boxSize="50"  mt={isNotSmallerScreen ? "0" : "5"} mr={isNotSmallerScreen ? "40" : "0"}  />
                <Icon as={FaGoogle} boxSize="50"  mt={isNotSmallerScreen ? "0" : "5"} mr={isNotSmallerScreen ? "40" : "0"} />
                <Icon as={FaShopify} boxSize="50"  mt={isNotSmallerScreen ? "0" : "5"} mr={isNotSmallerScreen ? "40" : "0"} />
                <Icon as={FaSpotify} boxSize="50"  mt={isNotSmallerScreen ? "0" : "5"} mr={isNotSmallerScreen ? "40" : "0"} />
            </Flex>
            </HStack>
        </div>
    )
}

export default Social
