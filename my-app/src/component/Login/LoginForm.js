import React, { useState } from "react";
import Classses from './Login.module.css';
import { useDispatch } from "react-redux";
import { LoginFormAction } from "../Redux/CartRedux";
import { useRef,useEffect } from "react";
import ReactDOM from "react-dom";
import LoginAction from "../../Action/LoginAction";
import Login from "./Login";
import Register from "./Register";
import LoginContext from '../../context/LoginContext';

const LoginForm = (props)=>{	
	const style ='';
	const dispatch = useDispatch();
	const [NameValue,setNameValue] = useState('');
	const [NameState,setNameState] = useState(false);
	const [PassValue,setPassValue] = useState('');
	const [PassState,setPassState] = useState(false);
	const [FormState,setFormState] = useState(false);
	const [AccountState,setAccountState] = useState(false);

	const handleOnchangeUserName = (event)=>{
		setNameValue(event.target.value);
	}
	const handleOnchangePassWord = (event) =>{
		setPassValue(event.target.value);
	}
	const handleBlurInputUserName = (event)=>{
		//setFormState(true);
		var regex = /^[^\s][a-zA-Z0-9\s]+$/;
		if(!regex.test(event.target.value)){
			setNameState(true);
		}else{
			setNameState(false);
		}
	}
	const handleBlurInputPassword = (event)=>{
		//setFormState(true);
		var regex = /^[^\s][a-zA-Z0-9\s]+$/;
		if(!regex.test(event.target.value)){
			setPassState(true);
		}
		else{
			setPassState(false);
		}
	}

	const handleSubmit = (event)=>{
		event.preventDefault();
		var regex = /^[^\s][a-zA-Z0-9\s]+$/;
		if(!regex.test(NameValue)){
			setNameState(true);
		}else{
			setNameState(false);
		}
		
		if(!regex.test(PassValue)){
			setPassState(true);
		}else{
			setPassState(false);
		}
		
		if(!NameState && !PassState){
			console.log("success");
			dispatch(LoginAction({username:NameValue,password:PassValue}));
		}
		else{
			return;
		}
	}
	const SignIn = () =>{
		setAccountState(false);
	}
	const SignUp = () =>{
		setAccountState(true);
	}
    return (	
	<LoginContext.Consumer>{({signInGoogle}) => {
			return <div >
			{			
				<div className={Classses['limiter']}>
				<div className={Classses['container-login100']}> 
			   <div  ref={props.onref}className={[Classses['wrap-login100']].join(' ')}>
			   <div className={Classses['tab-panel']}>
			   <button  className={[Classses['left']]} style={{backgroundColor:AccountState == false ? "#dee2e6" : "white"}} onClick={SignIn}> Sign In </button> 			
			   <button className={[Classses['right']]} style={{backgroundColor:AccountState == true ?  "#dee2e6" : "white"}} onClick={SignUp}> Sign up </button>
				   </div>
				   <div style={{paddingLeft:"33px",paddingRight:"33px"}}>
					   {AccountState === false ? <Login funcGoogleLogin={signInGoogle}></Login> : <Register></Register> }
				   </div>
			</div> 
		   </div> 
		   </div>	  
			}
			 <div id="dropDownSelect1"></div>		
			</div>   
		}}</LoginContext.Consumer>
		
    );
};
export default LoginForm;