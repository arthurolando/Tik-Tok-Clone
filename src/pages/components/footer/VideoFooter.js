import React from "react"
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
        <div className="videoFooter-text">
            <h3>@{name}</h3>
            <p>{description}</p>
            <div className="videoFooter-music">
                <MusicNoteIcon />
                <div className="videoFooter-music-name">
                    <p>{music}</p>
                </div>
            </div>
        </div>
        <img
            className="videoFooter-record"
            alt="Imagem de um vinil girando"
            src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
        />
    </div>
  )
}

export default VideoFooter