import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons"
const Foother = () => {
    return (
        <div style={{backgroundColor:'#3399ff',color:'black',textAlign:'center',height:100,bottom:0,width:'100%'}}>
            <p>© 2020 Zilog-Corporation | Make with ❤️  using ReactJs</p>
            <p><ul >
                <li className="Foother"><a href="https://www.facebook.com/assyroh.kaffah/" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{color:'black'}}/></a></li>
                <li ><a href="https://twitter.com/FakhrilAK/" target="_blank"><FontAwesomeIcon icon={faTwitter} style={{color:'black'}}/></a></li>
                <li ><a href="https://www.instagram.com/fakhrilak/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{color:'black'}}/></a></li>
                <li ><a href="https://www.youtube.com/feed/my_videos/" target="_blank"><FontAwesomeIcon icon={faYoutube} style={{color:'black'}}/></a></li>
            </ul></p>
        </div>
    )
}
export default Foother;