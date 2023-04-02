import React, { useState } from 'react'
import "./videoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

const VideoSidebar = ({likes, messages, shares}) => {

    const [liked, setLiked] = useState(false)

    function handleLike() {
        setLiked(!liked)
    }

    return (
    <div className='videoSidebar'>
        <div 
            className='videoSidebar__option'
            onClick={handleLike}
        >
            { liked ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' /> }
            <p>{ liked ? likes + 1 : likes }</p>
        </div>
        <div className='videoSidebar__option'>
            <ChatIcon fontSize='large' />
            <p>{messages}</p>
        </div>
        <div className='videoSidebar__option'>
            <ShareIcon fontSize='large' />
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar