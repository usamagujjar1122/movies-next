import { Alert, Button, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { URL } from "./url";

const Buttonn = ({ price, level,vip }) => {
    const [isLoading, setisLoading] = useState(false)
    const [showalert, setshowalert] = useState(false)
    const [alertmsg, setaletrtmsg] = useState('')
    const [alerttype, setaletrttype] = useState('error')
    const handleclick = async () => {
        setisLoading(true)
        try {
            const res = await axios.post(`${URL}/user/vip`, { token: localStorage.getItem('e4a'), price, level })
            if (res.data.success) {
                setshowalert(true)
                setaletrtmsg(res.data.message)
                setaletrttype('success')
                setTimeout(() => {
                    setshowalert(false)
                }, 5000);
                window.location.reload()
            }
        } catch (error) {
            setshowalert(true)
            setaletrtmsg(error.response.data.message)
            setaletrttype('error')
            setisLoading(false)
            setTimeout(() => {
                setshowalert(false)
            }, 5000);
        }

    }
    return (
        <>
            <Alert sx={{ position: 'fixed', top: '7%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: showalert? 100: -1 , opacity: showalert ? 1 : 0, transition: 'opacity 0.4s,z-index 1s', fontSize: { xs: '0.8rem', md: '1rem' }, minWidth: { xs: '80vw', md: 'inherit' }, alignItems: 'center' }} severity={alerttype}>{alertmsg}</Alert> 
            <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={handleclick} disabled={isLoading || vip>=level}>
                {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: 'bold' }}>${price}</Typography>}
                {isLoading && <CircularProgress sx={{ color: 'white', width: "22px !important", height: '22px !important', padding: "0px 8px" }} />}
            </Button>
        </>

    );
}

export default Buttonn;