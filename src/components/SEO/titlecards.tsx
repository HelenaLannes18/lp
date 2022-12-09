import { Heading, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface TitleCardProps {
    children: ReactNode
    tam?: string
}

export function TitleCard({ children, tam }:TitleCardProps) {
    return (
        <Heading
            as="h3"
            fontSize={"48px"}
            fontWeight={"700"}
            color={"#fff"}
            letterSpacing={"-0.03em"}
            w={tam}
        >
            {children}
        </Heading>

    )
}