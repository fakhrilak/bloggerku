import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faTwitter,faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons"
const Header = () => {
    return (
        <div className='Header'>
            <ul className='Header'>
                <li style={{float:'right'}}><a href="https://www.facebook.com/assyroh.kaffah/" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{color:'black'}}/></a></li>
                <li style={{float:'right'}}><a href="https://twitter.com/FakhrilAK/" target="_blank"><FontAwesomeIcon icon={faTwitter} style={{color:'black'}}/></a></li>
                <li style={{float:'right'}}><a href="https://www.instagram.com/fakhrilak/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{color:'black'}}/></a></li>
                <li style={{float:'right'}}><a href="https://www.youtube.com/feed/my_videos/" target="_blank"><FontAwesomeIcon icon={faYoutube} style={{color:'black'}}/></a></li>
            </ul>
        </div>
    )
}
export default Header;
