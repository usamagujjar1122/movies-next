import { Alert, Box, Button, CircularProgress,  Stack, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const md = useMediaQuery('(min-width:900px)');
    const [isLoading, setisLoading] = useState(false)
    const [showalert, setshowalert] = useState(false)
    const [alertmsg, setaletrtmsg] = useState('')
    const [alerttype, setaletrttype] = useState('error')
    const router = useRouter()
    const handleclick = async () =>{
        setisLoading(true)
        try {
        let formdata = { username,password }
        const res = await axios.post('http://localhost:5000/user/login',formdata)
            if(res.data.success){
                localStorage.setItem('e4a', res.data.token)
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
            <Alert sx={{ position: 'fixed', top: '7%', left: '50%',transform:'translate(-50%,-50%)', opacity: showalert ? 1 : 0, transition: 'opacity 0.4s',fontSize:{xs:'0.8rem',md:'1rem'},minWidth:{xs:'80vw',md:'inherit'},alignItems:'center' }} severity={alerttype}>{alertmsg}</Alert>
            <Stack sx={{ alignItems: 'center', gap: {xs:'10px',md:'20px'},padding:'0px' }}>
                <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>LOGIN </span>FORM</Typography>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Username:</Typography>
                    <input key="lemail" type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={username} onChange={(e) => { setusername(e.target.value) }} />
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Password:</Typography>
                    <input key="lpassword" type="password" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={password} onChange={(e) => { setpassword(e.target.value) }} />
                </Stack>
                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: { xs: '100%', md: '90%' } }}>
                    <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={handleclick} disabled={isLoading}>
                        {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }}>LOGIN</Typography>}
                        {isLoading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                    </Button>
                    <Link href="/forgot" style={{ textDecoration: 'none' }}><Typography sx={{ color: 'rgba(244,67,54,1)', '&:hover': { color: 'white' }, cursor: 'pointer', fontSize: { xs: "0.9rem", md: "1rem" } }}>Retrive password?</Typography></Link>
                </Stack>
            </Stack>
        </>
    );
}

export default Login;