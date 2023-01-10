import React from "react";
import styled from "styled-components";
import IndividualRanking from "./rankingDetail/IndividualRanking";
import { useQuery } from "react-query";
import axios from "axios";
// const maxPostPage = 100;

// async const fetchPosts=()=> {
//   const response = await fetch(`http://localhost:3001/rank`);
//   return response.json();
// }
const fetcher = () => {
  return axios.get("http://localhost:3001/ranking");
};

const Ranking = () => {
  const { data, isLoading, isError, error } = useQuery(["ranking"], fetcher);
  console.log(data?.data);
  const ranker = data?.data;
  //   const myInfo = data?.data[0];
  //   const userInfo = data?.data.filter((data, index) => index !== 0);

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <RankingWrapper>
      <RankingHeader>
        <RankingTitle>게임순위</RankingTitle>
      </RankingHeader>
      <IndividualRanking />
      <PersonalBox>
        <MyRankingTag>내 순위</MyRankingTag>
        {data?.data.map((ranker, i) => (
          <MyRanking key={`my-ranking-${i}`}>{ranker.ranking}</MyRanking>
        ))}
        <MyTier>티어</MyTier>
        <MyRankingActive>1,213,223</MyRankingActive>
        <SectionDivider />
        <MyProfile src="../../../../assets/img/profileIcon.png"></MyProfile>
        <MyOverallScore>6,433,122</MyOverallScore>
        <MyName>UserName</MyName>
      </PersonalBox>
    </RankingWrapper>
  );
};

const RankingWrapper = styled.div`
  position: absolute;
  width: 420px;
  height: 766px;
  left: 228px;
  top: 68px;
  z-index: 20;

  border: 1px solid black;
  border-radius: 12px;
`;

const RankingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 40px;
  left: 228px;
  top: 68px;
  background: #333333;
  border-radius: 12px 12px 0px 0px;
`;

const RankingTitle = styled.p`
  font-size: 20px;
  color: white;
`;

const PersonalBox = styled.div`
  position: relative;
  width: 420px;
  height: 122px;
  left: 80 px;
  top: 515px;
  border-top: 1px solid black;
  border-bottom: 2px;
`;
const MyRankingTag = styled.div`
  position: relative;
  display: inline-block;
  top: 18px;
  left: -95px;
  padding: 5px;
  border: 1.5px solid black;
  border-radius: 12px;
  font-size: 10px;
`;

const MyRanking = styled.span`
  position: relative;
  top: 20px;
  left: -88px;
  font-weight: bold;
`;
const MyRankingActive = styled.span`
  position: relative;
  top: 20px;
  left: -95px;
  font-size: 11px;
`;

const MyTier = styled.span`
  position: relative;
  display: inline-block;
  border: 1px solid black;
  top: 20px;
  left: 140px;
  padding: 4px;
  border-radius: 12px;
`;

const SectionDivider = styled.div`
  position: relative;
  width: 90%;
  top: 30px;
  left: 20px;
  border-top: 1px solid black;
`;
const MyProfile = styled.img`
  position: relative;
  top: 55px;
  left: -80px;
`;
const MyOverallScore = styled.span`
  position: relative;
  top: 70px;
  left: -40px;
`;
const MyName = styled.span`
  position: relative;
  top: 45px;
  left: -110px;
  font-weight: bold;
`;

export default Ranking;
