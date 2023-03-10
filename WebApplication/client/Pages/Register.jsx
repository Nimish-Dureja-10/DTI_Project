import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center; 
    background:url("https://s3.us-east-1.amazonaws.com/co-assets/assets/images/_fbTw/ThredUP_101718_0095.jpg");  
`

const Wrapper = styled.div`
   width:40%;
   padding:20px;
   background-color:lightgray;
   ${mobile({width:"75%"})}
`

const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`

const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0 0;
    padding:10px;
`

const Agreement = styled.span`
    font-size:15px;
    margin:20px 0;
`

const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Agreement>
                By creating an account, I consent to the processing of my
                personal data in accordance with <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREAT ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
