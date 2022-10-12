import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <Category>
        <Link to="Shop" style={{textDecoration: "none"}}>
          <span style={{ marginRight: "20px", color: "gray" }}>SHOP</span>
        </Link>
        <Link to="NOTICE" style={{textDecoration: "none"}}>
          <span style={{ marginRight: "20px", color: "gray" }}>NOTICE</span>
        </Link>
        <Link to="ABOUT" style={{textDecoration: "none"}}>
          <span style={{ marginRight: "20px", color: "gray" }}>ABOUT</span>
        </Link>
        <Link to="LOGIN" style={{textDecoration: "none"}}>
          <span style={{ marginRight: "20px", color: "gray" }}>LOGIN</span>
        </Link>
      </Category>
    </>
  );
};

const Category = styled.div`
  margin: 20px 20px 30px 20px;
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
`
export default Nav;
