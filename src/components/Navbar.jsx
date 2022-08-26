import React from "react";
import { Container, Box, Flex ,Link} from "@chakra-ui/react";
import { ImStarEmpty } from "react-icons/im";
import { TbYoga } from "react-icons/tb";
import { GiCycling } from "react-icons/gi";
import { GiBoatFishing } from "react-icons/gi";
import { MdRecycling } from "react-icons/md";
import { GiTrojanHorse } from "react-icons/gi";
import { FaHollyBerry } from "react-icons/fa";
import { GiRunningNinja } from "react-icons/gi";
import { Link as RouterLink, useNavigate } from "react-router-dom";

 export class Header extends React.Component{

  render() {
    return (
      <Container maxW="100%" border={"1px"} p="0px" m={"0px"}>
        <Flex
          justifyContent="space-between"
          bg={"#2e2e2e"}
          width={"100%"}
          p={"2rem"}
          borderBottom="4px solid black"
        >
          <ImStarEmpty size={"100px"} color="white" />
          <TbYoga size={"100"} color="white" />
          <GiCycling size={"100"} color="white" />
          <MdRecycling size={"100"} color="white" />
          <GiTrojanHorse size={"100"} color="white" />
          <TbYoga size={"100"} color="white" />
          <GiBoatFishing size={"100"} color="white" />
          <FaHollyBerry size={"100"} color="white" />
          <GiRunningNinja size={"100"} color="white" />
        </Flex>
        <Box
          width="100%"
          bg={"#2e2e2e"}
          borderBottom="8px solid grey"
          textAlign="center"
        >
          <Flex
            justifyContent="space-between"
            margin="auto"
            color={"white"}
            padding="2rem"
            width="45%"
            bg={"#2e2e2e"}
            textAlign="center"
            alignItems={"center"}
          >
            <Link as={RouterLink} to="/">
              Home
            </Link>
            <Link as={RouterLink} to="/about">
              About
            </Link>
            <Link as={RouterLink} to="/contact">
              Contact
            </Link>
            <Link as ={RouterLink} to ="/help">Help</Link>
          </Flex>
        </Box>
      </Container>
    );
  }
}