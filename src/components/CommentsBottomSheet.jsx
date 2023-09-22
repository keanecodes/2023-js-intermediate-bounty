import React, { useEffect, useState } from "react";
import Sheet from 'react-modal-sheet';
import styled from "styled-components";
import SkeletonLoading from "./SkeletonLoading";
import { BottomSheet, UserProfile } from "./common-components";

const { Container, Header, Content, Backdrop, Scroller } = Sheet

export const CommentsBottomSheet = (props) => {
  const {isOpen, toggleOpen} = props
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState([])

  const fetchComments = (controller) => {
    try {
      fetch(`https://dummyjson.com/comments`, {
        signal: controller.signal
      })
      .then(res => res.json())
      .then(({comments}) => {
        const shuffled = comments
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
            setComments(shuffled)
          });
    } catch (e) {
      console.error(e) 
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      const controller = new AbortController();
      fetchComments(controller)
      return () => controller.abort()
    }
  }, [isOpen])

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={toggleOpen}
      snapPoints={[0.55, 0]}
      detent="content-height"
    >
      <Container>
        <Header/>
        <Content>
          <Scroller>
            <SheetContent>
              {loading
                ? <SkeletonLoading/> 
                : <Comments data={comments}/>
              }
            </SheetContent>
          </Scroller>
        </Content>
      </Container>
      <Backdrop onClick={toggleOpen}/>
    </BottomSheet>
  );
};

const Comments = (props) => {
  const { data } = props
  return(
    <>
      {data.map((post, idx) => 
        <CommentsContainer
          key={`comment-${idx}`}
        >
          <UserProfile src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${post.user.id}`}/>
          <div>
            <h3>{post.user.username}</h3>
            <p>{post.body}</p>
          </div>
        </CommentsContainer>
      )}
    </>
  )
}

const SheetContent = styled.div`
  height: 55vh;
  padding: 1rem;
`

const CommentsContainer = styled.div`
  display: flex;
  align-items: center;
`