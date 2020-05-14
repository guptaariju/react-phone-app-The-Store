import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import { ButtonContainer } from "./components/Button";
//import { AuthProvider } from "./Auth.js";

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div className="text-center bg-dark">
            <br/>
            <br/>
            <h1> <strong>Sign up</strong></h1>
            <br/>
            <br/>
            <br/>
            <br/>



            <form onSubmit={handleSignUp}>


                <label>
                <h2><strong>Email : </strong></h2></label>
                <input name="email" type="email" placeholder=" your Email.." />
                
                <label>
                <h2><strong>Password : </strong></h2></label>
                <input name="password" type="password" placeholder=" your Password.." />
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                

                <ButtonContainer ><h2>Sign Up</h2></ButtonContainer>
                
            </form>
            <br/>
                <br/>
                
                
            
            <form action="/login">
                <ButtonContainer cart ><h2>Log In</h2>  </ButtonContainer>
            </form>
        </div>
    );
};

export default withRouter(SignUp);