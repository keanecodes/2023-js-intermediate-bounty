import React, { useEffect, useState } from "react";
import Sheet from 'react-modal-sheet';
import styled from "styled-components";
import LoadingSkeleton from "./LoadingSkeleton";
import { BottomSheet, BottomSheetBoilerplate, UserProfile } from "./common-components";

const { Scroller } = Sheet

export const BottomSheetComment = (props) => {
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
      // credits: https://youtu.be/-yIsQPp31L0?si=z2POA_WzCD3Ri2xB&t=2540
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
      <BottomSheetBoilerplate onClickAway={toggleOpen}>
        <Scroller>
          <SheetContent>
            {loading
              ? <LoadingSkeleton/> 
              : <Comments data={comments}/>
            }
          </SheetContent>
        </Scroller>
      </BottomSheetBoilerplate>
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