import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <span>상호 : 영주부석사아래 가족농원 | </span>
          <span>대표 : 장두영 | </span>
          <span>전화 : 010-6215-1060 </span>
        </FooterContent>
        <FooterContent>
          <span>주소 : 경상북도 영주시 부석면 봉황산로78번길 10-1 | </span>
          <span>사업자 등록번호 : 113-92-01391 | </span>
          <span>통신판매 : 제 2022-경북영주-0097호 </span>
        </FooterContent>
        <FooterContent>
          <span>ⓒ 2021 영주부석사아래 가족농원 All rights reserved </span>
        </FooterContent>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  margin: 0 30px 0 30px;
  border-top: 2px solid black;
  position: fixed;
  bottom: 8px;
`;

const FooterContent = styled.div`
  margin: 5px 0 5px 0;
`;
export default Footer;
