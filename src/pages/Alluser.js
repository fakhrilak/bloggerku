import React,{useEffect} from 'react';
import { getUsers,deletUser } from "../redux/action/user";
import { connect } from "react-redux";
import './Alluser.css'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AllUser = ({getUsers,deletUser,users:{Alluser,loading}}) => {
    const [del,setDel]=React.useState(false)
    useEffect(() => {
        getUsers()
      },[]);
  return loading ? (<div>Loading...</div>):(
        <div className="alluser">
            <div>
                <h1 onClick={()=>setDel(!del)}>ALL USERS</h1>
            </div>            
            <div className="grid-card" >
                    
                    {Alluser === null || loading ? <div>Loading...</div> : Alluser.map((user) => (
                        <div className="content-card">
                            <div className="card">
                                <div style={{display:'flex'}}>
                                    <h3 >{user.fullname}</h3>
                                    {del &&
                                <FontAwesomeIcon icon={faTrash} 
                                style={{color:'black',
                                paddingLeft:70,
                                paddingTop:22
                                }} 
                                onClick={()=>deletUser(user.id)}
                                />}
                                </div>
                                
                                <p >{user.email}</p>
                                <p >{user.username}</p>
                                <p >{user.role}</p>
                            </div>
                    </div>
                    ))}
                </div>
        </div>
  )
}

const mapStateToProps = (state) => ({
    users: state.user,
  });
  
  export default connect(mapStateToProps, { getUsers,deletUser })(AllUser );
  
