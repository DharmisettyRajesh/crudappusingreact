import React from "react";
import { useState ,useEffect} from "react";
import {useHistory} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify"; 
import "./loginpage.css";
import { Card } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import {useStateValue} from '../util/Stateprovider';
import Spinner from '../util/Spinner';
const Login = () => {
  useEffect(()=>{
    document.title="Login"
  },[])
  const [isLoading,setIsLoading]=useState(false);
  let [input1, setInput1] = useState([]);
  let [input2, setInput2] = useState([]);
  let [touched1,setTouched1] = useState(false);
  let [touched2,setTouched2] = useState(false);
  const [,dispatch] =useStateValue();
  let history=useHistory();
  const setUserInput1 = (e) => {
    setInput1(e.target.value);
  };
  const setUserInput2 = (e) => {
    setInput2(e.target.value);
    
  }; 
  const setUserTouched1=(e) => {
    setTouched1(true);
  }
  const setUserTouched2= (e) => {
    setTouched2(true);
  }
  const handleSubmit23 =(e) => {
   
    if (input1 ===null){
      console.log("please enter username");
    } else if (input2 ==null) {
      console.log("please enter password");
    } else { 
           setIsLoading(true);
          const options={
            method:'POST',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify({Email:input1,Password:input2
            })
          }; 
          
            
           fetch('http://localhost:2614/user/login',options).then(
             async response => {
               const data = await response.json();
               if(!response.ok) 
               {
                 toast.error("Something went wrong")
                 setIsLoading(false);
                 return;
               } 
               console.log(data);
               dispatch({
                type:'SETUSER',
                user:'Hello',
                token:data.token
              }) 
              localStorage.setItem("user",JSON.stringify(data));
              setIsLoading(false);
              toast.success("Registered");
              history.push("/");
             }
           ).catch(err=>{
             toast.error("Something went wrong please try again ")
            setIsLoading(false);
             console.log(err);
           })    
    }
  };

  return (
    <React.Fragment> 
    <ToastContainer />
    {isLoading && <Spinner asOverlay />}
    {!isLoading && <div className="login-background-style">
    <div className="login-outer-style">
      <Card className="text-center">
        <Card.Header>Login</Card.Header>
        <Form  >
          <Form.Group className="mb-3 input-style" controlId="formBasicEmail" onBlur={(e)=>setUserTouched1(e)} onInput={e=>setUserInput1(e)}>
            <Form.Label>Email address</Form.Label>
            <Form.Control className={`${touched1?`${input1.length <= 4?"inputstyle":"inputstyle1"}`:""}`} type="email" placeholder="Enter email" />
          { touched1 && input1.length<=4 && <Form.Text className="text-muted">
          <div className="errmsg">  Please enter a  email address </div>
            </Form.Text> }
          </Form.Group>

          <Form.Group className="mb-3 input-style1" controlId="formBasicPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control className={`${touched2?`${input2.length <= 4?"inputstyle":"inputstyle1"}`:""}`} type="password" placeholder="Password"  onBlur={(e)=>setUserTouched2(e)} onInput={e=>setUserInput2(e)} />
            {touched2 && input2.length <=3 
             && <Form.Text className="text-muted ">
              <div className="errmsg"> Please enter a password</div>
            </Form.Text> }
          </Form.Group>
          
          <Button disabled={input1.length<=4 || input2.length<=3}   variant="primary" onClick={(e)=>handleSubmit23(e)} type="button">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
    </div>}
    </React.Fragment>
  );
};
export default Login;
