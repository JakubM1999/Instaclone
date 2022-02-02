import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePost = () =>{
    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")


    useEffect(()=>{
        if(url){
        fetch("https://instaclonevefskoli.herokuapp.com/createpost",{
            method:"POST",
            headers:{"Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
            body:JSON.stringify({
                title,
                body,
                photo:url

            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                console.log(data.error)
                alert(data.error)
            }else{
            navigate('/')
        }
        }).catch(error=>{
            console.log(error)
        })
    }
    },[url])

    const postDetails = ()=>{
        console.log(image)
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","instaclone")
        data.append("cloud_name","instaclone1234")
        fetch("https://api.cloudinary.com/v1_1/instaclone1234/image/upload",{
            method:"POST",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    return (
      <div className="card imput-file"
      style={{
          margin:"20px auto",
          maxWidth:"700px",
          padding:"20px",
          textAlign:"center"
      }}>
        <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder="Description" value={body} onChange={(e)=>setBody(e.target.value)}/>
        <div className="file-field input-field">
          <div className="btn">
            <span>Image</span>
            <input type="file" className="file-text" onChange={(e)=>setImage(e.target.files[0])}/>
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button className="btn waves-effect waves-light" onClick={()=>postDetails()}>Upload</button>
      </div>
    ); 
}

export default CreatePost