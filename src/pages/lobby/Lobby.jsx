import React from "react";
import styled from "styled-components";
import LobbyHeader from "../../components/common/elements/LobbyHeader";
import Ranking from "./elements/Ranking";
import RoomList from "./elements/RoomList";

const Lobby = () => {
  return (
    <>
      <LobbyFrame>
        <LobbyHeader />
        <Ranking />
        <RoomList />
        <div></div>
      </LobbyFrame>
    </>
  );
};

const LobbyFrame = styled.div`
  width: 1536px;
  height: 864px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: beige; */
  border: 1px solid black;
`;
export default Lobby;
