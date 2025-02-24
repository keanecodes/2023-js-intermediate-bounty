import styled from "styled-components";
import Sheet from 'react-modal-sheet';

const { Container, Header, Content, Backdrop } = Sheet

export const CenterPortraitContainer = styled.div`
  height: 75vh;
  min-width: 500px;
  width: 25vw;
  max-width: 30vw;
  border-radius: 35px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: fadein 1s;
  @media screen and (max-width: 500px) {
    margin: 0;
    min-width: 95%;
    height: 90%;
    justify-content: center;
    border-radius: 0 0 35px 35px;
  }
`

export const SidebarIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  margin-top: 5px;
  
  & p {
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
  }
`

export const UserProfile = styled.img`
  border-radius: 50%;
  border: #fff 2px solid;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 35px; 
  height: 35px; 
  margin: 5px 1rem 25px 5px;
  color: #616161;
`

export const BottomSheet = styled(Sheet)`
  margin: 0 auto;
  min-width: 500px;
  width: 25vw;
  max-width: 30vw;
`;

export const BottomSheetBoilerplate = ({children, onClickAway}) => (
  <>
    <Container>
      <Header/>
      <Content>
        {children}
      </Content>
    </Container>
    <Backdrop onClick={onClickAway}/>
  </>
)