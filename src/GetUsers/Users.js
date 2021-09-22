import React from 'react';
import { useEffect,useState} from 'react';
import {Table} from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {useHistory} from'react-router-dom';

import './Users.css';
import { useStateValue } from '../util/Stateprovider';
import Spinner from '../util/Spinner';
 
const Users =()=>{ 
    const history=useHistory();
    const [users,setUsers]=useState([]);
    const [{user,token},]=useStateValue();
    const [isLoading,setIsLoading]=useState(false);
    const [, dispatch] = useStateValue();
  useEffect(() => {
    document.title = "Users";
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
    useEffect(()=>{
        function getusers()
        {  
            setIsLoading(true);
            const options={
                method:'GET',
                headers:{
                    'Content-Type':'Application/json',
                    'Authorization':token
                }
            }
            fetch('http://localhost:2614/user',options).
            then(async response=>{
                const data=await response.json();
                if(!response.ok)
                {
                    setIsLoading(false);
                }
                setUsers(data);
                console.log(data);
                setIsLoading(false);
            })
            .catch((error)=>
            {
                toast.error("Something went wrong");
                setIsLoading(false);
            });
        }
        getusers();
    },[])
    return(
        <React.Fragment> 
        <ToastContainer /> 
        {isLoading && <Spinner asOverlay />}
        {!isLoading &&
        <div> 
            <p className="p-style">Users Details </p> 
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Id</th>
      <th>Organization</th>
      <th>Role</th> 
      <th>UserId</th>
    </tr>
  </thead>
  <tbody>
   { users.length >0 && users.map((data)=>(
        <tr key={data.id}>
        <td>{data.DisplayName}</td>
        <td>{data.Email}</td>
        <td>{data.Id}</td>
        <td>{data.Org}</td>
        <td>{data.Role}</td>
        <td>{data.UserId}</td>
      </tr> 
   )) }
    </tbody>
    </Table>
        </div> 
        }
        </React.Fragment>
    )
}
export default Users;