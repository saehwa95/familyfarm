import React from "react";
import styled from "styled-components";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import stop from "../images/stop.jpg";

const Shop = () => {
  return (
    <>
      <Header />
      <StopImg>
        <img
          alt=""
          src={stop}
          style={{ width: "300px", height: "400px", marginBottom: "10px" }}
        />
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>
          준비중입니다.
        </span>
      </StopImg>
      <Footer />
    </>
  );
};

const StopImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
`;
export default Shop;
