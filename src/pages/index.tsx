import { HStack, Stack, Text, Heading } from "@chakra-ui/react"
import { MdDevices, MdOutlineMonetizationOn, MdOutlinePayments, MdOutlineShoppingCart } from "react-icons/md"

import { Images } from "../components/Images"
import { Navbar } from "../components/Navbar"
import { Buttons } from "../components/SEO/buttons"
import { MainPage } from "../components/SEO/main"
import { StackCards } from "../components/SEO/stackcard"
import { StackIcons } from "../components/SEO/stackicons"
import { TextProducts } from "../components/SEO/textproducts"
import { TitleCard } from "../components/SEO/titlecards"

export default function Home() {
  return (
    <>
      <Navbar />
      <MainPage>
        <HStack
          py={28}
        >
          <Stack
            as="section"
          >
            <Stack
              as="aside"
              spacing={3}
              _before={{
                content: "''",
                backgroundImage: "url('/Design_sem_nome__11_-removebg-preview 2.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: "80%",
                position: "absolute",
                top: '0',
                zIndex: '-1',
                bottom: '0%',
                left: '37%',
                right: '0%'
              }}

            >
              <Heading
                as="h1"
                color="white"
                fontWeight={"600"}
                fontSize={"130px"}
              >
                BLACK FRIDAY
              </Heading>
              <Heading
                as="h2"
                color="#2FACFA"
                fontWeight={"700"}
                fontSize={"24px"}
              >
                POR TEMPO LIMITADO
              </Heading>
            </Stack>
            <Text
              as="p"
              color={"#818181"}
              fontSize={"20px"}
              fontWeight={"600"}
              w="60%"
            >
              Garanta já seu site, loja virtual, landing page ou sistema e invista no futuro da sua empresa
            </Text>
          </Stack>
        </HStack>
        <HStack
          align="stretch"
          justify="center"
        >
          <StackIcons as={MdOutlineShoppingCart} >
            Produtos com até 35% de desconto
          </StackIcons>

          <StackIcons as={MdOutlineMonetizationOn}>
            Peça seu orçamento grátis
          </StackIcons>

          <StackIcons as={MdOutlinePayments}>
            Dividimos em até 10 vezes sem juros
          </StackIcons>

          <StackIcons as={MdDevices} >
            Produto personalizado
          </StackIcons>

        </HStack>
        <HStack
          align={"center"}
        >
          <Text
            as="p"
            fontSize={"91px"}
            fontWeight={"700"}
            color="#fff"
            textAlign={"center"}
            lineHeight="115%"
            letterSpacing={"-0.02em"}
          >
            Não perca a chance de mostrar seu negócio para o <Text as="span" color="#2facfa">mundo</Text>
          </Text>
        </HStack>

        <HStack
          spacing={32}
        >
          <Images tam={"40%"} path={"/Group 236.png"} description={""} width={"622"} height={"702"} />
          <StackCards>
            <TitleCard>
              Sites com <Text as="span" color="#2facfa">35%</Text> de desconto
            </TitleCard>
            <TextProducts>
              Com um site você aumenta a visibilidade do seu negócio e consegue atingir clientes do mundo inteiro.
            </TextProducts>
            <Buttons />
          </StackCards>
        </HStack>

        <HStack
          spacing={32}
        >
          <StackCards>
            <TitleCard>
              Landing Pages com <Text as="span" color="#2facfa">25%</Text> de desconto
            </TitleCard>
            <TextProducts>
              Expanda seu negócio, seu curso, seu consultório, seu escritório e sua empresa com uma landing page.
            </TextProducts>
            <Buttons />
          </StackCards>
          <Images tam={"40%"} path={"/perspective-psd-mockups-to-showcase-website-design-cover-2-removebg-preview (1) 1.png"} description={""} width={"599"} height={"485"} />
        </HStack>
        <HStack
          spacing={12}
        >
          <HStack
            w="60%"
          >
            <Images tam={"100%"} path={"/Group 237.png"} description={""} width={"608"} height={"702"} />
            <Images tam={"100%"} path={"/Group 238.png"} description={""} width={"608"} height={"702"} />
          </HStack>

          <StackCards>
            <TitleCard>
              Sistemas com <Text as="span" color="#2facfa">25%</Text> de desconto
            </TitleCard>
            <TextProducts>
              Mantenha a organização da sua empresa e otimize seu tempo em um só clique.
            </TextProducts>
            <Buttons />
          </StackCards>
        </HStack>

        <HStack
          spacing={32}
        >
          <StackCards>
            <TitleCard>
              E-commerces com <Text as="span" color="#2facfa">35%</Text> de desconto
            </TitleCard>
            <TextProducts>
              The new Xbox Wireless Controller brings elegant design, refined comfort, and instant sharing to a familiar favorite.
            </TextProducts>
            <Buttons />
          </StackCards>
          <Images tam={"30%"} path={"/Group 239.png"} description={""} width={"660"} height={"1031"} />
        </HStack>

      </MainPage>
    </>
  )
}
