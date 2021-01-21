import React, { useEffect } from 'react'
import './Home.css'
import Header from '../components/Header/Header'
import GridHome from '../components/GridHome/GridHome'
import HeaderPict from '../img/header.png'
import {useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import {getCategory} from "../redux/action/category";

const Home = ({getCategory,categorys:{Allcategory,loading}}) => {

    useEffect(()=>{
        getCategory();
    },[])

    const history = useHistory()

    const handlePushDetail = ()=>{
        history.push("/category")
    }
    return (
        <div className='Home'>
            <div className='Home-pict'>
                <img src={HeaderPict}/>
            </div>
            <Header/>
            <div className='Home-content'>
                <div className='Home-Left'>
                <p className='p'>Category</p>
                    <div className="Homecontent"> 
                        <div style={{paddingRight:20}}>
                            <GridHome onClick = {()=>handlePushDetail()} Allcategory={Allcategory} loading={loading}/>
                        </div>
                        
                    </div>  
                </div>
            </div>
            <div className='Home-Foother'>
                
            </div>
        </div>
    )
}


const mapStateToProps = (state)=>({
    categorys: state.category
})
export default connect(mapStateToProps,{getCategory})(Home) ;
