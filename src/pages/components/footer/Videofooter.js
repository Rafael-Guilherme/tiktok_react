import React from 'react'
import "./videofooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Videofooter = () => {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>@Rafael</h3>
            <p>Descrição do Vídeo</p>
        </div>
        <div className='videoFooter__music'>
            <MusicNoteIcon className='videoFooter__icon' />
            <div className='videoFooterMusic__text'>
                <p>Título da música</p>
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