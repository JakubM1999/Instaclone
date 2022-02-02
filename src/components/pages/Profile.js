import React from "react";


const Profile = () =>{
    return(
        <div style={{maxWidth:"700px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid lightGrey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                     alt="" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                </div>
                <div>
                    <h4>Jaden Smith</h4>
                    <div style={{display:"flex",justifyContent:"space-between", width:"300px"}}>
                        <p>49 posts</p>
                        <p>50 followers</p>
                        <p>60 following</p>
                    </div>
                </div>
            
            
            
            
            </div>
            <div className="gallery">
                <img className="pic" alt="" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                <img className="pic" alt="" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                <img className="pic" alt="" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                <img className="pic" alt="" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                <img className="pic" alt="" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                <img className="pic" alt="" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
            </div>
        </div>
    )
}

export default Profile