import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Modal from '../../../components/form/modal/Modal'
import { ICON } from '../../Icons'

const EndingModal = ({ending, endingHandler}) => {
  const {endingInfo} = useSelector(state=>state.gameSlice)

  return (
    <Modal width='628px' height='438px' modal={ending}>
      <StGameEndingWrapper>
        <StRankContainer>
          <StGameOverImg src={ICON.RankGameOver} alt="게임오버"></StGameOverImg>
          <StUserContainer>
            <StRankBox one={true}>
              <img src={ICON.RankOne} alt="1등"/>
              <StNick>{endingInfo[0].nickName}</StNick><StAdd>+100</StAdd>
              <StScore>{endingInfo[0].ranking}</StScore>
            </StRankBox>
            <StRankBox>
              <img src={ICON.RankSecond} alt="2등"/>
              <StNick>{endingInfo[1].nickName}</StNick><StAdd>+100</StAdd>
              <StScore>{endingInfo[1].ranking}</StScore>
            </StRankBox>
            {endingInfo[2]?
            <StRankBox>
              <img src={ICON.RankThird} alt="3등"/>
              <StNick>{endingInfo[2].nickName}</StNick><StAdd>+100</StAdd>
              <StScore>{endingInfo[2].ranking}</StScore>
            </StRankBox>:<StRankNullBox/>}
            {endingInfo[3]?
            <StRankBox>
              <img src={ICON.RankForth} alt="4등"/>
              <StNick>{endingInfo[3].nickName}</StNick><StAdd>+100</StAdd>
              <StScore>{endingInfo[3].ranking}</StScore>
            </StRankBox>:<StRankNullBox/>}
          </StUserContainer>
          <button onClick={endingHandler}>게임 로비로 돌아가기</button>
        </StRankContainer>
      </StGameEndingWrapper>
    </Modal>
  )
}

export default EndingModal

const StGameEndingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  width: 628px;
  height: 438px;
`
const StRankContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  `
const StUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 20px 0;
`
const StRankBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 468px;
  height: 40px;
  border-radius: 4px;
  border: ${({one})=>{
    return one?'1px solid black':'1px solid #ddd'
  }};
  background-color: ${({one})=>{
    return one?'#ffdf24':'#f1f1f1'
  }};
`
const StRankNullBox = styled.div`
  width: 468px;
  height: 40px;
  border: none;
  background-color: none;
`
const StGameOverImg=styled.img`
  width: 220px;
  height: 102px;
  object-fit: contain;
`
const StNick = styled.span`
  
`
const StAdd = styled.span`
    
`
const StScore = styled.span`
  
`