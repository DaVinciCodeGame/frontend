import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Navbar>
      <NavbarInside>
        <NavbarStatus>
          <RoomStauts>
            <div>
              <span className="material-symbols-outlined">lock</span>
            </div>
            <RoundStatus>1/4</RoundStatus>
            <RoundStatus>진행</RoundStatus>
          </RoomStauts>
          <RoomName>초보자 환영! 같이 즐기면서 배워요</RoomName>
        </NavbarStatus>
        <ReportButton>
          <span class="material-symbols-outlined">sms_failed</span>버그신고
        </ReportButton>
      </NavbarInside>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.div`
  color: #ffffff;
  background-color: #333333;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5vw;
  font-size: 13px;
`;

const NavbarInside = styled.div`
  width: 1080px;
  display: flex;
  justify-content: space-between;
`;

const RoomName = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-left: 20px;
`;

const NavbarStatus = styled.div`
  display: flex;
  height: 21px;
  align-items: center;
`;

const RoomStauts = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ReportButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 22px;
  background: #6d6d6d;
  border: 1px solid #7c7c7c;
  border-radius: 3px;
  color: #ffffff;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  & span {
    font-size: 12px;
    margin-right: 5px;
  }
  cursor: pointer;
`;

const RoundStatus = styled.div`
  border: 1px solid #aaaaaa;
  border-radius: 999px;
  width: 34px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 10px;
  line-height: 100%;
`;
