import React,{useEffect, useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {postContent}from '../redux/action/content'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './EditorText.css'
import {connect} from 'react-redux'
import {getCategory} from '../redux/action/category'


const EditorText = ({postContent,auths:{user},getCategory,categorys:{Allcategory,loading}}) => {

  useEffect(()=>{
    getCategory()
  },[])
  const [body,setBody]=useState('')
  const [formData, setFormData] = useState({
    title:"",
    categoryId:""
  });
  let B = null
  if (user.id === null){
    let C = [...Allcategory]
    B = C.filter((el)=>el.id > 1)
  }else if(user.role === 1){
    B = [...Allcategory]
  }else{
    let C = [...Allcategory]
    B = C.filter((el)=>el.id > 1)
  }
  const {title,categoryId} = formData;

  const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmite = (e) =>{
      e.preventDefault();
      postContent(`${user.id}`,title,body,categoryId)
      setFormData({
        title:"",
        categoryId:""
      })
  }
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
 
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  
  return (
    <div>
        <div style={{paddingTop:100,paddingBottom:100}}>
          <form onSubmit={(e) => onSubmite(e)}>
            <div className="editor-wrapper">
              <div className='form-editortext'>
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    name="title"
                    onChange={(e) => onChange(e)}
                    className='input-editortext'
                />
              </div>
              <div className='form-editortext'>
                <select
                  className="custom-select"
                  name='categoryId'
                  onChange={(e) => {
                      onChange(e);
                  }}
                  >
                  <option value={categoryId}>Category</option>
                          {loading ? (<option>WIAT FOR LOADING</option>):(
                              B.map((category) => (
                                  <option value={category.title} key={category.id}>
                                      {category.title}
                                  </option>
                              ))
                          )}
                </select>
              </div>
              <div className="post-text">
                  <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    placeholder='Write your story here'
                    onChange={(e) => setBody(e)}
                  />              
              </div>
              <div className="btn-editortext">
                <button >POST</button>
              </div>
            </div>
          </form>
        </div>
    </div>
    
  )
}
const mapStateToProps = (state)=>({
  categorys: state.category,
  auths: state.auth
})
export default connect(mapStateToProps,{getCategory,postContent})(EditorText) ;
