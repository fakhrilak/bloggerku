import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../img/logo.png'
import Dropdown from '../Dropdown/Dropdown'
import { connect } from "react-redux";
import {handleLogout} from '../../redux/action/auth'

const Navbar = ({handleLogout,register,login,auth: {isAuthenticated,user}}) => {

    return (
        <div style={{position:'fixed',width:'100%'}}>
            {!isAuthenticated? (
            <>
            <ul>
                <li><Link to='/'><img src={logo} style={{width:40}}/></Link></li>
                <li><Link to='/about' style={{paddingTop:30,fontWeight:'bolder'}}>About</Link></li>
                <li><Link to='/lastupdate' style={{paddingTop:30,fontWeight:'bolder'}}>Last Update</Link></li>
                {!isAuthenticated &&<li style={{paddingTop:25,marginInlineEnd:20,float:'right'}}><button onClick={login}>Login</button></li>}
            </ul>
            </>
            ):
            (
            <>
            <ul>
                <li><Link to='/'><img src={logo} style={{width:40}}/></Link></li>
                <li><Link to='/about' style={{paddingTop:30,fontWeight:'bolder'}}>About</Link></li>
                <li><Link to='/lastupdate' style={{paddingTop:30,fontWeight:'bolder'}}>Last Update</Link></li>
                {isAuthenticated && <li><Link to='/private' style={{paddingTop:30}}><Dropdown/></Link></li>}
            </ul>
            </>
            )
            }
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, {handleLogout})(Navbar);