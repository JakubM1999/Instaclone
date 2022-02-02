import React,{createContext, useContext, useEffect, useReducer} from "react";
import Navbar from "./components/Navbar";
import "./App.css"
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom'
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";
import Profile from "./components/pages/Profile";
import Signup from "./components/pages/Signup";
import CreatePost from "./components/pages/CreatePost";
import {reducer,initialState} from './reducers/userReducer'

export const UserContext = createContext()

const Routing = () =>{
  const navigate = useNavigate()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      navigate('/')
    }else{
      navigate('/signin')
    }
  },[])
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/create" element={<CreatePost />}/>
  </Routes>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar />
    <Routing />

    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
