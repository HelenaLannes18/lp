import { Button } from "@chakra-ui/react"

export function Buttons() {
    return (
        <Button
            as="button"
            color="#2FACFA"
            bg="transparent"
            letterSpacing="0.03em"
            textTransform="uppercase"
            fontSize="20px"
            border="2px solid #2FACFA"
            borderRadius={"16px"}
            _hover={{
                bg: "transparent"
            }}
        >
            Peça Agora
        </Button>

    )
}