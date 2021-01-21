import React,{useState} from 'react'
import Modal from '../Modal/Modal'
import { handleRegister } from "../../redux/action/auth";
import { connect } from "react-redux";

const Register = ({handleRegister,HandleRegister,Register,Login}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullname: "",
    phone: "",
    username: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { email, password, fullname, phone, username } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    handleRegister(
      email,
      password,
      fullname,
      phone,
      username,
      Register
    );
  };
  
  return (
    <div>
      {HandleRegister ? (
        <div onClick={() => Register()} className="back-drop" />
      ) : null}
      <Modal className="modal" show={HandleRegister}>
          <h1>REGISTER</h1>
          <form onSubmit={(e)=>onSubmit(e)}>
              <div className='form-group'>
                  <input
                    type="text"
                    placeholder='Full Name'
                    className='custom-input'
                    value={fullname}
                    name="fullname"
                    onChange={(e) => onChange(e)}
                    />
              </div>
              <div className='form-group'>
                  <input
                    type="email"
                    placeholder='Email'
                    className='custom-input'
                    value={email}
                    name="email"
                    onChange={(e) => onChange(e)}
                    />
              </div>
              <div className='form-group'>
                  <input
                    type="password"
                    placeholder='Password'
                    className='custom-input'
                    value={password}
                    name="password"
                    onChange={(e) => onChange(e)}
                    />
              </div>
              <div className='form-group'>
                  <input
                    type="text"
                    placeholder='User name'
                    className='custom-input'
                    value={username}
                    name="username"
                    onChange={(e) => onChange(e)}
                    />
              </div>
              <div className='form-group'>
                  <input
                    type="text"
                    placeholder='Phone'
                    className='custom-input'
                    value={phone}
                    name="phone"
                    onChange={(e) => onChange(e)}
                    />
              </div>
              <div className='form-submit'>
                  <button
                    className='btn-submit'
                  >
                      REGISTER
                  </button>
              </div>
          </form>
          <p onClick={()=>Login()}>Have Account? Click Me</p>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { handleRegister })(Register);
