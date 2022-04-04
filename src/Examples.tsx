import React from "react";
import styled from "styled-components/macro";

// const Wrapper = styled.div`
//   margin-left:150px;
//   margin-top:100px;
// `;

const Container = styled.div`

 
  margin:0;
  align-self:center;
  
  

`;

const Img = styled.div(({ src }: { src: string }) => `

aspect-ratio: 128/255;
width: 18vw;
height:auto;
margin:0;
position:relative;

background-image: url(${src});
background-repeat: no-repeat;
background-position: center 10px;
background-size: cover;


`);

const Subtitle = styled.h3`
  position:absolute;
  bottom: 2px;
  left: 5px;
  font-size:30px;
  text-align:center;
  margin:0;
  color:var(--white);
`;


function Examples({ photo, subtitle }: {
  photo: string,
  subtitle: string
}) {

  return (

    // <Wrapper>
    < Container >
      <Img src={photo} style={{}}>
        <Subtitle>{subtitle}</Subtitle>
      </Img>
    </Container >
    // </Wrapper >
  );
}

export default Examples;