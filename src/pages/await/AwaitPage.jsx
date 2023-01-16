import React, { useEffect, useRef, useState } from 'react'
import Chat from './ele/Chat'
import VideoChat from './ele/VideoChat'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import io from "socket.io-client";
import Peer from "simple-peer";
import Game from '../game/Game';
import Video from '../../components/form/video/Video';

const AwaitPage = () => {

  const [peers, setPeers] = useState([]);
  const [videos, setVideos] = useState([])
  const socketRef = useRef();
  const peersRef = useRef([]);
  const roomID = 3
  const userID = 1

  const [start, setStart] = useState()

  useEffect(() => {
    socketRef.current = io.connect(process.env.REACT_APP_SERVER);
    navigator.mediaDevices
      .getUserMedia({ video: {  width:' 354.82px',height: '231.89px'}, audio: true })
      .then((stream) => {
        socketRef.current.emit("joinRtcRoom", roomID, userID);
        socketRef.current.on("all users", (users) => {
          const peers = [];
          users.forEach((userID) => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            });
            peers.push(peer);
          });
          setPeers(peers);
          peers.forEach(peer => {
            const video = {peerID : peer._id, video : <Video peer={peer} game={true}/>}
            setVideos(group => [...group, video])         })
        });

        socketRef.current.on("user joined", (payload) => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });

          setPeers((users) => [...users, peer]);
          const video = {peerID : peer._id, video : <Video peer={peer} game={true}/>}
          setVideos(group => [...group, video]) 
        });

        socketRef.current.on("receiving returned signal", (payload) => {
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });
        
        socketRef.current.on("delete-user",(outUser)=>{
          setPeers(prev =>{
            const result = prev.filter((p) => {
              const deletePeer = peersRef.current.find((p) => p.peerID === outUser)
              console.log(deletePeer)
              return p._id !== deletePeer.peer._id})
          return result});
        })
      });
      return ()=> {
        socketRef.current.emit('disconnect-signal')
        peers.forEach(peer => peer._events.finish())
      }    
    }, []);
    
  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("sending signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("returning signal", { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  return (
    <StWrapper>
      {!start?
      <Game peers={peers}/>
      :<div>
      <VideoChat peers={peers}/>
      <Chat/>
      </div>}
      <button onClick={()=>{
          peers.forEach(peer=>{
          peer.destroyed =true
        })
        setStart(true)}}></button>
    </StWrapper>
  )
}

export default AwaitPage

const StWrapper = styled.div`
  display: flex;
  justify-content: center;
`