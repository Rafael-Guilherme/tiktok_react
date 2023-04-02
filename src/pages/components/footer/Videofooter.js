import React from 'react'
import "./videofooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Videofooter = ({name, description, music}) => {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>@{name}</h3>
            <p>{description}</p>
        </div>
        <div className='videoFooter__music'>
            <MusicNoteIcon className='videoFooter__icon' />
            <div className='videoFooterMusic__text'>
                <p>{music}</p>
            </div>
        </div>
            <img
                src='https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/vinil.png?alt=media&token=72a6362d-ca03-4b8b-975e-a4832fdeccff' 
                className='videoFooter__record'
                alt='imagem de um vinil girando'
            
            />
    </div>
  )
}

export default Videofooter