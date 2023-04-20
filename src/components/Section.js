import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  discription,
  leftBtntext,
  rightBtntext,
  backgroundImg,
}) => {
  return (
    <Wrapper bgImage={backgroundImg}>
      <Itemheader>
        <Fade bottom>
          <h1> {title}</h1>
          <p>{discription}</p>
        </Fade>
      </Itemheader>
      <Buttons>
        <Fade bottom>
          <ButtonsGroup>
            <LeftButton>{leftBtntext}</LeftButton>
            {rightBtntext && <RightButton>{rightBtntext}</RightButton>}
          </ButtonsGroup>
        </Fade>
        <Fade bottom>
          <Downarrow src="./images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(./images/${props.bgImage})`};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
const Itemheader = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    font-size: 50px;
  }
  p {
    font-weight: 600;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ButtonsGroup = styled.div`
  display: flex;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 250px;
  color: #fff;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 10px;
`;
const RightButton = styled(LeftButton)`
  color: #000;
  opacity: 0.65;
  background: #fff;
`;

const Downarrow = styled.img`
  width: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  @keyframes animateDown {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(3px);
    }
  }
`;
