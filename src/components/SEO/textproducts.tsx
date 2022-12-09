import { Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface TextProductsProps {
    children: ReactNode
}

export function TextProducts({ children }:TextProductsProps) {
    return (
        <Text
            as="p"
            color="#818181"
            fontSize="20px"
            fontWeight={"600"}
            letterSpacing={"-0.03em"}
            lineHeight={"150%"}
        >
            {children}
        </Text>

    )
}