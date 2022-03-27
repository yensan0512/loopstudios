import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const Wrapper = styled.div`
  height:100vh;
  width:100vw;
`;

const Container = styled.div`
  margin:200px 0px 0px 150px;
  display:flex;
  justify-content:space-between;
  align-items:center;

`;

const Title = styled.div`
  color:var(--black);
  font-size:60px;
  width:50%;
  
  
`;

const Button = styled.div`
  color:var(--black);
  font-size:25px;
  width:200px;
  cursor:pointer;
  border:1px solid var(--black);
  text-align:center;
  padding:5px 0 0 5px;
  margin-right:90px;

`;



function Creation() {

  return (
    <Wrapper>
      <Container>
        <Title>
          OUR CREATIONS
        </Title>
        <Button>SEE ALL</Button>
      </Container>
      <Footer />

    </Wrapper>

  );

}

export default Creation;