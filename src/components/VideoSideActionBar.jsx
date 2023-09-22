import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faBookmark, faCommentDots, faHeart, faTicket } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { SidebarIcon } from './common-components';
import { BottomSheetComment } from './BottomSheetComment';
import { BottomSheetShare } from './BottomSheetShare';

function VideoSideActionBar({ likes, comments, saves, shares, task }) {
  const [interact, setInteract] = useState({
    like: false,
    comment: false,
    save: false,
    share: false,
    task: false
  })
  const iconMap = {
    like: {
      icon: faHeart,
      count: likes,
      color: '#FF0000',
    },
    comment: {
      icon: faCommentDots,
      count: comments,
      color: 'white'
    },
    save: {
      icon: faBookmark,
      count: saves,
      color: '#ffc107'
    },
    share: {
      icon: faShare,
      count: shares,
      color: 'white'
    },
    ...(Boolean(task) && {
      task: {
        icon: faTicket,
        count: 1,
        color: "#d5953b"
      }
    })
  }

  const handleIconClick = (e) => {
    const name = e.currentTarget.dataset.name;
    name !== 'task' &&
      setInteract({
        ...interact,
        [name]: !interact[name]
      })
  }

  const iconColorMap = (item) => {
    return item === 'task'
      // static special color
      ? { color: iconMap[item].color } 
       // dynamic interaction colors
      : { color: interact[item] ? iconMap[item].color : 'white'}
  }

  return (
    <FooterRight>
      {Object.keys(iconMap).map((item, idx) => 
        <SidebarIcon
          key={`sidebar-icon-${idx}`}
          data-name={item}
          onClick={handleIconClick}>
          <Icon 
            icon={iconMap[item].icon} 
            style={iconColorMap(item)}
          />
          <p>{parseFormatCount(item, iconMap[item].count, interact[item])}</p>
        </SidebarIcon>
      )}
      <SpinningRecord>
        <img src="https://static.thenounproject.com/png/934821-200.png" alt='Record Icon' />
      </SpinningRecord>
      <BottomSheetComment
        isOpen={interact['comment']}
        toggleOpen={() => {
          setInteract({ ...interact, ["comment"]: !interact["comment"] })
        }}
      />
      <BottomSheetShare
        isOpen={interact['share']}
        toggleOpen={() => {
          setInteract({ ...interact, ["share"]: !interact["share"] })
        }}
      />
    </FooterRight>
  );
}

const parseFormatCount = (item, count, boolean) => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact'})

  switch(item) {
    case 'like':
    case 'save':
      return formatter.format(parseCount(count) + Number(boolean))
    case 'task':
      return 'Special Quest';
    default:
      return count
  }
}

const parseCount = (count) => {
  if (typeof count === 'string') {
    const multipliers = {k: 1e3, m: 1e6, b: 1e9, t: 1e12};
    const lastChar = count.at(-1).toLowerCase()
    if (lastChar in multipliers) {
      return parseFloat(count) * multipliers[lastChar]
    }
    return parseInt(count);
  }
  return count;
}

const FooterRight = styled.div`
  z-index: 100;
  color: #fff;
  margin-right: 5px;
  margin-bottom: 25px;
`

const Icon = styled(FontAwesomeIcon)`
  width: 35px;
  height: 35px;
  color: white;
  &:hover {
    opacity: 80%;
  }
`

const SpinningRecord = styled(SidebarIcon)`
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
