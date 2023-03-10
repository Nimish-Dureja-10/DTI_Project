import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive";

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})}
`

const Left = styled.div`
    flex:1; 
    display:flex;
    flex-direction:column;
    padding:20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
    margin:20px 0; 
`

const SocialContainer = styled.div`
    display:flex;
     
`

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    margin:20px; 
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
`

const Center =styled.div`
    flex:1; 
    padding:20px;
    ${mobile({display:"none"})}
`

const Title = styled.h3`
    margin-bottom:30px;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`

const Right = styled.div`
    flex:1; 
    padding:20px;
    ${mobile({backgroundColor:"#eee"})}
` 

const ContactItem = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`

const Payment = styled.img`
    width:50%;
`


const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>Traders.</Logo>
          <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
            Odio tempor orci dapibus ultrices in.
          </Desc>
          <SocialContainer>
               <SocialIcon color="3B5999">
                <FacebookIcon/>
               </SocialIcon>
               <SocialIcon color="E4405F">
                <InstagramIcon/>
               </SocialIcon>
               <SocialIcon color="000000">
                <GitHubIcon/>
               </SocialIcon>
               <SocialIcon color="00acee">
                <TwitterIcon/>
               </SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
          <Title>Links!</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man Fashion</ListItem>
              <ListItem>Women Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact!</Title>
          <ContactItem>
            <RoomIcon style={{marginRight:"10px"}} />123,Gutam Buddh Nagar,Greater Noida,India
          </ContactItem>
          <ContactItem>
             <PhoneIcon style={{marginRight:"10px"}} /> +91-8810437211
          </ContactItem>
          <ContactItem>
            <EmailIcon style={{marginRight:"10px"}} />contacttraders14@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
