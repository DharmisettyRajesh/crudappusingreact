import React from "react";
import { useState,useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {useHistory} from 'react-router-dom';


import "./update.css";
import { Card } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { useStateValue } from "../util/Stateprovider";
import Spinner from "../util/Spinner";

const Update = () => {
  const history =useHistory();
  useEffect(()=>{
      document.title="Update"
  },[])
  const [, dispatch] = useStateValue();
  useEffect(() => {
    document.title = "Home";
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
  let [input1, setInput1] = useState([]);
  let [input2, setInput2] = useState([]);
  let [touched1, setTouched1] = useState(false);
  let [touched2, setTouched2] = useState(false);
  const [{ user, token }] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const setUserInput1 = (e) => {
    setInput1(e.target.value);
  };
  const setUserInput2 = (e) => {
    setInput2(e.target.value);
  };
  const setUserTouched1 = (e) => {
    setTouched1(true);
  };
  const setUserTouched2 = (e) => {
    setTouched2(true);
  };
  const handleSubmit23 = (e) => {
    if (input1 === null) {
      console.log("please enter username");
    } else if (input2 == null) {
      console.log("please enter password");
    } else {
      setIsLoading(true);
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          oldId: input1,
          newId: input2,
        }),
      };
      fetch("http://localhost:2614/user", options)
        .then(async (response) => {
          const data = await response.json();
          if (!response.ok) {
            setIsLoading(false);
            toast.error("something went wrong");
            return;
          }
          toast.success("Id Updated");
          setIsLoading(false);
        })
        .catch((err) => {
          toast.error(err);
          setIsLoading(false);
        });
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      {isLoading && <Spinner asOverlay/>}
      {!isLoading && (
        <div className="login-background-style">
          <div className="login-outer-style">
            <Card className="text-center">
              <Card.Header>Update UserID</Card.Header>
              <Form>
                <Form.Group
                  className="mb-3 input-style"
                  controlId="formBasicEmail"
                  onBlur={(e) => setUserTouched1(e)}
                  onInput={(e) => setUserInput1(e)}
                >
                  <Form.Label>Old UserID</Form.Label>
                  <Form.Control type="number" placeholder="Email address" />
                  {touched1 && input1.length < 1 && (
                    <Form.Text className="text-muted">
                      <div className="errmsg">
                        {" "}
                        Please enter a valid Id{" "}
                      </div>
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group
                  className="mb-3 input-style1"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Updated UserID</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="New email Address"
                    onBlur={(e) => setUserTouched2(e)}
                    onInput={(e) => setUserInput2(e)}
                  />
                  {touched2 && input2.length < 1 && (
                    <Form.Text className="text-muted ">
                      <div className="errmsg"> Please enter a valid Id</div>
                    </Form.Text>
                  )}
                </Form.Group>

                <Button
                  disabled={input1.length < 1 || input2.length < 1}
                  variant="primary"
                  onClick={(e) => handleSubmit23(e)}
                  type="button"
                >
                  Submit
                </Button>
              </Form>
            </Card>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Update;
