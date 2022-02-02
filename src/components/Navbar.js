import React,{useContext} from "react";
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from "../App";


const Navbar = () =>{
    const navigate = useNavigate()
    const {state,dispatch} = useContext(UserContext)
    const renderList = () => {
        if(state){
            return[
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create Post</Link></li>,
                <li>
                    <button className="btn red darken-3"
                    style={{marginRight:"1rem"}}
                    onClick={()=>{localStorage.clear() 
                    navigate('/signin')
                    dispatch({type:"CLEAR"})}}>Log out
                    
                    </button>
                </li>
            ]
        }else{
            return[
                <li><Link to="/signin">Login</Link></li>,
                <li><Link to="/signup">Signup</Link></li>
            ]
        }
    }
    return (  
    <nav>
        <div className="nav-wrapper black">
        <Link to={state?"/":"/signin"} className="brand-logo hide-on-med-and-down" style={{fontWeight:"bold",paddingLeft:"1rem"}}>INSTACLONE</Link>
        <ul id="nav-mobile" className="right">
            {renderList()}
        </ul>
        </div>
    </nav>
    )}

export default Navbar