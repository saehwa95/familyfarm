import React from "react";
import styled from "styled-components";
import header_logo from "../images/header_logo.jpg"

const Header = () => {
  return (
    <>
      <MainHeader>
        <img
          src={header_logo}
          alt=""
          style={{
            width: "185px",
            height: "185px",
            marginTop: "1px",
            borderRadius: "75px",
          }}
        ></img>
      </MainHeader>
    </>
  );
};
const MainHeader = styled.div`
width: 100%;
height: 200px;
background-color: #8F1116;
justify-content: center;
align-items: center;
display: flex;
`;

export default Header;
