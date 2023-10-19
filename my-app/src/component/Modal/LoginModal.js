import  ReactDOM  from "react-dom";
import { Fragment } from "react";


const modalroot = document.getElementById("modal-login");
const LoginModal = (props)=>{
    return (<Fragment>
    {ReactDOM.createPortal(props.children,modalroot)}</Fragment>);
};

export default LoginModal;
