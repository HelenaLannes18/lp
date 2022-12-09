import { Stack } from "@chakra-ui/react"
import { ReactNode } from "react"

interface MainPageProps {
    children: ReactNode
}

export function MainPage({children}:MainPageProps) {
    return(
        <Stack
            as="main"
            px={12}
            py={6}
            spacing={32}
        >
            {children}
        </Stack>
    )
}