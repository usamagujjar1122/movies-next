import { Button } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { URL } from "../components/url";
const Upoload = () => {
    const myFun = async () => {
        const res = await axios.get('http://localhost:3000/user/test',{headers:{Authorization:'myTokenFromAxios'}})
    }
    useEffect(()=>{
       
    },[])
    return ( 
        <Button onClick={myFun}>Upload</Button>
     );
}
 
export default Upoload;