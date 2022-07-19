import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import './index.css'


const Index = () => {
    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSignInGoogle = () => {
        signInWithPopup(auth, provider).then((res) => {
            console.log(res);
        })
    }

    const handleSignIn = () => {
    setError("");
    setLoading(true);
    if (email === "" || password === "") {
      setError("Required field is missing");
      setLoading(false);
    } else {
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            console.log(res);
            setLoading(false);
        }).catch((error) => {
            console.log(error.code);
            setError(error.message);
            setLoading(false);
        })
    }
}

    const handleRegister = () => {
        setError("")
        setLoading(true)
        if(email === "" || password == "" || username === ""){
            setError('Required field is missing');
        } else {
            createUserWithEmailAndPassword(auth, email, password).then((res) => {
                setLoading(false);
                console.log(res)
            }).catch((error) => {
                console.log(error);
                setError(error.message);
                setLoading(false);
            })
        }
    }
  return (
   <div className="auth">
    <div className="auth-container">
        <p>Add another way to log in using any of the following services.</p>
        <div className="sign-options">
            <div className="single-option">
                <img onClick = {handleSignInGoogle} src='https://bit.ly/2voiAYI' alt='google'/>
                <p>Login with google</p>
            </div>
            <div className="auth-login">
                <div className="auth-login-container">
                    { register ? (
                        <>
                        <div className="input-field">
                            <p>Username</p>
                            <input type="text"/>
                        </div>
                        <div className="input-field">
                            <p>Email</p>
                            <input type="text" />
                        </div>
                        <div className="input-field">
                            <p>Password</p>
                            <input type="password" />
                        </div> 
                        <button style={{
                            marginTop: "10px"
                        }}
                        >Register</button>
                        </>
                    ) : (
                            <>
                            <div className="input-field">
                            <p>Username</p>
                            <input type="text"/>
                        </div>
                        <div className="input-field">
                            <p>Email</p>
                            <input type="text" />
                        </div>
                        <div className="input-field">
                            <p>Password</p>
                            <input type="password" />
                        </div> 
                        <button style={{
                            marginTop: "10px"
                        }}
                       
                        >Login</button>
                            </>
                    )}
                    <p style={{
                        // onClick={() => setRegister(!register)}
                        marginTop: "10px",
                        textAlign: "center",
                        color: "#0095ff",
                        textDecoration: "underline",
                        cursor: "pointer"
                    }}>{register ? "Login" : "Register"}?</p>
                </div>
            </div>
        </div>
    </div>
   </div>
  )

                }

export default Index