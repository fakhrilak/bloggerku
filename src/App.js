import React,{useState,useEffect} from 'react';
import './App.css';
import Foother from './components/Foother/Foother'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Navbar from './components/Navbar/Navbar'
import Category from './pages/Category'
import Detail from './pages/Detail'
import ModalLogin from './components/Login/Login'
import ModalRegister from './components/Register/Register'
import Private from './pages/Private'
import EditorText from './pages/EditorText'
import { setAuthToken } from "./config/api";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import AdminRoute from './components/Routing/AdminRoute'
import UserRoute from './components/Routing/UserRoute'
import { loadUser } from "./redux/action/auth";
import LastUpdate from "./pages/LastUpdate"
import AddCategory from './pages/AddCatelgory'
import Users from "./pages/Alluser"

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
    }, []);
  
  const [HandleLogin,setHandleLogin]=useState(false)
  const [HandleRegister,setHandleRegister]=useState(false)

  const Register = () =>{
    setHandleRegister(!HandleRegister)
    setHandleLogin(false)
  }

  const Login = () =>{
    setHandleLogin(!HandleLogin)
    setHandleRegister(false)
  }
  
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
          <Navbar register={Register} login={Login}/>
          <div className="page">
            <Route exact path="/" component={Home} />
            <Route exact path="/lastupdate" component={LastUpdate} />
            <Route exact path="/mypost" component={LastUpdate} />
            <AdminRoute exact path="/private" component={Private} />
            <AdminRoute exact path="/users" component={Users} />
            <AdminRoute exact path="/add-category" component={AddCategory}/>
            <UserRoute exact path="/write" component={EditorText} />
            <UserRoute exact path= "/category/:id" component={Category} />
            <Route exact path= "/about" component={Profile} />
            <Route exact path= "/content/:id" component={Detail} />
          </div>
        <div className='foother'>
          {HandleLogin && (
            <ModalLogin 
            HandleLogin={HandleLogin} 
            setHandleLogin={setHandleLogin}
            Loginaksen={Login}
            Register={Register}
            />
            )}
            {HandleRegister && (
            <ModalRegister
            HandleRegister={HandleRegister} 
            setHandleRegister={setHandleRegister}
            Register={Register}
            Login={Login}
            />
            )}
          <Foother/>
        </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
