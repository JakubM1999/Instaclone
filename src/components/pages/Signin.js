import React,{useState,useContext,} from "react";
import {UserContext} from '../../App'
import {Link, useNavigate} from 'react-router-dom'


const Signin = () => {
    const {state,dispatch} = useContext(UserContext)
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = ()=>{
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        return alert("Invalid email")
      }
        fetch("https://instaclonevefskoli.herokuapp.com/signin",{
            method:"POST",
            headers:{"Content-Type":"application/json"
        },
            body:JSON.stringify({
                password,
                email

            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                console.log(data.error)
                alert(data.error)
            }else{
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
            dispatch({type:"USER",payload:data.user})
            navigate('/')
        }
        }).catch(error=>{
            console.log(error)
        })
    }
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Log in</h2>
        <input placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="btn waves-effect waves-light" onClick={()=>PostData()}>Login</button>
        <p>
          <Link to="/signup">I don't have an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin