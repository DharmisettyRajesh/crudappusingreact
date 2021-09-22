import React from "react";
import { useState ,useEffect} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify"; 
import {useHistory} from "react-router-dom";

import "./delete.css";
import { Card } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import Spinner from '../util/Spinner';
import { useStateValue } from "../util/Stateprovider";
const Update = () => { 
  let history = useHistory();
  const [, dispatch] = useStateValue();
  useEffect(() => {
    document.title = "Delete Id";
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch({
          type:'SETUSER',
          user:'hello',
          token:foundUser.token
      })
    } 
    else {
      history.push("/");
    }
  }, []);
  const [isLoading,setIsLoading]=useState(false);
  let [input1, setInput1] = useState([]);
  let [touched1, setTouched1] = useState(false);
  let [{user,token},]=useStateValue();

  const setUserInput1 = (e) => {
    setInput1(e.target.value);
  };

  const setUserTouched1 = (e) => {
    setTouched1(true);
  };

  const handleSubmit23 = (e) => {
    if (input1 === null) {
      console.log("please enter a vaalid email address");
    } else {
      setIsLoading(true);
      console.log(token);
      const options = {
        method: "DELETE",
        headers: { 
          "Content-Type": "application/json" ,
          "Authorization":token
         },
        body: JSON.stringify({ UserId: input1 })
      }; 
      console.log(token);
      fetch("http://localhost:2614/user", options)
        .then(async (response) => {
          const data = await response.json();
          if (!response.ok) {
            toast.error("something went wrong");
            setIsLoading(false);
            return;
          }
          toast.success("Id deleted");
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(err);
        });
    }
  };

  return (
    <React.Fragment>
    <ToastContainer /> 
    {isLoading && <Spinner asOverlay />}
    {!isLoading && <div className="login-background-style">
      <div className="login-outer-style">
        <Card className="text-center">
          <Card.Header>Delete Id</Card.Header>
          <Form>
            <Form.Group
              className="mb-3 input-style"
              controlId="formBasicEmail"
              onBlur={(e) => setUserTouched1(e)}
              onInput={(e) => setUserInput1(e)}
            >
              <Form.Label>Id for deletion</Form.Label>
              <Form.Control type="email" placeholder="Enter Id" />
              {touched1 && input1.length < 1 && (
                <Form.Text className="text-muted">
                  <div className="errmsg">
                    
                    Please enter a valid Id
                  </div>
                </Form.Text>
              )}
            </Form.Group>

            <Button
              disabled={input1.length <1}
              variant="primary"
              onClick={(e) => handleSubmit23(e)}
              type="button"
            >
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </div>}
    </React.Fragment>
  );
};
export default Update;
