import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom";
export default function Home(){
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();    
    const data = JSON.stringify({
        email : emailRef?.current?.value,
        password : passwordRef?.current?.value
    })
    const handleLogin = async() =>{ 
        const response = await axios.post("http://localhost:3000/signin",data,{
            headers :{
                "Content-Type" : "application/json"
            }
        })
        if(!response){
            alert("error")
        }
        localStorage.setItem('token',response.data.token);
        navigate("/product");
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