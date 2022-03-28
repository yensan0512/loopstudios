import React from "react";
import styled from "styled-components";

// const Wrapper = styled.div`
//   margin-left:150px;
//   margin-top:100px;
// `;

const Container = styled.div`
  flex:20%;
  // margin-left:10px;
  // // margin-top:100px;
  margin-right:5px;
  height:100vh;
  

`;

const Img = styled.div`
  height:100%;
  width: 100%;
  position:relative;

`;

const Subtitle = styled.h3`
  font-size:30px;
  text-align:center;
  position:absolute;
`;


function Examples({ photo, subtitle }: {
  photo: string,
  subtitle: string
}) {

  return (

    // <Wrapper>
    < Container >
      <Img style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat" }}>
        <Subtitle>{subtitle}</Subtitle>
      </Img>
    </Container >
    // </Wrapper >
  );
}

export default Examples;