import { Alert, Box, Button, CircularProgress, Stack, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { URL } from "./url";

const Support = () => {
    const [msg, setmsg] = useState()
    const [password, setpassword] = useState()
    const md = useMediaQuery('(min-width:900px)');
    const [isLoading, setisLoading] = useState(false)
    const [showalert, setshowalert] = useState(false)
    const [alertmsg, setaletrtmsg] = useState('')
    const [alerttype, setaletrttype] = useState('error')
    const router = useRouter()
    const handleclick = async () => {
        setisLoading(true)
        try {
            const res = await axios.post(`${URL}/user/msg`, { msg: msg, token: localStorage.getItem('e4a') })
            if (res.data.success) {
                setshowalert(true)
                setaletrtmsg(res.data.message)
                setaletrttype('success')
                setisLoading(false)
                setTimeout(() => {
                    setshowalert(false)
                }, 5000);
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
            <Stack sx={{ width: '100%',margin:{xs:'10px 0px',md:'20px 0px'} }}>
                <Stack sx={{ padding: {xs:'10px',md:'20px'}, margin: { xs: '0px 10px', md: '0px 20px 0px 0px' }, backgroundColor: '#242f3d', borderRadius: '10px', minHeight: '80vh' }}>
                    <Stack sx={{ alignItems: 'center', gap: { xs: '10px', md: '20px' }, padding: '0px' }}>
                        <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>CUSTOMER </span>SUPPORT</Typography>
                        <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Query:</Typography>
                            <textarea key="email" type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={msg} rows="5" onChange={(e) => { setmsg(e.target.value) }} />
                        </Stack>
                        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', width: { xs: '100%', md: '90%' } }}>
                            <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={handleclick} disabled={isLoading}>
                                {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }}>SEND</Typography>}
                                {isLoading && <CircularProgress sx={{ color: 'white', width: "22px !important", height: '22px !important', padding: "0px 8px" }} />}
                            </Button>
                        </Stack>
                        <Stack direction="row" sx={{gap:"10px",'& p':{fontSize:{xs:"0.8rem",md:'1rem'}},minWidth:'100%',marginTop:'20px' }}>
                            <Typography sx={{color:'#e50914',fontWeight:'bold'}}>Note:</Typography>
                        <Typography>You will get a reply at your registered email with in 24 working hours.</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default Support;