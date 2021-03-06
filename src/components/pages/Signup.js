import React,{useState} from "react";
import {Link,useNavigate} from 'react-router-dom'


const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = ()=>{
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        return alert("Invalid email")
      }
        fetch("https://instaclonevefskoli.herokuapp.com/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"
        },
            body:JSON.stringify({
                name,
                password,
                email

            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                console.log(data.error)
                alert(data.error)
            }else{
            navigate('/signin')
            alert(data.message)
        }
        }).catch(error=>{
            console.log(error)
        })
    }

  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Sign up</h2>
        <input placeholder="username" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="btn waves-effect waves-light" onClick={()=>PostData()}>Sign Up</button>
        <p>
          <Link to="/signin">I Already have an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup