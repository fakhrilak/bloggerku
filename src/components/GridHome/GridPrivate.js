import React from 'react'
import './GridHome.css'
import {Thumbnail} from './Content'
import {useHistory} from 'react-router-dom'

const GridHome = ({category}) => {

    const history = useHistory()

    return (
        <div className='Grid-Home'>
            {category.map((Content)=>
                <>
                    <div className='img'>
                            <img src={Content.img} onClick={()=> history.push(`/category/${Content.title}`)}/>
                        </div>
                        <div className='Content-Grid-Home'>
                            <p>{Content.title}</p>
                            <h5>{Content.text}</h5>
                            <h5>{Content.text2}</h5>
                        </div>
                </>
            )}
        </div>
    )
}

export default GridHome