import React from "react";
import styled from "styled-components";

const LobbyHeader = () => {
  return (
    <>
      <LobbyWrapper>
        <LobbyHead>
          <LogoName>DAVINCI CODE</LogoName>
          <LogoutButton>로그아웃</LogoutButton>
          <MypageButton>마이페이지</MypageButton>
        </LobbyHead>
      </LobbyWrapper>
    </>
  );
};
const LobbyWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LobbyHead = styled.div`
  position: absolute;
  width: 1534px;
  height: 48px;
  border: 1px solid;
  background-color: #f4f4f4;
`;
const LogoName = styled.h1`
  position: absolute;
  width: 144px;
  height: 24px;
  top: 3px;
  left: 228px;
  font-size: 19px;
  font-weight: bold;
`;

const LogoutButton = styled.button`
  position: absolute;
  width: 60px;
  height: 24px;
  top: 12px;
  left: 1166px;
  border-radius: 2px;
`;

const MypageButton = styled.button`
  position: absolute;
  width: 75px;
  height: 24px;
  top: 12px;
  left: 1236px;
  border-radius: 2px;
`;

export default LobbyHeader;
