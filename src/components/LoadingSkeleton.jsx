import React from 'react';
import styled from 'styled-components';

const LoadingSkeleton = () => {
  return (
    <>
    {
      [...Array(5)].map((_, i) => 
        <div
          key={`skeleton-${i}`}
        >      
          <SkeletonBox style={{ width: '30%' }} />
          <SkeletonBox style={{ width: '90%' }} />
          <SkeletonBox style={{ width: '83%' }} />
          <SkeletonBox style={{ width: '80%' }} />
          <br/><br/>
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
    animation: shimmer 5s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

