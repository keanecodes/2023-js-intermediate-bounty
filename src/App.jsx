import React, { useState, useRef, useEffect } from 'react'
import { styled } from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper } from "swiper/react";
import { Mousewheel } from 'swiper/modules';
import VideoCard from './components/VideoCard';
import { CenterPortraitContainer } from './components/common-components';
import { VideoFeed } from './assets/videos';

export const App = () => {
  const [videos, setVideos] = useState([])
  const videoRefs = useRef([]);

  useEffect(() => {
    // Create instances of the VideoFeed class
    const videoFeed = new VideoFeed();
    // Display available videos
    videoFeed.getAvailableVideos();
    setVideos(videoFeed.videos);
  }, []);


  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // Adjust this value to change the scroll trigger point
    };

    // This function handles the intersection of videos
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const videoElement = entry.target;
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // We observe each video reference to trigger play/pause
    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [videos]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  return(
    <CenterPortraitContainer>
      <StyledSwiper 
        direction={'vertical'}
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        {videos.map((video, i) => 
          <VideoCard 
            key={i}
            username={video.username}
            description={video.description}
            song={video.song}
            shares={video.shares}
            likes={video.likes}
            saves={video.saves}
            task={video.task}
            comments={video.comments}
            url={video.url}
            profilePic={video.profilePic}
            setVideoRef={handleVideoRef(i)}
            autoplay={i === 0}
          />
        )}
      </StyledSwiper>
    </CenterPortraitContainer>
  )
}

const StyledSwiper = styled(Swiper)`
	width: 100%;
	height: 100%;
  margin-top: -50px;
`
