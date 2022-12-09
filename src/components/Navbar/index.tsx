/* eslint-disable */
import { Button, Flex, HStack, IconButton, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { MdMenu, MdOutlineClose } from "react-icons/md"

import { Images } from '../Images'
import { Navigation } from './navigation'


export function Navbar() {

    const [display, changeDisplay] = useState('none')
    return (
        <HStack
            as="header"
            bg="#0C0C0C"
            align="center"
            justify="space-around"
            px={4}
            py={6}
            boxShadow='0px 15px 20px #0000001a'
            position="sticky"
            top="0"
            zIndex='1000'
        >
            <Images tam={'5%'} path={'/Design_sem_nome-removebg-preview.png'} description={''} width={"500"} height={"500"} />
            <HStack
                as="nav"
                spacing={8}
                display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
            >

                <Navigation name="Black Friday" link='/' />

                <Navigation name="Landing Pages" link='/produtos' />

                <Navigation name="Sites" link='/#contato' />

                <Navigation name="Lojas Virtuais" link='/' />

                <Navigation name="Sistemas" link='/produtos' />

            </HStack>
            <Button
                as="button"
                bg="#2FACFA"
                color="#fff"
                fontSize="16px"
                px={6}
                py={6}
                borderRadius="16px"
                textTransform={"uppercase"}
                fontWeight={"bold"}
                _hover={{
                    bg: "#2FACFA"

                }}
            >
                Solicite um orçamento
            </Button>
            <IconButton
                aria-label={'Open Menu'}
                size="lg"
                bg="transparent"
                color="#fff"
                icon={<MdMenu />}
                display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
                onClick={() => changeDisplay('flex')}
            />
            <Flex as="section" display={{ base: 'none', lg: "flex", xl: "flex" }} />
            <Stack
                w="100vw"
                h="100vh"
                bg="gray.50"
                zIndex={20}
                position="fixed"
                top="0"
                left="0%"
                overflowY="auto"
                display={display}
            >

                <Stack
                    align="end"
                >
                    <IconButton
                        aria-label='Close Menu'
                        mt={2}
                        mr={2}
                        bg="transparent"
                        size="lg"
                        icon={<MdOutlineClose />}
                        onClick={() => changeDisplay('none')}

                    />

                </Stack>
                <Stack
                    align="center"
                >
                    <Navigation name="Black Friday" link='/' />

                    <Navigation name="Landing Pages" link='/produtos' />

                    <Navigation name="Sites" link='/#contato' />

                    <Navigation name="Lojas Virtuais" link='/' />

                    <Navigation name="Sistemas" link='/produtos' />
                </Stack>
                <Button
                    as="button"
                    bg="#2FACFA"
                    color="#fff"
                    fontSize="16px"
                    px={6}
                    py={6}
                    borderRadius="16px"
                    fontWeight={"bold"}
                    _hover={{
                        bg: "#2FACFA"

                    }}
                >
                    Solicite um orçamento
                </Button>

            </Stack>
        </HStack>
    )
}