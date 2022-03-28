import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background:var(--black);
  width:100vw;
  height:50vh;
`;

const Container = styled.div`

`;

const Header = styled.h3`
  color:var(--white);
  font-size:50px;
`;

const LogoContainer = styled.div`
  display:flex;
  gap:5px;
`;

const Logo = styled.img`
  cursor:pointer;

`;

const FooterMenuList = styled.div`
  display:flex;
`;

const Menu = styled.h3`
  cursor:pointer;
`;

function Footer() {

  return (
    <Wrapper>
      <Container>

        <Header>LoopStudio</Header>
        <LogoContainer>
          <Logo src="/static/icon-facebook.svg"></Logo>
          <Logo src="/static/icon-twitter.svg"></Logo>
          <Logo src="/static/icon-pinterest.svg"></Logo>
          <Logo src="/static/icon-instagram.svg"></Logo>
        </LogoContainer>

      </Container>

      <FooterMenuList>
        <Menu>About</Menu>
        <Menu>Careers</Menu>
        <Menu>Event</Menu>
        <Menu>Product</Menu>
        <Menu>Support</Menu>
      </FooterMenuList>



    </Wrapper>
  );
}

export default Footer;