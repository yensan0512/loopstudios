import React from "react";
import styled from "styled-components/macro";
import Examples from "./Examples";
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
  function Event() {
    alert('Hello!');
    console.log("Fuck you");
  }

  return (
    <Wrapper>
      <Container>
        <Title>
          OUR CREATIONS
        </Title>
        <Button onClick={Event}>SEE ALL</Button>
      </Container>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", margin: "0px", padding: "0 120px", alignItems: "flex-end", gap: "20px" }}>
        <Examples
          photo="static/desktop/image-deep-earth.jpg"
          subtitle="Earth"
        />
        <Examples
          photo="static/desktop/image-night-arcade.jpg"
          subtitle="Night Arcade"
        />
        <Examples
          photo="static/desktop/image-soccer-team.jpg"
          subtitle="Soccer"
        />
        <Examples
          photo="static/desktop/image-grid.jpg"
          subtitle="Grid"
        />
        <Examples
          photo="static/desktop/image-from-above.jpg"
          subtitle="From Above"
        />
        <Examples
          photo="static/desktop/image-pocket-borealis.jpg"
          subtitle="Borealis"
        />
        <Examples
          photo="static/desktop/image-curiosity.jpg"
          subtitle="Curiosity"
        />
        <Examples
          photo="static/desktop/image-fisheye.jpg"
          subtitle="Fish Eye"
        />
      </div>

      <Footer />

    </Wrapper >

  );

}

export default Creation;