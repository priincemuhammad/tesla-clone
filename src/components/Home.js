import React from "react";
import Section from "./Section";
import styled from "styled-components";
import carInfo from "./carInfo.json";

function Home() {
  return (
    <Container>
      {carInfo.map((carInfo, index) => {
        return (
          <Section
            key={carInfo.id}
            title={carInfo.title}
            discription={carInfo.description}
            leftBtntext={carInfo.leftButton}
            rightBtntext={carInfo.rightButton}
            backgroundImg={carInfo.image}
          />
        );
      })}
    </Container>
  );
}

export default Home;

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;
