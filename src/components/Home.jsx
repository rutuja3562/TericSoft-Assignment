import React, { useEffect } from "react";
import { Container, Heading, HStack ,Flex} from "@chakra-ui/react";
import { SingleComponent } from "./SingleComponent";
import { data } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../Redux/action";

export const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.data);
  useEffect(() => {
    dispatch(FetchData());
  }, []);
  return (
    <Container
      maxWidth="100%"
      bg={"#2e2e2e"}
      ml="-17px"
      pb="1rem"
      position={'absolute'}
    >
      <Heading
        as="h6"
        fontWeight="400"
        size="lg"
        color="white"
        width="13%"
        p="1rem 0 0 0rem"
        m={"0rem 0 1rem 0"}
        textDecoration="underline"
      >
        Heighlights
      </Heading>
      <Flex  flexWrap="wrap" m="0" p="0">
        {product.map((e) => {
          return <SingleComponent key={e.id} prop={e} />;
        })}
      </Flex>
    </Container>
  );
};
