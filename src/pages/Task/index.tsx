import React from 'react'
import { styled } from 'styled-components'
import { CenterPortraitContainer } from '../../components/VideoFeed/common-components'

export const Task = (props) => {

  return(
    <Container>
      <h1>Example Task </h1>
    </Container>
   )
}


const Container = styled(CenterPortraitContainer)`
  color: white;
  background: blue;
`
