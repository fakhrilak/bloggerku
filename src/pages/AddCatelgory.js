import React,{useState} from 'react'
import {postCategory} from '../redux/action/category'
import {connect} from 'react-redux'
import './AddCategory.css'
const AddCatelgory = ({postCategory,auth:{loading,error}}) => {
    const [formData, setFormData] = useState({
        title: "",
        img: "",
        text:"",
      });
    
    const { title,img,text } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        postCategory(title,img,text);
        setFormData({
          title: "",
          img: "",
          text:"",
        })
      };
  return loading?(<div>Loading...</div>):(
    <div>
      <div  className="container-addcategory">
      <form onSubmit={(e) => onSubmit(e)}>
              <div className='form-input'>
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    name="title"
                    onChange={(e) => onChange(e)}
                    className='input'
                    />
              </div>
              <div className='form-input'>
                  <input
                    type="text"
                    placeholder="Url Gambar"
                    value={img}
                    name="img"
                    onChange={(e) => onChange(e)}
                    className='input'
                    />
              </div>
              <div className='form-input'>
                  <textarea
                    type="text"
                    placeholder="Caption"
                    value={text}
                    name="text"
                    onChange={(e) => onChange(e)}
                    className='text-input'
                    />
              </div>
              <div className='form-input'>
                  <button
                    className='btn-category'
                  >
                      POST
                  </button>
              </div>
            
          </form>
      </div>
      
    </div>
  )
}
const mapStateToProps = (state) => ({
    auth: state.auth,
  });

export default connect(mapStateToProps, { postCategory })(AddCatelgory);
