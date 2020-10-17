import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CreateIcon from '@material-ui/icons/Create'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import React, {useState,useEffect} from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'
import { useStateValue } from '../StateProvider';


function Sidebar() {
  const [channels, setChannels] = useState([])
  const [{user},dispatch] = useStateValue()
  
  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot => (
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    ))
  },[])
    return (
      <div className='sidebar'>
        <div className='sidebar__header'>
          <div className='sidebar__headerInfo'>
            <h2>Connectica Cloud</h2>
            <h3>
              <FiberManualRecordIcon />
              {user.displayName}
            </h3>
          </div>
          <CreateIcon />
        </div>
        <SidebarOption Icon={InsertCommentIcon} title='Threads' />
        <SidebarOption Icon={InboxIcon} title='Meantions & Reactions' />
        <SidebarOption Icon={DraftsIcon} title='Saved Items' />
        <SidebarOption Icon={BookmarkBorderIcon} title='Channel Browser' />
        <SidebarOption Icon={PeopleAltIcon} title='People & User Groups' />
        <SidebarOption Icon={AppsIcon} title='Apps' />
        <SidebarOption Icon={FileCopyIcon} title='File Browser' />
        <SidebarOption Icon={ExpandLessIcon} title='Show Less' />
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title='Channel' />
        <hr />
        <SidebarOption Icon={AddIcon} addChannelOption title='Add Channel' />
        {channels.map((channel) => (
          <span key={channel.id}>
            <SidebarOption id={channel.id} title={channel.name} />
          </span>
        ))}
      </div>
    );
}

export default Sidebar
