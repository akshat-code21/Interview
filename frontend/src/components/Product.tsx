import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchToken = async() =>{
            const token = localStorage.getItem("token")
            if(!token){
                navigate('/invalid')
                return;
            }
        };
        fetchToken();
    },[])
  return (
    <div>
      Product
    </div>
  )
}

export default Product
