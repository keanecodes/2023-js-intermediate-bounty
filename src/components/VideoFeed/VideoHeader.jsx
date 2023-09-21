import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

const VideoHeader = (props) => {
  const {muted, setMuted, paused, onVideoPress} = props
  return (
    <VideoTopHeader>
      <Icon 
        icon={paused ? faPlay : faPause}
        onClick={onVideoPress}
      />
      <Icon 
        icon={ muted ? faVolumeMute : faVolumeHigh}
        onClick={() => setMuted(!muted)}
      />
    </VideoTopHeader>
  );
};

const VideoTopHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  background: transparent;
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`

export default VideoHeader;
