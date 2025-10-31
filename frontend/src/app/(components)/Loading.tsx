import { Box } from "@chakra-ui/react"
import { BeatLoader } from "react-spinners"

export function Loading() {
    return (
        <Box h="100vh" w="100vw" display="flex" justifyContent="center" alignItems="center">
            <BeatLoader size={15} color="#0800a5"/>
        </Box>
    )
}