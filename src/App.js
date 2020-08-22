import React from "react";
import styled from "styled-components";
import { Header, Footer } from "./Components/Layout";
import FetchData from './Components/CallApi/FetchData'

const Contianer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
`;

function App() {
  return (
    <Contianer>
      <Header />
      <FetchData />
      <Footer />
    </Contianer>
  );
}

export default App;
