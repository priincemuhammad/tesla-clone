import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import carInfo from "./carInfo.json";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "react-reveal/Fade";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Header = () => {
  const [showMenu, setMenu] = useState(false);
  const refMenu = useRef(null);
  showMenu ? disableBodyScroll(document) : enableBodyScroll(document);
  useEffect(() => {
    return document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!refMenu.current.contains(e.target)) {
      setMenu(false);
    }
  };

  return (
    <Container>
      <Fade bottom>
        <a href="#">
          <img src="./images/logo.svg" />
        </a>
      </Fade>
      <Fade bottom>
        <Menu>
          {carInfo &&
            carInfo.map((carInfo, index) => {
              return (
                <a href="#" key={carInfo.id}>
                  {carInfo.title}
                </a>
              );
            })}
        </Menu>
      </Fade>
      <Fade bottom>
        <Rightmenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
          <a href="#">
            <CustomMenu onClick={() => setMenu(!showMenu)} />
          </a>
        </Rightmenu>
      </Fade>
      <Mobilemenu show={showMenu} ref={refMenu}>
        <Closemenu>
          <CustomClose onClick={() => setMenu(!showMenu)} />
        </Closemenu>
        <li>
          <a href="#">MODEL S</a>
        </li>
        <li>
          <a href="#">MODEL 3</a>
        </li>
        <li>
          <a href="#">MODEL X</a>
        </li>
        <li>
          <a href="#">MODEL Y</a>
        </li>
        <li>
          <a href="#">Solar Roof</a>
        </li>
        <li>
          <a href="#">Solar Panels</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Demo Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
      </Mobilemenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 30px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  a {
    margin: 0 10px;
    font-size: 16px;
    font-weight: 600;
    flex-wrap: nowrap;
    text-transform: uppercase;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Rightmenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 30px;
  }
  a {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    flex-wrap: nowrap;
    text-transform: uppercase;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const Mobilemenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  width: 300px;
  padding: 20px;
  z-index: 100;
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 600;
  }
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
`;

const Closemenu = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: end;
`;

const CustomClose = styled(CloseIcon)`
  font-size: 30px !important;
  cursor: pointer;
`;
