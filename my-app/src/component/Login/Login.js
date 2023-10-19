import Classses from './Login.module.css';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import React, { useState, useEffect, Fragment } from 'react';
import LoginContext from '../../context/LoginContext';

const Login = (props) =>{
    return (
        <Fragment>
            <form className={[Classses['login100-form'],Classses['flex-sb'],Classses['flex-w']].join(' ')} style={{height:"461.2px"}}>
            <div style={{width:"100%"}}>	
                        <div style={{textAlign:'center'}}><span>Sign In with Social Account</span></div>
                        <div style={{display:"inline-flex",width:"100%",marginTop:"15px"}}>
                            <a href="#" style={{marginLeft:"5px"}} className={[Classses['btn-face'],Classses['m-b-21']].join(' ')}>
                                <i className="fa fa-facebook-official"></i>
                                Facebook
                            </a>
                            <a onClick={props.funcGoogleLogin} style={{marginLeft:"15px"}} className={[Classses['btn-google'],Classses['m-b-21']].join(' ')}>
                                <img src={require('../../img/icon-google.png')} alt="GOOGLE"/>
                                Google
                            </a>			
                        </div>
                        <div style={{textAlign:'center'}}><span>Or</span></div>
                    <div style={{marginBottom:"10px"}}>
                    <div  className={[Classses['p-t-31'],Classses['p-b-9']].join(' ')}>
						<span className={Classses['txt11']}>
							Email
						</span>
					
					</div>
					<div className={Classses['wrap-input100']}  data-validate = "Email is required">
						<input className={Classses['input100']}  type="text" name="Email"/>
						<span className={Classses['focus-input100']}></span>
												
					</div>
					{/* {NameState && <p style={{color:"red"}}>UserName is invalid</p>} */}
					<div  className={Classses['p-t-13']}>
						<span  className={Classses['txt1']}>
							Password
						</span>

						<a href="#" className={Classses['txt2']}>
							Forgot?
						</a>
					</div>
					<div className={Classses['wrap-input100']} data-validate = "Password is required">
						<input className={Classses['input100']} type="password" name="pass"/>
						<span className={Classses['focus-input100']} ></span>					
					</div>
					{/* {PassState && <p style={{color:"red"}}>Password is invalid</p>} */}

					<div className={[Classses['container-login100-form-btn'],Classses['m-t-17']].join(' ')} style={{marginBottom:'5px'}}>
					
						<input className={Classses['login100-form-btn']} type="submit" value="Sign Up" name="Sign Up" />

					</div>
                    </div>
                </div >		        
			</form>
        </Fragment>
    );
}

export default Login;