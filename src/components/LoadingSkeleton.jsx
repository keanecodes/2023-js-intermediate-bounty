import React from 'react';
import styled from 'styled-components';

const LoadingSkeleton = () => {
  return (
    <>
    {
      [...Array(5)].map((_, i) => 
        <div
          key={`skeleton-${i}`}
          style={{display: "flex"}}
        > 
          <div>
            <SkeletonBox style={{ width: '2.5rem', height: '2.5rem' }} />     
          </div>
          <div style={{flex: 1}}>
            <SkeletonBox style={{ width: '30%' }} />
            <SkeletonBox style={{ width: '90%' }} />
            <br/><br/>
          </div>
        </div>
      )
    }
    </>
  );
};

export default LoadingSkeleton;

// credits: https://codepen.io/maoberlehner/pen/bQGZYB
const SkeletonBox = styled.div`
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #DDDBDD;
  margin: 0.5rem;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255,255,255, 0) 0,
      rgba(255,255,255, 0.2) 20%,
      rgba(255,255,255, 0.5) 60%,
      rgba(255,255,255, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

