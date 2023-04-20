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
            leftBtntext="Custom Order"
            rightBtntext="Existing Inventory"
            backgroundImg={carInfo.image}
          />
        );
      })}
      <Section
        title="Solar for New Roofs"
        discription="Solar Roofs Costs Less than a New Roofs Plus Solar Panels"
        leftBtntext="Order now"
        rightBtntext="Learn more"
        backgroundImg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        leftBtntext="Shop now"
        backgroundImg="Accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;
