import React,{useEffect} from 'react'
import renderHTML from 'react-render-html'
import {connect} from 'react-redux'
import './Detail.css'
import {getContent} from '../redux/action/content'
const Detail = ({match,getContent,contents:{Allcontent,loading}}) => {

    useEffect(()=>{
        getContent()
    },[])
    let A = [...Allcontent]
    let filterdata =  A.filter((el)=>el.id == match.params.id );
    return loading?(<div>Loading...</div>):(
        <div className='Detail'>
            {filterdata.map((title)=>
            <div style={{width:'auto'}} className='Judul'>
                <div style={{textAlign:'center'}}>
                    <h1>{title.title}</h1>
                </div>              
            </div>
            )}
            <div style={{paddingTop:20}}>
            {filterdata.map((Content)=>
            <div className='Container'>
                {renderHTML(Content.body)}
            </div>
            )} 

            {filterdata.map((title)=>
            <div>
                <div className="date">                 
                    <div>
                        <h4>{title.user.username}</h4>
                    </div>
                    <div className="datacontent">
                        <button>{title.date}</button>
                    </div>
                                                           
                </div>               
            </div>
            )}
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>({
    contents: state.content
})
export default connect(mapStateToProps,{getContent})(Detail) ;
