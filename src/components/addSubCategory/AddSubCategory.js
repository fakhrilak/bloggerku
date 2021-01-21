import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {postSubcategory} from '../../redux/action/content'
import {getCategory} from '../../redux/action/category'
import './AddSubCategory.css'

const AddSubCategory = ({userId,getCategory,postSubcategory,categorys:{Allcategory,loading}}) => {
    
    useEffect(()=>{
        getCategory()
    },[])

    const [formData, setFormData] = useState({
        title: "",
        category: "",
      });
    
    const { title, category } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        postSubcategory(title,category,userId);
        setFormData({
            title: "",
            category: "",
        })
      };
    
    let filtered = null

     if (userId==1){
        filtered = [...Allcategory]
     }else{
        filtered = Allcategory.filter((el)=>el.id > 1 );
     }
      
  return (
    <div className="container-addcategory">
        <form onSubmit={(e)=>onSubmit(e)}>
            <input
                name='title'
                placeholder ='Title'
                className='input'
                value={title}
                onChange={(e)=>onChange(e)}
            />
            <div style={{paddingTop:10,paddingBottom:10}}>
                <select
                className="custom-select"
                name='category'
                onChange={(e) => {
                    onChange(e);
                }}
                >
                    <option value={category}>Select Category</option>
                    {loading ? (<option>WIAT FOR LOADING</option>):(
                        filtered.map((Allcategory) => (
                            <option value={Allcategory.title} key={Allcategory.title}>
                                {Allcategory.title}
                            </option>
                        ))
                    )}
                </select>
            </div>
            <div className='btn-custom'>
                <button>POST</button>
              </div>
        </form>    
    </div>
  )
}


const mapStateToProps = (state)=>({
    categorys: state.category
})
export default connect(mapStateToProps,{getCategory,postSubcategory})(AddSubCategory) ;
