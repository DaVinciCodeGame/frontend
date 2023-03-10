import React from "react";
import styled from "styled-components";
import { IMG } from "../../helpers/image";

const Loading = () => {
  return (
    <StWrapper>
      <StLoding src={IMG.GameLoading} alt="로딩중" />
    </StWrapper>
  );
};

export default Loading;

const StWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StLoding = styled.img`
  width: 570px;
  height: 436px;
`;
