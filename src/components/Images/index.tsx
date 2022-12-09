import { Stack } from "@chakra-ui/react"
import Image from "next/image"

interface ImagesProps {
    tam: string
    path: string
    description: string
    width: any
    height: any
}


export function Images({ tam, path, description, width, height }:ImagesProps) {
    return(
        <Stack
            as="picture"
            w={tam}
        >
            <Image src={path} alt={description} width={width} height={height}/>
        </Stack>
    )
}