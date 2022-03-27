import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components/macro';
import Container from './Container';
import Creation from './Creation';


const Wrapper = styled.div`
   width:100vw;
   height:100vh;
   position:relative;
 `;

const Background = styled.div`
  width:100%;
  height:50%;
  position:relative;
  background:url(/static/desktop/image-hero.jpg)center no-repeat;
  background-size: cover;

`;

const Navigation = styled.div`
  padding-left:40px;
  padding-right:50px;
  padding-top:30px;

`;

const Header = styled.h2`
  font-size:50px;
  color:white;
  position:absolute;
  font-family: 'Alata', sans-serif;
  margin:0px;

 `;

const MenuBar = styled.div`
  display:flex;
  justify-content:flex-end;
  column-gap:20px;
`;

const Menu = styled.h3`
  font-size:25px;
  color:var(--white);
  align-self: flex-end;
  vertical-align: botttom;
  font-family: 'Josefin Sans', sans-serif;
  font-weight:1px;
  font-style: normal;

 

`;

const MainTitle = styled.div`
  margin-top:30px;
  font-size:85px;
  padding:10px 50px 10px 10px;
  border:1px solid var(--white);
  color:var(--white);
  width:48%;
  font-family: 'Barlow', sans-serif;
  letter-spacing:5px;
`;





function App() {
  return (
    <Wrapper>
      <Background>
        <Navigation>
          <Header>loopstudios</Header>
          <MenuBar>
            <Menu>About</Menu>
            <Menu>Careers</Menu>
            <Menu>Events</Menu>
            <Menu>Product</Menu>
            <Menu>Support</Menu>
          </MenuBar>
          <MainTitle>
            IMMERSIVE EXPERIENCES THAT DELIVER
          </MainTitle>
        </Navigation>
        <Container />
        <Creation />
      </Background>
    </Wrapper>
  );
}

export default App;
