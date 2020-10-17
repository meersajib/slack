import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Chat.css'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import db from '../firebase'
import Message from './Message/Message'
import ChatInput from './ChatInput'


function Chat() {
  const [roomDetails, setRoomDetails] = useState(null)
  const [roomMessages, setRoomMessages] = useState([])
  const { roomId } = useParams()
  
  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())))
  }, [roomId])
  console.log(roomMessages)
    return (
      <div className='chat'>
        <div className='chat__header'>
          <div className='chat__headerLeft'>
            <h4 className='chat__channelName'>
              <strong># {roomDetails?.name}</strong> <StarBorderOutlinedIcon />
            </h4>
          </div>
          <div className='chat__headerRight'>
            <p>
              <InfoOutlinedIcon /> Details
            </p>
          </div>
        </div>
        <div className='chat__message'>
          {roomMessages?.map((item) => (
            <span key={item.user}>
              <Message
                user={item.user}
                userImage={item.userImage}
                message={item.message}
                timestamp={item.timestamp}
              />
            </span>
          ))}
        </div>
        <ChatInput channelName={roomDetails?.name} channelId={roomId} />
      </div>
    );
}

export default Chat
