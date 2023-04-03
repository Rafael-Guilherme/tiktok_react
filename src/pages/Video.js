import React, { useRef, useState, useEffect } from "react";
import Videofooter from "./components/footer/Videofooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";
import "./video.css";

function Video({ likes, messages, shares, name, description, music, url }) {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    function handleStart() {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.pause();
                setPlay(false);
            }
            };
        
            window.addEventListener("keydown", handleScroll);
            window.addEventListener("wheel", handleScroll);
        
            return () => {
            window.removeEventListener("keydown", handleScroll);
            window.removeEventListener("wheel", handleScroll);
            };
        }, []);

    return (
        <div className="video">
        <video
            className="video__player"
            ref={videoRef}
            onClick={handleStart}
            loop
            src={url}
        ></video>
        <VideoSidebar likes={likes} messages={messages} shares={shares} />
        <Videofooter name={name} description={description} music={music} />
        </div>
    );
}

export default Video;
