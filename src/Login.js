import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
//import styled from "styled-components";
import { ButtonContainer } from "./components/Button";
//import { AuthContext } from "./Auth.js";


const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
        },
        [history]
    );

    

    return (

        
    
        <div className="text-center bg-success">
        <br/>
        <br/>
        <br/>
        <h2><u>HERE YOU CAN LOG IN TO OUR WEBSITE</u></h2>
        <br/>
        <h1> <strong>Log In</strong></h1>
        <br/><br/>
        <br/>
        <br/>
        <br/>
        

        
            <form onSubmit={handleLogin}>
                
            <label>
                <h2><strong>Email :</strong></h2></label>
                <input name="email" type="email" placeholder=" your Email.." />
                
                <label>
                <h2><strong>Password :</strong></h2></label>
                <input name="password" type="password" placeholder=" your Password.." />
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <ButtonContainer cart  > <h2>Log In </h2></ButtonContainer>
            <br/>
            </form>
        </div>

    



    );
};

    export default withRouter(Login);

    