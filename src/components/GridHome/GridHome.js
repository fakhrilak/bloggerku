import React, { useEffect } from 'react'
import './GridHome.css'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const GridHome = ({loadUser,Allcategory,loading,auths:{user}}) => {

    const history = useHistory()

    let category = Allcategory.filter((el)=>el.id > 1)

    return loading ? (<div>Loading....</div>
            ):(
                <div className='Grid-Home'>
                    {category.map((Content)=>
                        <>
                            <div className='img'>
                                    <img src={Content.img} onClick={()=> history.push(`/category/${Content.title}`)}/>
                                </div>
                                <div className='Content-Grid-Home'>
                                    <p>{Content.title}</p>
                                    <h5>{Content.text}</h5>
                                </div>
                        </>
                    )}
                </div>
        )
}

const mapStateToProps = (state)=>({
    auths: state.auth
  })
  export default connect(mapStateToProps,{})(GridHome) ;