import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';

const Video = ({peer, game=false}) => {
  const ref = useRef();
  console.log(peer)
  useEffect(() => {
    peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <StyledVideo game={game} styles playsInline autoPlay ref={ref} />;
};

export default Video


const StyledVideo = styled.video`
  object-fit: cover;
  width:  ${({ game }) => {
    return game ? "172px" : "354.82px"
  }};
  height: ${({ game }) => {
    return game ? "107px" : "231.89px"
  }};
  border-radius: 6px;
`;