import React from "react";
import styled from "styled-components";
const RoomContents = () => {
  return (
    <StRoomContentWrapper>
      <StRoomMain>
        <StLockOrUnlock alt="" />
        <StNumbParticipants>1/4</StNumbParticipants>
        <StWaitingOrNot>대기</StWaitingOrNot>
        <StRoomNumber>321</StRoomNumber>
        <StRoomName>초보자 환영! 같이 배우면서 즐겨요.</StRoomName>
        <StEnterGame>입장</StEnterGame>
      </StRoomMain>
    </StRoomContentWrapper>
  );
};

const StRoomContentWrapper = styled.div`
  width: 650px;
  height: 580px;
`;
const StRoomMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 640px;
  height: 44px;
  padding: 10px 18px;
  border: 1px solid #dedede;
  border-radius: 6px;
  gap: 50px;
  background: #ffffff;
`;
const StLockOrUnlock = styled.img``;
const StNumbParticipants = styled.span``;
const StWaitingOrNot = styled.span``;
const StRoomNumber = styled.span``;
const StRoomName = styled.div``;
const StEnterGame = styled.button``;

export default RoomContents;
