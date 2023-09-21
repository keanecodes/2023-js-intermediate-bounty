import React from 'react';
import { styled } from 'styled-components';
import { SidebarIcon } from './common-components';

export default function VideoBotInfoBar({ username, description, song, profilePic }) {

  return (
    <FooterContainer>
      <FooterLeft>
        <TextContainer>
          <p>{description}</p>
          <SponsorSection>
            <SidebarIcon>
              {profilePic ? (
                  <UserProfile src={profilePic} alt='Profile' />
                ) : null}
            </SidebarIcon>
            <h3>@{username}</h3>
          </SponsorSection>
          <Ticker>
            {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
            <marquee direction="left" scrollamount="2">
              <span>{song}</span>
            </marquee>
          </Ticker>
        </TextContainer>
      </FooterLeft>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

const FooterLeft = styled.div`
  position: relative;
  color: white;
  flex-grow: 1;
  pointer-events: none;
  display: flex;
  margin-left: 5px;
  text-align: start;
`

const TextContainer = styled.div`
  width: 100%;
  & h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  & p {
    font-size: 14px;
    font-weight: 500;
  }

  & span {
    font-size: 12px;
    font-weight: 400;
    color: #fff;
  }
`

const SponsorSection = styled.div`
  display:flex;
`

const Ticker = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;

  & marquee {
    display: flex;
    align-items: center;
    width: 100%;
  }
`

const UserProfile = styled.img`
  border-radius: 50%;
  border: #fff 2px solid;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 25px;
  width: 45px; 
  height: 45px; 
  color: #616161;
`