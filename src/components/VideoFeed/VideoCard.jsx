import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import VideoBotInfoBar from "./VideoBotInfoBar";
import VideoSideActionBar from "./VideoSideActionBar";
import VideoHeader from "./VideoHeader";

function VideoCard(props) {
  const { url, username, description, song, shares, likes, saves, comments, profilePic, setVideoRef, autoplay } = props;
  const [muted, setMuted] = useState(true)
  const [paused, setPaused] = useState(false)
  const videoRef = useRef(null);

  useEffect(() => {
    if (autoplay) {
      videoRef.current.play();
    }
  }, [autoplay]);

  const onVideoPress = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setPaused(false)
    } else {
      videoRef.current.pause();
      setPaused(true)
    }
  };

  return (
    <StyledCard>
      <VideoHeader
        muted={muted}
        setMuted={setMuted}
        paused={paused}
        onVideoPress={onVideoPress}
      />
      <Video
        onClick={onVideoPress}
        ref={(ref) => {
          videoRef.current = ref;
          setVideoRef(ref);
        }}
        loop
        muted={muted}
        src={url}
      />
      <BottomControls>
        <div className="footer-left">
          <VideoBotInfoBar username={username} description={description} song={song} profilePic={profilePic} />
        </div>
        <div className="footer-right">
          <VideoSideActionBar likes={likes} shares={shares} comments={comments} saves={saves}/>
        </div>
      </BottomControls>
    </StyledCard>
  );
}

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: fill ;
  width: 100%;
  height: 100%;
`

const BottomControls = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`

const StyledCard = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  display:flex;
  flex-direction: column;

  & video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// just a workaround. ignore this.
// https://github.com/nolimits4web/swiper/issues/4413#issuecomment-1021387492
VideoCard.displayName = "SwiperSlide";

export default VideoCard;
