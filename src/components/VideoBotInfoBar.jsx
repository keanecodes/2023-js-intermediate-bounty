import React from 'react';
import { styled } from 'styled-components';
import { SidebarIcon, UserProfile } from './common-components';

export default function VideoBotInfoBar({ username, description, song, profilePic }) {

  return (
    <Container>
      <p>{description}</p>
      <FlexWrapper>
        <ProfileMusicSection>
          <UploaderSection>
            <SidebarIcon>
              {profilePic ? (
                  <UserProfile src={profilePic} alt='Profile' />
                ) : null}
            </SidebarIcon>
            <h3>@{username}</h3>
          </UploaderSection>
          {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
          <marquee direction="left" scrollamount="2">
            <span>{song}</span>
          </marquee>
        </ProfileMusicSection>
      </FlexWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  & p {
    font-size: 14px;
    font-weight: 500;
    z-index: 1;
    color: white;
    text-align: start;
    margin-left: 0.5rem;
    width: 90%;
  }
`

const FlexWrapper = styled.div`
  position: relative;
  color: white;
  flex-grow: 1;
  pointer-events: none;
  display: flex;
  margin-left: 5px;
  text-align: start;
`

const ProfileMusicSection = styled.div`
  width: 100%;
  display: inline-flex;
  & h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  & span {
    font-size: 12px;
    font-weight: 400;
    color: #fff;
  }
  & marquee {
    display: inline-flex;
    align-items: flex-end;
    margin-bottom: 0.2rem;
  }
`

const UploaderSection = styled.div`
  display:flex;
  margin-bottom: -2rem;
  margin-right: 1.5rem;
`