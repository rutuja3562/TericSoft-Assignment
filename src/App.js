import "./App.css";
import { Container } from "@chakra-ui/react";
import { Header } from "./components/Navbar";
import { Home } from "./components/Home";
import { AllRoutes } from "./components/AllRoutes";
function App() {
  return (
    <Container className="App" maxWidth={"100%"} m="0px" p={"0px"}>
      <Header />
      <AllRoutes />
    </Container>
  );
}

export default App;
