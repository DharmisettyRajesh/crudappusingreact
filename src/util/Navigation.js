import React ,{useState,useEffect} from 'react'; 
import {useStateValue} from './Stateprovider';
import {Link} from 'react-router-dom';
import './Navigation.css';
const Navigation=()=>{
    const [{user},dispatch] =useStateValue();
    const [active1,setActive1]=useState(false);
    const [active2,setActive2]=useState(false);
    const [active3,setActive3]=useState(false); 
    const [active4,setActive4]=useState(false);
    const [active5,setActive5]=useState(false);
    const [active6,setActive6]=useState(false);
    useEffect(()=>{
      setActive1(true);
    },[]);
    const handleActive1=e=>{
      setActive1(true);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive5(false);
      setActive6(false);
    }
    const handleActive2=e=>{
      setActive1(false);
      setActive2(true);
      setActive3(false);
      setActive4(true);
      setActive5(true);
      setActive6(false);
    }
    const handleActive3= e =>{
      setActive1(false);
      setActive2(false);
      setActive3(true); 
      setActive4(true);
      setActive5(true);
      setActive6(false);
    }
    const handleActive4= e =>{
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(true);
        setActive5(false);
        setActive6(false);

    }
    const handleActive5= e =>{
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive5(true);
        setActive6(false);
    }
    const handleActive6= e =>{
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive5(false);
      setActive6(true);
      
    }
    const handleActive7= e =>{
      dispatch({
        type:'SETUSER',
        user:'Guest user',
        token:null
      });
      localStorage.clear();
    }
    return (
        <div className="topnav">
        <Link className={` ${active1?"active":""}` }  onClick={(e)=>{handleActive1(e)}} to="/">Home</Link> 
         {user==='Guest user' && <Link className={` ${active2?"active":""}` }  onClick={(e)=>{handleActive2(e)}} to="/login">Login</Link>}
         {user==='Guest user' && <Link className={` ${active3?"active":""}` }  onClick={(e)=>{handleActive3(e)}}  to="/register">Register</Link> }
         {user!=='Guest user' && <Link className={` ${active4?"active":""}` }  onClick={(e)=>{handleActive4(e)}}  to="/update">Update</Link> }
         {user!=='Guest user' && <Link className={` ${active5?"active":""}` }  onClick={(e)=>{handleActive5(e)}}  to="/delete">Delete</Link> }
         {user!=='Guest user' && <Link className={` ${active6?"active":""}` }  onClick={(e)=>{handleActive6(e)}}  to="/users">Users</Link> } 
         {user!=='Guest user' && <Link  onClick={(e)=>{handleActive7(e)}} to="/" >Logout</Link>}
       </div>  
    )
}
export default Navigation;