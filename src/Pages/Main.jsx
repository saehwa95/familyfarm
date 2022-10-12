import React from "react";
import Header from "../Component/Header";
import Nav from "../Component/Nav";
import { FaAppleAlt } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import styled from "styled-components";
import Footer from "../Component/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Nav />
      <MainContainer>
        <ProductContainer>
          <Product>
            <FaAppleAlt
              style={{ width: "200px", height: "300px", color: "8f1116" }}
            />
          </Product>
          <span style={{ color: "#717171", fontSize: "25px" }}>사과</span>
        </ProductContainer>
        <ProductContainer>
          <Product>
            <FaCarrot
              style={{ width: "200px", height: "300px", color: "#Ea7606" }}
            />
          </Product>
          <span style={{ color: "#717171", fontSize: "25px" }}>ABC쥬스</span>
        </ProductContainer>
        <ProductContainer>
          <Product>
            <FaApple
              style={{ width: "200px", height: "300px", color: "8f1116" }}
            />
          </Product>
          <span style={{ color: "#717171", fontSize: "25px" }}>사과쥬스</span>
        </ProductContainer>
      </MainContainer>
      <Footer />
    </>
  );
};
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ProductContainer = styled.div`
  flex-direction: column;
  text-align: center;
`;

const Product = styled.div`
  width: 250px;
  height: 340px;
  border-radius: 40px;
  background-color: white;
  border: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
export default Main;
