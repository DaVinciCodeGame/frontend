import styled from "styled-components";
import Header from "../../components/common/elements/Header";
import UsersBox from "./ele/UsersBox";
import CenterBox from "./ele/CenterBox";
import Chat from "./ele/chat/Chat";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { io } from "socket.io-client";
import background from "../../assets/images/background.png";
import myUserBackground from "../../assets/images/myUserBackground.png";
import { eventName } from "../../helpers/eventName";
import { useDispatch, useSelector } from "react-redux";
import { setInit, setUsers } from "../../redux/modules/gameSlice";
import MyBox from "./ele/MyBox";
const userId = Math.floor(Math.random() * 100);
const Game = () => {
  const [msgList, setMsgList] = useState([]);
  const { roomId } = useParams();
  const socketRef = useRef();
  const { users,turn } = useSelector((state) => state.gameSlice.gameInfo);
  const myInfo = users.filter((user) => user.userId === userId);
  const others = users.filter((user) => user.userId !== userId);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const initHandler = ()=>{
    dispatch(setInit())
    socketRef.current.emit(eventName.ROOMOUT)
    navigate('/lobby')
  }
  const preventGoBack = (e)=>{
    e.preventDefault()
    const answer = window.confirm(
      "로비로 돌아가면 패배한 것으로 처리됩니다. 그래도 진행하시겠습니까?"
      );
      if (answer){
        initHandler()
      }
      else window.history.pushState(null, "", window.location.href);
    }
  const beforeUnloadHandler = (e) => {
    e.preventDefault();
    initHandler()
  };
  const preventReloadHandler = (e)=>{
    if(e.keyCode===116||(e.keyCode===82&&(e.ctrlKey||e.metaKey))){
      e.preventDefault()
      const answer = window.confirm('새로고침을 진행하면 패배처리되며 로비로 이동됩니다. 진행하시겠습니까?')
      if(answer){
        initHandler()
      }else return
    }
  }
  const createdAt = new Date().toLocaleString();
  useEffect(() => {
    document.onkeydown=preventReloadHandler
    window.addEventListener('beforeunload',beforeUnloadHandler)
    window.history.pushState(null, "", window.location.href);
    window.addEventListener('popstate', preventGoBack)
    socketRef.current = io.connect(process.env.REACT_APP_SERVER);
    socketRef.current.emit(eventName.JOIN, userId, roomId, (usersInRoom) => {
      dispatch(setUsers(usersInRoom));
    });
    socketRef.current.on(eventName.RECEIVE_MESSAGE, (msg) => {
      const myMsg = { msg, mine: false, createdAt };
      setMsgList((prev) => [...prev, myMsg]);
    });
    return () => {
      document.onkeydown=null
      window.removeEventListener('beforeunload', beforeUnloadHandler)
      window.removeEventListener('popstate', preventGoBack)
      socketRef.current.emit(eventName.ROOMOUT);
      dispatch(setInit())
    };
  }, []);

  return (
    <StWrapper>
      <Header />
      <StContainer>
        <StPeerWrapper>
          <UsersBox user={others[0] ? others[0] : null} turn={turn} userId={userId}/>
          <UsersBox user={others[1] ? others[1] : null} turn={turn} userId={userId}/>
          <UsersBox user={others[2] ? others[2] : null} turn={turn} userId={userId}/>
        </StPeerWrapper>
        <CenterBox roomId={roomId} socket={socketRef} userId={userId} />
        <StMyBoxWrapper>
          <StMyBoxContainer>
            <MyBox user={myInfo[0] ? myInfo[0] : null} />
          </StMyBoxContainer>
          <Chat
            roomId={roomId}
            socket={socketRef}
            msgList={msgList}
            setMsgList={setMsgList}
          />
        </StMyBoxWrapper>
      </StContainer>
    </StWrapper>
  );
};

export default Game;

const StWrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
  background-color: #2b2b2b;
`;
const StPeerWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
const StContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const StMyBoxWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 9px;

  display: flex;
  justify-content: space-between;
`;
const StMyBoxContainer = styled.div`
  position: relative;
  height: 100%;
  width: 714px;
  background-image: url(${myUserBackground});

  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  border: solid 1px #111;
  background-color: #eee;
`;
