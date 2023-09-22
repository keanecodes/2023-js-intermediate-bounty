import React, { useEffect, useState } from "react";
import Sheet from 'react-modal-sheet';
import styled from "styled-components";
import SkeletonLoading from "./SkeletonLoading";
import { UserProfile } from "./common-components";

const { Container, Header, Content, Backdrop, Scroller } = Sheet

export const CommentsBottomSheet = (props) => {
  const {isOpen, toggleOpen} = props
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState([])

  const fetchComments = () => {
    try {
      fetch(`https://dummyjson.com/comments`)
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
    isOpen && fetchComments()
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

const BottomSheet = styled(Sheet)`
  margin: 0 auto;
  min-width: 500px;
  width: 25vw;
  max-width: 30vw;
`;

const SheetContent = styled.div`
  height: 55vh;
  padding: 1rem;
`

const CommentsContainer = styled.div`
  display: flex;
  align-items: center;
`