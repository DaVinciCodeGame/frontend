import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/elements/Header";
import Video from "../../components/form/video/Video";
import Card from "./ele/Card";
import Peer from "simple-peer";
import { socketId } from "../../helpers/socket";


const Game = ({peers}) => {
    const userVideo = useRef();
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: {  width:' 354.82px',height: '231.89px'}, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
      })
    }, [])
  const roomData = [
    {
      userId: 4,
      gameSids: "12D73jwD0ioJeJLGAAAD",
      cards: [
        { color: "white", value: 1 },
        { color: "white", value: null },
        { color: "white", value: 3 },
      ],
    },
    {
      userId: 1,
      gameSids: "12D73jwD0ioJeJLGAAAD",
      cards: [
        { color: "black", value: null },
        { color: "black", value: 2 },
        { color: "black", value: null },
      ],
    },
    {
      userId: 2,
      gameSids: "12D73jwD0ioJeJLGAAAD",
      cards: [
        { color: "black", value: null },
        { color: "black", value: null },
        { color: "black", value: 6 },
      ],
    },
    {
      userId: 3,
      gameSids: "12D73jwD0ioJeJLGAAAD",
      cards: [
        { color: "white", value: 4 },
        { color: "white", value: 5 },
        { color: "white", value: null },
        { color: "white", value: null },
      ],
    },
  ]
  console.log(peers[0])
  return (
    <>
      <Header />
      <Container>
        <OtherUsers>
          <OtherUser>
            <UserInfo>
              {peers[0]?
               <Video peer={peers[0]} game={true}/>:
               <Camera></Camera>
              }
              <SelectBtn>선택</SelectBtn>
            </UserInfo>
            <NickName>참여자2</NickName>
            <CardArea>
              {roomData[1]?.cards.map((el,i)=><Card key={`candidate1${i}`} card={el}/>)}
            </CardArea>
          </OtherUser>
          <OtherUser>
            <UserInfo>
              {/* {peers[1]?
               <Video peer={peers[1]} game={true}/>:
               <Camera></Camera>
              } */}
              <SelectBtn>선택</SelectBtn>
            </UserInfo>
            <NickName>참여자2</NickName>
            <CardArea>
              {roomData[2]?.cards.map((el,i)=><Card key={`candidate1${i}`} card={el}/>)}
            </CardArea>
          </OtherUser>
          <OtherUser>
            <UserInfo>
              {/* {peers[2]?
               <Video peer={peers[3]} game={true}/>:
               <Camera></Camera>
              } */}
              <SelectBtn>선택</SelectBtn>
            </UserInfo>
            <NickName>참여자2</NickName>
            <CardArea>
              {roomData[2]?.cards.map((el,i)=><Card key={`candidate1${i}`} card={el}/>)}
            </CardArea>
          </OtherUser>
        </OtherUsers>

        <CardBox>
          <OnGoingStatus>참여자1이 진행중입니다.</OnGoingStatus>
          <MiddleField>
            <GameText>가져올 타일을 선택 해주세요!</GameText>
            <StBox>
            </StBox>
          </MiddleField>
        </CardBox>
        <Footer>
          <Left>
            <StyledVideo muted ref={userVideo} autoPlay playsInline />
              {roomData[0]?.cards.map((el,i)=><Card key={`candidate1${i}`} card={el}/>)}
            <BtnList>
              <button className="material-symbols-outlined">mic</button>
              <div>|</div>
              <button className="material-symbols-outlined">videocam_off</button>
              <div>|</div>
              <button className="material-symbols-outlined">
                video_camera_front
              </button>
            </BtnList>
          </Left>
          <Right>
            <Chat>
              <Chatting>
                <div>사용자1</div>
                <div>안녕하세요, 레디 부탁합니다</div>
              </Chatting>
              <Chatting>
                <div>사용자2</div>
                <div>넵 레디요~</div>
              </Chatting>
            </Chat>
            <InputArea>
              <Input></Input>
              <InputBtn>보내기</InputBtn>
            </InputArea>
          </Right>
        </Footer>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  /* gap: 10px; */
`;

const OtherUsers = styled.div`
  width: 100%;
  height: 214px;
  display: flex;
  justify-content: space-between;
`;

const OtherUser = styled.div`
  width: 353px;
  height: 100%;
  background-color: #ebebeb;
  padding: 20px;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Camera = styled.div`
  width: 172px;
  height: 107px;
  border: 1px solid green;
`;
const StyledVideo = styled.video`
  object-fit: cover;
  width: 180px;
  height: 120px;
  border-radius: 6px;
`;

const SelectBtn = styled.button`
  border: 1px solid #888888;
  border-radius: 6px;
  width: 55px;
  height: 31px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888888;
`;

const NickName = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1b1b1b;
  margin-top: 6px;
  margin-bottom: 13px;
`;

const CardArea = styled.div`
  width: 100%;
  height: 34px;
  gap: 4px;
  display: flex;
`;

/////////// 유저들 칸

const CardBox = styled.div`
  height: 344px;
  border: 1px solid #c2c2c2;
  width: 100%;
  margin-top: 8px;
`;

const OnGoingStatus = styled.div`
  background: #eeeeee;
  width: 124px;
  height: 25px;
  color: #555555;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 0;
  top: 0;
`;

const MiddleField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //이거 조절나중에
  margin-top: 30px;
`;

const GameText = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #1b1b1b;
  margin-bottom: 27px;
`;

const StBox = styled.div`
  border: 1px solid green;
  width: 278px;
  height: 183px;
`;

///// 중간끝

const Footer = styled.div`
  width: 100%;
  height: 201px;
  margin-top: 9px;

  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  height: 100%;
  width: 727px;
  background-color: #ebebeb;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BtnList = styled.div`
  width: 130px;
  height: 36px;
  background-color: #e8e8e8;
  border: 1px solid #d2d2d2;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  & div {
    font-size: 16px;
    color: #d2d2d2;
  }
  & button {
    border: none;
    background-color: transparent;
    font-size: 16px;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 339px;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
`;

const Chat = styled.div`
  background-color: #ebebeb;
  width: 100%;
  height: 132px;
  border-radius: 10px 10px 0 0;
  padding: 21px 33px;
`;

const InputArea = styled.div`
  background-color: #e1e1e1;
  width: 100%;
  height: 69px;
  display: flex;
  gap: 4px;
  border-radius: 0 0 10px 10px;
  padding-top: 20px;
  padding-left: 16px;
`;

const Input = styled.input`
  width: 251px;
  height: 32px;
  background: #fbfbfb;
  border-radius: 3px;
  border: none;
  padding-left: 15px;
  font-size: 13px;
  &:focus {
    outline: none;
  }
`;

const InputBtn = styled.button`
  width: 56px;
  height: 32px;
  background-color: #b5b5b5;
  border-radius: 3px;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const Chatting = styled.div`
  font-size: 12px;
  line-height: 140%;
  & div:nth-child(1) {
    font-weight: 700;
  }
  margin-bottom: 15px;
`;

export default Game;
