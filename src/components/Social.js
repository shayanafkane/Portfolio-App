import { HStack, Icon, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import {FaFacebook , FaGoogle , FaSpotify , FaShopify} from 'react-icons/fa';
function Social() {


    const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");
    return (
        <div>
            <HStack spacing="24">
                <Icon as={FaFacebook} boxSize="50" />
                <Icon as={FaGoogle} boxSize="50" />
                <Icon as={FaShopify} boxSize="50" />
                <Icon as={FaSpotify} boxSize="50" />
            </HStack>
        </div>
    )
}

export default Social
