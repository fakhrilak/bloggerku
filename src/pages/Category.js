import React, { useEffect,useState } from 'react'
import './Home.css'
import HeaderPict from '../img/header.png'
import Header from '../components/Header/Header'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {getContent,deletContent} from '../redux/action/content'
import { faArrowAltCircleRight, faTrash, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../img/logo.png"

const Category = ({match,getContent,deletContent,contents:{Allcontent,loading},auths:{user}}) => {

    useEffect(()=>{
        getContent()
    },[])

    const [del,setdel]=useState(false)
    let A = [...Allcontent]
    let filtercategory =  A.filter((el)=>el.categoryId=== `${match.params.id}` );
    const history = useHistory()
    console.log(match.params.id)
    return Allcontent === null || loading ? (<div>Loading...</div>):(
        <div className='Home'>
            <div className='Home-pict'>
                <img src={HeaderPict}/>
            </div>
        <Header/>
        <div className='Home-content'>
            <div className='Home-Left'>
                {user.role === 1 && <p className='p' onClick={()=>setdel(!del)}>{match.params.id}</p>}
                {user.role !== 1 && <p className='p'>{match.params.id}</p>}
                <div className= "grid-category">
                    {filtercategory.map((Content)=>
                        <div>
                            {del && 
                                    <div style={{width:50,backgroundColor:'red'}}> 
                                    <h5 onClick ={()=>deletContent(Content.id)}>
                                    <FontAwesomeIcon icon={faTrash} style={{color:'black',marginRight:20,paddingLeft:20}}/>
                                    {Content.title}</h5>
                                    </div>
                                }
                            {!del && 
                                    <div
                                    className='grid-item'
                                    onClick={()=> history.push(`/content/${Content.id}`)}
                                    > 
                                    <img src={logo}/>
                                    <h5 style={{paddingLeft:20,cursor:'pointer',color:'black'}}>
                                    <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color:'black',marginRight:20}}/> {Content.title}</h5>
                                    </div>}
                                    
                        </div>
                    )}
                </div>  
            </div>
        </div>
        <div className='Home-Foother'>
            
        </div>
    </div>
    )
}

const mapStateToProps = (state)=>({
    contents: state.content,
    auths : state.auth
})
export default connect(mapStateToProps,{getContent,deletContent})(Category) ;
