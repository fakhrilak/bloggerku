import React, { useEffect } from 'react'
import './Dropdown.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {handleLogout} from '../../redux/action/auth'
import {connect} from 'react-redux'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
const Dropdown = ({handleLogout,auth: {isAuthenticated,user}}) => {
  const HandleLogout=()=>{
    handleLogout()
  }
  return user=== null?(null):(
    <div>
      { isAuthenticated && <div className="dropdown">
                <li><FontAwesomeIcon icon={faArrowDown} style={{color:'black'}}/></li>
            <div className="dropdown-content">
                {user.role == 1 && <Link to="/private">My-Love</Link>}
                <Link to='/write'>Write</Link>
                <Link to='/mypost'>My Post</Link>
                {user.role == 1 && <Link to='/users'>All User</Link>}
                {user.role == 1 && <Link to='/add-category'>Add Category</Link>}
                {isAuthenticated && <a onClick={()=>HandleLogout()}>Logout</a>}
            </div>
        </div>}
    </div>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth
});
 export default connect(mapStateToProps, {handleLogout})(Dropdown);
