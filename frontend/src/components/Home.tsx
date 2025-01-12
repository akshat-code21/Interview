import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom";
export default function Home(){
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);    

    const handleLogin = async() => { 
        try {
            const data = {
                email: emailRef.current?.value,
                password: passwordRef.current?.value
            };
            if (!data.email || !data.password) {
                alert("Please enter both email and password");
                return;
            }

            const response = await axios.post("http://localhost:3000/signin", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.data?.token) {
                alert("Invalid response from server");
                return;
            }

            localStorage.setItem('token', response.data.token);
            navigate("/product");
        } catch (error) {
            console.error('Login error:', error);
            alert("Login failed. Please try again.");
        }
    }

    return(
        <div style={{
            display : 'flex',
            flexDirection : "column",
            alignItems : "center",
            justifyContent : "center",
            backgroundColor : "white",
            gap : 10
        }}>
            <input type="email" id='email' ref={emailRef} placeholder="Enter email"/>
            <input type="password" id='password' ref={passwordRef} placeholder="Enter password" />
            <button onClick={handleLogin}>Log in</button>
        </div>
    )
}