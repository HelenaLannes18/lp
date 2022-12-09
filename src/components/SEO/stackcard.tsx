import { Stack } from "@chakra-ui/react"
import { ReactNode } from "react"

interface StackCardsProps {
    children:ReactNode
}

export function StackCards({ children }:StackCardsProps) {
    return (
        <Stack
            spacing={12}
            align="start"
            w="40%"
        >
            {children}
        </Stack>
    )
}