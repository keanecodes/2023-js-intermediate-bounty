import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { SidebarIcon } from './common-components';

function VideoSideActionBar({ likes, comments, saves, shares }) {
  const [saved, setSaved] = useState(false);

  const navigate = useNavigate()

  return (
    <FooterRight>
      <SidebarIcon>
        {saved ? (
          // Displaying the bookmark icon when saved
          <FontAwesomeIcon
            icon={faBookmark}
            style={{ width: '35px', height: '35px', color: '#ffc107' }}
            onClick={() => setSaved(false)}
          />
        ) : (
          // Displaying the bookmark icon when not saved
          <FontAwesomeIcon
            icon={faBookmark}
            style={{ width: '35px', height: '35px', color: 'white' }}
            onClick={() => setSaved(true)}
          />
        )}
        {/* Displaying the number of saves */}
        <p>{saved ? saves + 1 : saves}</p>
      </SidebarIcon>
      <SidebarIcon
        onClick={() => navigate(`/task`)}
      >
        {/* The share icon */}
        <FontAwesomeIcon icon={faShare} style={{ width: '35px', height: '35px', color: 'white' }} />
        {/* Displaying the number of shares */}
        <p>{shares}</p>
      </SidebarIcon>
      <SpinningRecord>
        <img src="https://static.thenounproject.com/png/934821-200.png" alt='Record Icon' />
      </SpinningRecord>
    </FooterRight>
  );
}

const FooterRight = styled.div`
  z-index: 100;
  color: #fff;
  margin-right: 5px;
  margin-bottom: 20px;
`

const SpinningRecord = styled(SidebarIcon)`
  margin-top: 50px;
  animation: spinTheRecord infinite 5s linear;
  filter: invert(1);
  
  & img {
    width: 35px;
    height: 35px;
    padding: 5px;;
    border-radius: 50px;
    background-color: #b3afaf;
  }

  @keyframes spinTheRecord {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`

export default VideoSideActionBar;
