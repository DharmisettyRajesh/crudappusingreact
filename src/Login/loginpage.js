import React from "react";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./loginpage.css";
import { Card } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { useStateValue } from "../util/Stateprovider";
import Spinner from "../util/Spinner";
const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  let [input1, setInput1] = useState([]);
  let [input2, setInput2] = useState([]);
  let [touched1, setTouched1] = useState(false);
  let [touched2, setTouched2] = useState(false);
  const [, dispatch] = useStateValue();
  let history = useHistory();
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email: input1, Password: input2 }),
      };
      fetch("https://us-central-chatio-a0f52.cloudfunctions.net/app/user/login", options)
        .then(async (response) => {
          const data = await response.json();
          if (!response.ok) {
            toast.error("Something went wrong");
            setIsLoading(false);
            return;
          }
          console.log(data);
          dispatch({
            type: "SETUSER",
            user: "Hello",
            token: data.token,
          });
          localStorage.setItem("user", JSON.stringify(data));
          setIsLoading(false);
          toast.success("Registered");
          history.push("/");
        })
        .catch((err) => {
          toast.error("Something went wrong please try again ");
          setIsLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      {isLoading && <Spinner asOverlay />}
      {!isLoading && (
        <div className="login-background-style1">
          <div className="outer-style-login">
            <Link to="/">
              {" "}
              <img
                className="image-style"
                src="https://cdn1.vectorstock.com/i/thumb-large/89/80/star-stick-magic-abstract-gold-logo-vector-15008980.jpg"
                alt="hello"
              />
            </Link>
            <p className="login-p-style"> Sign in to Miracle</p>
            <Card className="card-background">
              <Form>
                <Form.Group
                  className="mb-3 input-style-login"
                  controlId="formBasicEmail"
                  onBlur={(e) => setUserTouched1(e)}
                  onInput={(e) => setUserInput1(e)}
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className={`${
                      touched1
                        ? `${input1.length <= 4 ? "inputstyle" : "inputstyle1"}`
                        : ""
                    }`}
                    type="email"
                    placeholder="Enter email"
                  />
                  {touched1 && input1.length <= 4 && (
                    <Form.Text className="text-muted">
                      <div className="errmsg">
                        {" "}
                        Please enter a email address{" "}
                      </div>
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group
                  className="mb-3 input-style1-login"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className={`${
                      touched2
                        ? `${input2.length <= 4 ? "inputstyle" : "inputstyle1"}`
                        : ""
                    }`}
                    type="password"
                    placeholder="Password"
                    onBlur={(e) => setUserTouched2(e)}
                    onInput={(e) => setUserInput2(e)}
                  />
                  {touched2 && input2.length <= 3 && (
                    <Form.Text className="text-muted ">
                      <div className="errmsg"> Please enter a password</div>
                    </Form.Text>
                  )}
                </Form.Group>

                <Button
                  disabled={input1.length <= 4 || input2.length <= 3}
                  variant="success"
                  onClick={(e) => handleSubmit23(e)}
                  className="Button"
                  type="button"
                >
                  Sign in
                </Button>
              </Form>
            </Card>
            <Card className="card-background card-alternate">
              <p>
                New to Miracle?
                <Link to="/register" style={{ textDecoration: "none" }}>
                  {" "}
                  Create an account.
                </Link>
              </p>
            </Card>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Login;
