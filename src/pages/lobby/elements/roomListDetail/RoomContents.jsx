import React from "react";
import styled from "styled-components";
const RoomContents = () => {
  return (
    <RoomContentWrapper>
      <RoomMain>
        <LockOrUnlock alt="" />
        <NumbParticipants>1/4</NumbParticipants>
        <WaitingOrNot>대기</WaitingOrNot>
        <RoomNumber>321</RoomNumber>
        <RoomName>초보자 환영! 같이 배우면서 즐겨요.</RoomName>
        <EnterGame>입장</EnterGame>
      </RoomMain>
    </RoomContentWrapper>
  );
};

const RoomContentWrapper = styled.div`
  width: 650px;
  height: 580px;
`;
const RoomMain = styled.div`
  width: 640px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 50px;
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 6px;
`;
const LockOrUnlock = styled.img``;
const NumbParticipants = styled.span``;
const WaitingOrNot = styled.span``;
const RoomNumber = styled.span``;
const RoomName = styled.div``;
const EnterGame = styled.button``;

export default RoomContents;
