import { Icon, Stack, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface StackIconsProps {
    as: any
    children: ReactNode
}

export function StackIcons({ as, children }:StackIconsProps) {
    return (
        <Stack
            as="aside"
            align="center"
            w="25%"
            spacing={3}
        >
            <Icon
                as={as}
                fontSize="80px"
                color="#fff"
                fontWeight={"600"}

            />
            <Text
                as="p"
                color="#818181"
                fontSize="20px"
                fontWeight={"600"}
                w="80%"

            >
                {children}
            </Text>
        </Stack>
    )
}