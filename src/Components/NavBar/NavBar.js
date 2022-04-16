import styled from "styled-components";
import MobileNavigation from "./MobileNav";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const closeIcon = (
    <IoIosArrowForward
      size="40px"
      color="#27c498"
      onClick={() => setOpen(!open)}
    />
  );
  const openIcon = (
    <IoIosArrowBack
      size="40px"
      color="#27c498"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <Nav>
      <Logo className="text-align-text align-items-center justify-content-center">
        <a href="/home">
          <img src="/assets/Watermark-Light.png" alt="Parjanya Modi" />
        </a>
      </Logo>
      <NavMenu>
        <a href="/home">
          <span> Home </span>
        </a>
        <a href="/about">
          <span> About </span>
        </a>
      </NavMenu>
      <MobiNav>
        {open ? closeIcon : openIcon}
        {open && <MobileNavigation />}
      </MobiNav>
    </Nav>
  );
};
const MobiNav = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;
const Nav = styled.nav`
  @media (min-width: 992px) {
    padding: 0 8% 0;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }
  @media (max-width: 992px) {
    padding: 0 5% 0;
    position: relative;
    flex-flow: row nowrap;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }
`;

const Logo = styled.div`
  @media (min-width: 992px) {
    padding: 0;
    width: 250px;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height: 70px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      width: 250px;
    }
  }
  @media (max-width: 992px) {
    padding: 0;
    width: 200px;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height: 70px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      width: 100%;
    }
  }
`;

const NavMenu = styled.div`
  @media (min-width: 992px) {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: 0px;
    margin-left: 25px;
    a {
      display: flex;
      text-decoration: none;
      align-items: center;
      padding: 0 12px;
      span {
        color: #27c498;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 0.5px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        transition: 0.3s;
      }
      &:hover {
        span {
          color: #ffffff;
        }
      }
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export default NavBar;
