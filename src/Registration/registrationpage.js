import React from "react";
import { useState,useEffect} from "react";


import "./registrationpage.css";
import { Card } from "react-bootstrap";
import { Button, Form } from "react-bootstrap"; 
import { useStateValue} from '../util/Stateprovider';
import { useHistory } from'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
import Spinner from '../util/Spinner';


const Register = () => {
  useEffect(()=>{
    document.title="Register"
  },[]);
  let history=useHistory();
  const [,dispatch]=useStateValue();
  let [input1, setInput1] = useState([]);
  let [input2, setInput2] = useState([]);
  let [input3, setInput3] = useState([]);
  let [input4, setInput4] = useState([]);
  let [input5, setInput5] = useState([]);
  let [input6, setInput6] = useState([]);
  let [input7, setInput7] = useState([]);
  let [touched1, setTouched1] = useState(false);
  let [touched2, setTouched2] = useState(false);
  let [touched3, setTouched3] = useState(false);
  let [touched4, setTouched4] = useState(false); 
  let [touched5, setTouched5] = useState(false);
  let [touched6, setTouched6] = useState(false);
  let [touched7, setTouched7] = useState(false);
  const [isLoading,setIsLoading]=useState(false);
  const setUserInput1 = (e) => {
    setInput1(e.target.value);
  };
  const setUserInput2 = (e) => {
    setInput2(e.target.value);
  };
  const setUserInput3 = (e) => {
    setInput3(e.target.value);
  };
  const setUserInput4 = (e) => {
    setInput4(e.target.value);
  };
  const setUserInput5=(e)=>{
    setInput5(e.target.value);
  };
  const setUserInput6 = (e) => {
    setInput6(e.target.value);
  }
  const setUserInput7 = (e) => {
    setInput7(e.target.value);
  }
  const setUserTouched1 = (e) => {
    setTouched1(true);
  };
  const setUserTouched2 = (e) => {
    setTouched2(true);
  };
  const setUserTouched3 = (e) => {
    setTouched3(true);
  };
  const setUserTouched4 = (e) => {
    setTouched4(true);
  };
  const setUserTouched5 = (e) => {
    setTouched5(true);
  }
  const setUserTouched6 = (e) => {
    setTouched6(true);
  }
  const setUserTouched7 = (e) => {
    setTouched7(true);
  }
  const handleSubmit23 = (e) => {
    
      setIsLoading(true);
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          Id:input1,
          UserId:input2,
          DisplayName:input3,
          Role:input5,
          Org:input4,
          Password:input7,
          Email:input6
        })
      };
       fetch("http://localhost:2614/user/register", options)
        .then(async (response) => {
          const data = await response.json();
          if (!response.ok) {
            toast.error("Something Went wrong");
            setIsLoading(false);
          } else { 
            if(data.Registration=="success") 
            {
            dispatch({
              type:'SETUSER',
              user:input2,
              token:data.token
            });
            localStorage.setItem("user",JSON.stringify(data));
            setIsLoading(false);
            history.push("/");
          } 
          else 
          { 
            setIsLoading(false);
            toast.error("email or id already exits please try with another one")
          }
          }
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error("Something went wrong  server error");
        });
    
  };
 //Id  userId  displaname org role password email
  return (
    <React.Fragment>
      <ToastContainer />
      {isLoading && <Spinner asOverlay />}
     {!isLoading &&  <div className="background-register-style">
      <div className="login-outer-style">
        <Card className="text-center">
          <Card.Header>Register</Card.Header>
          <Form >
            <Form.Group className="mb-3 input-style" controlId="formBasicName">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Id"
                className={`${touched1?`${input1.length <1?"inputstyle":"inputstyle1"}`:""}`}
                onBlur={(e) => setUserTouched1(e)}
                onInput={(e) => setUserInput1(e)}
              />
              {input1.length <1 && touched1 && (
                <Form.Text className="text-muted">
                  <div className="touch-style"> Please enter your id</div>
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3 input-style1"
              controlId="formBasicEmail"
            >
              <Form.Label>UserId</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter UserId"
                onBlur={(e) => setUserTouched2(e)}
                onInput={(e) => setUserInput2(e)}
                className={ `${touched2?`${input2.length < 1?"inputstyle":"inputstyle1"}`:""}` }
              />
              {input2.length <1 && touched2 && (
                <Form.Text className="text-muted">
                  <div className="touch-style">
                  
                    Please enter a valid  User Id
                  </div>
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3 input-style1"
              controlId="formBasicPhoneno"
            >
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Display Name"
                onBlur={(e) => setUserTouched3(e)}
                onInput={(e) => setUserInput3(e)}
                className={`${touched3?`${input3.length < 3?"inputstyle":"inputstyle1"}`:""}`}
              />
              {input3.length <3 && touched3 && (
                <Form.Text className="text-muted">
                  <div className="touch-style">
                    Please enter a valid Name
                  </div>
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3 input-style1"
              controlId="formBasicPassword"
            >
              <Form.Label>Organization</Form.Label>
              <Form.Control
                type="text"
                placeholder="Organization Name"
                onBlur={(e) => setUserTouched4(e)}
                onInput={(e) => setUserInput4(e)}
                className={`${touched4?`${input4.length<3?"inputstyle":"inputstyle1"}`:""}`}
              />
              {input4.length < 3 && touched4 && (
                <Form.Text className="text-muted">
                  <div className="touch-style"> Please enter Organization Name </div>
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3 input-style1"
              controlId="formBasicPassword"
            >
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Role"
                onBlur={(e) => setUserTouched5(e)}
                onInput={(e) => setUserInput5(e)}
                className={`${touched5?`${input5.length <= 3?"inputstyle":"inputstyle1"}`:""}`}
              />
              {input5.length <= 3 && touched5 && (
                <Form.Text className="text-muted">
                  <div className="touch-style"> Please enter Role</div>
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3 input-style1"
              controlId="formBasicPassword"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                onBlur={(e) => setUserTouched6(e)}
                onInput={(e) => setUserInput6(e)}
                className={ `${touched6?`${input6.length <= 3?"inputstyle":"inputstyle1"}`:""}` }
              />
              {input6.length <= 3 && touched6 && (
                <Form.Text className="text-muted">
                  <div className="touch-style"> Please enter an Email </div>
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3 input-style1"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onBlur={(e) => setUserTouched7(e)}
                onInput={(e) => setUserInput7(e)}
                className={`${touched7?`${input7.length <= 3?"inputstyle":"inputstyle1"}`:""}`}
              />
              {input7.length <= 3 && touched7 && (
                <Form.Text className="text-muted">
                  <div className="touch-style"> Please enter a password </div>
                </Form.Text>
              )}
            </Form.Group>
            <div className="input-button">
              <Button
                disabled={
                  input1.length <1 ||
                  input2.length <1 ||
                  input3.length <= 3 ||
                  input4.length <= 3 ||
                  input5.length <=3 ||
                  input6.length <=3 ||
                  input7.length <=3
                }
                variant="primary"
                type="button"
                onClick={(e) => handleSubmit23(e)}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div> }
    </React.Fragment>
  );
};
export default Register;
