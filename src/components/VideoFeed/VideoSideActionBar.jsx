import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { SidebarIcon } from './common-components';

function VideoSideActionBar({ shares }) {
  const navigate = useNavigate()

  return (
    <FooterRight>
      <SidebarIcon
        onClick={() => navigate(`/task`)}
      >
        <Icon icon={faShare} />
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

const Icon = styled(FontAwesomeIcon)`
  width: 35px;
  height: 35px;
  color: white;
  &:hover {
    color: #ffc107;
  }
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
