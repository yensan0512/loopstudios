import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
 height:100vh;
 width:100vw;
`;

const Container = styled.div`
  display:flex;
  margin-left:150px;
  margin-top:100px;
`;

const Img = styled.div`
  gap:10px;
  height:100vh;
  width:100vw;
`;


function Footer() {

  return (

    <Wrapper>
      <Container>
        <Img></Img>
        <Img></Img>
        <Img></Img>
        <Img></Img>
      </Container>
    </Wrapper>
  );
}

export default Footer;