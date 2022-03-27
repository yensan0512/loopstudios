import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width:100vw;
  
`;

const MainImg = styled.div`
  margin-top:200px;
  right:15%;
  background:url(/static/desktop/image-interactive.jpg)center no-repeat;
  weight:40%;
  height:50%;
  position:relative;
  height:50vh;
`;

const HeaderBox = styled.div`
  background:var(--white);
  left:62%;
  position:absolute;
  top:40%;
`;

const Header = styled.h2`
  color:var(--black);
  font-size:40px;
  font-family: 'Alata', sans-serif;
  padding-top:30px;
  letter-spacing:5px;
  padding-left:100px;
`;

const Description = styled.h4`
  color:var(--black);
  font-size:15px;
  padding-left:100px;
  letter-spacing:2px;
  line-height:1.8;
  padding-bottom:40px;
`;


function Container() {

  return (

    <Wrapper>
      <MainImg>

        <HeaderBox>
          <Header>THE LEADER IN INTERACTIVE VR</Header>
          <Description>
            Founded in 2011, Loopstudios has been producing world-class virtual reality project for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
          </Description>
        </HeaderBox>
      </MainImg>

    </Wrapper>
  );
}
export default Container;