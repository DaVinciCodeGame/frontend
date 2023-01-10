import React from "react";
import styled from "styled-components";
import RoomContents from "./roomListDetail/RoomContents";

const RoomList = () => {
  return (
    <RoomWrapper>
      <RoomHeader>
        <RoomLists>방 리스트</RoomLists>
      </RoomHeader>
      <RoomFunc>
        <OpenRoom>
          <input type="checkbox" id="standby" />
          <label htmlFor="standby"> 대기</label>
        </OpenRoom>
        <PrivateRoom>
          <input type="checkbox" id="privacyControl" />
          <label htmlFor="privacyControl"> 비공개</label>
        </PrivateRoom>
        <SearchRoomBar>
          <SearchBarStyle type="text" placeholder="Search.." />
        </SearchRoomBar>
        <RefreshBtn type="submit">새로고침</RefreshBtn>
      </RoomFunc>
      <RoomContents></RoomContents>
      <BotButtons>
        <CreateRoomBtn>방 만들기</CreateRoomBtn>
        <InstantStart>바로시작</InstantStart>
      </BotButtons>
    </RoomWrapper>
  );
};

const RoomWrapper = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 650px;
  height: 766px;
  left: 658px;
  top: 68px;
  z-index: 20;

  border: 1px solid black;
  border-radius: 12px;
`;

const RoomHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 40px;
  left: 650px;
  top: 68px;
  background: #333333;
  border-radius: 12px 12px 0px 0px;
`;

const RoomLists = styled.p`
  font-size: 20px;
  color: white;
`;

const RoomFunc = styled.div`
  width: 650px;
  height: 58px;
  left: 658px;
`;

const OpenRoom = styled.div`
  position: relative;
  width: 70px;
  height: 26px;
  left: 20px;
  top: 20px;
  padding: 4px;
  border: 1px solid black;
  border-radius: 4px;
`;
const PrivateRoom = styled.div`
  position: relative;
  width: 80px;
  height: 26px;
  left: 100px;
  top: -6px;
  padding: 4px;
  border: 1px solid black;
  border-radius: 4px;
`;
const SearchRoomBar = styled.div`
  position: relative;
  top: -35px;
  left: 60px;
`;
const SearchBarStyle = styled.input`
  width: 300px;
  height: 34px;
`;
const RefreshBtn = styled.button`
  position: relative;
  top: -70px;
  left: 260px;
  padding: 6px;
  border-radius: 4px;
`;

const BotButtons = styled.div`
  position: relative;
  width: 100%;
  top: 8px;
  border-top: 1px solid black;
`;

const CreateRoomBtn = styled.button`
  position: relative;
  width: 130px;
  height: 44px;
  top: 20px;
  left: 150px;
  opacity: 0.4;
  border: 1px solid #222222;
  border-radius: 6px;
`;
const InstantStart = styled.button`
  position: relative;
  width: 130px;
  height: 44px;
  top: 20px;
  left: 160px;
  border-radius: 6px;
  background: #222222;
  color: white;
`;

export default RoomList;
