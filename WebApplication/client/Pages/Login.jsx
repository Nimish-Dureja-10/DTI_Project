import styled from 'styled-components';
import {mobile} from "../responsive";
import {useState} from "react"
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center; 
    background:url("https://assets.teenvogue.com/photos/57dc0fe5046b3a2e2a73633c/master/pass/london-markets.jpg");  
    object-fit:cover;
    background-size:cover;
    ${'' /* opacity:0.8; */}

`

const Wrapper = styled.div`
   width:30%;
   padding:20px;
   background-color:#F0F8FF;
   ${mobile({width:"75%"})}
`

const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`

const Form = styled.form`
    display:flex;
    flex-direction:column;
`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:15px 0;
    padding:10px;
`

const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    margin-bottom: 10px;
    background-color:teal;
    color:white;
    cursor:pointer;
    &:disabled{
      color:green;
      cursor:not-allowed;
    }
`

const Link = styled.a`
    margin:5px 0;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`

const Error = styled.span`
  color:red;
`

const Login = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching,error} = useSelector((state)=>state.user);

  const handleClick = (e) => {
    e.preventDefault(); 
    login(dispatch,{username,password});
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
            <Input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
            {error && <Error>Something is wrong...</Error>}
            <Link>DIDN'T REMEMBER YOUR PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
