import React from "react";
import {
  Container,
  Image,
  Text,
  Button,
  Heading,
  Flex,
  Box,
} from "@chakra-ui/react";
export const SingleComponent = ({ prop }) => {
  const { height, title, img } = prop;
  return (
    <Container
      maxW={"24%"}
      color="white"
      m="0px"
      p="0px"
      mr="7px"
      height={"400px"}
    >
      <Image src={img} alt={title} width={"100%"} height={"380px"} />
      <Box
        colorScheme="blackAlpha-100"
        position={"relative"}
        bottom={"100px"}
        bg="black"
        p={"0px 10px 10px 10px"}
      >
        <Flex justifyContent={"space-between"} maxW={"100%"} p={"1rem 0"}>
          <Heading as="h5" size="sm">
            {title}
          </Heading>
          <Text>{height}</Text>
        </Flex>
        <Button
          mr="1rem"
          variant={"outline"}
          _hover={{ bg: "whiteAlpha" }}
          _expanded={{ bg: "whiteAlpha" }}
          _focus={{ boxShadow: "whiteAlpha" }}
          focusBorderColor="whiteAlpha"
          colorScheme="whiteAlpha"
          errorBorderColor="whiteAlpha"
          borderRadius="0"
          borderWidth="0.025px"
          bg="whiteAlpha"
          mt="1rem"
        >
          View
        </Button>
        <Button
          variant={"outline"}
          _hover={{ bg: "whiteAlpha" }}
          _expanded={{ bg: "whiteAlpha" }}
          _focus={{ boxShadow: "whiteAlpha" }}
          focusBorderColor="whiteAlpha"
          colorScheme="whiteAlpha"
          errorBorderColor="whiteAlpha"
          borderRadius="0"
          borderWidth="0.025px"
          bg="whiteAlpha"
          mt="1rem"
        >
          More
        </Button>
      </Box>
    </Container>
  );
};
