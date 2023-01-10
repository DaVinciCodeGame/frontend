import React from "react";
import styled from "styled-components";

const IndividualRanking = () => {
  return (
    <IndividualBox>
      <PlayerRanking>1</PlayerRanking>
      <PlayerRankingActive>332,341</PlayerRankingActive>
      <PlayerProfile src="../../../../assets/img/profileIcon.png" />
      <PlayerName>NamePlacement</PlayerName>
      <PlayerOverallScore>12,321,032</PlayerOverallScore>
      <PlayerTier>티어</PlayerTier>
    </IndividualBox>
  );
};

const IndividualBox = styled.div`
  width: 420px;
  height: 72px;
  border: 1px solid black;
`;

const PlayerRanking = styled.span`
  position: relative;
  top: 10px;
  left: -50px;
  font-weight: bold;
  font-size: 20px;
`;
const PlayerRankingActive = styled.span`
  position: relative;
  width: 60px;
  top: 30px;
  left: -40px;
  font-size: 11px;
`;
const PlayerProfile = styled.img`
  position: relative;
  top: 20px;
  left: -10px;
`;

const PlayerName = styled.span`
  position: relative;
  top: 10px;
  left: 20px;
  font-weight: bold;
`;
const PlayerOverallScore = styled.span`
  position: relative;
  top: 30px;
  left: -80px;
`;

const PlayerTier = styled.span`
  position: relative;
  display: inline-block;
  border: 1px solid black;
  top: 20px;
  left: 15px;
`;
export default IndividualRanking;
