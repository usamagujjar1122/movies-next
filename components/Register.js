import { Box, Button, CircularProgress, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "./supabaseClient";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import axios from 'axios'
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/router'
import { URL } from "./url";
const Register = () => {
    const router = useRouter()
    const [email, setemail] = useState()
    const [name, setname] = useState()
    const [showp, setshowp] = useState(false)
    const [showalert, setshowalert] = useState(false)
    const [alertmsg, setaletrtmsg] = useState('')
    const [alerttype, setaletrttype] = useState('error')
    const [mailing, setmailing] = useState(false)
    const [showcp, setshowcp] = useState(false)
    const [username, setusername] = useState()
    const [otp, setotp] = useState()
    const [cotp, setcotp] = useState()
    const [referedby, setreferedby] = useState(router.query.ref)
    const [password, setpassword] = useState()
    const [cpassword, setcpassword] = useState()
    const md = useMediaQuery('(min-width:900px)');
    const [isLoading, setisLoading] = useState(false)
    const handleclick = async () => {
        setisLoading(true)
        let formdata = {
            name: name,
            username: username,
            email: email,
            password: password,
            cpassword: cpassword,
            otp: otp,
            cotp: cotp,
            referedby: referedby
        }
        try {
            const res = await axios.post(`${URL}/user/signup`, formdata)
            if (res.data.success) {
                setshowalert(true)
                setaletrtmsg(res.data.message)
                setaletrttype('success')
                setTimeout(() => {
                    setshowalert(false)
                }, 5000);
                setisLoading(false)
            }
        } catch (error) {
            console.log(error)
            setshowalert(true)
            setaletrtmsg(error.response.data.message)
            setaletrttype('error')
            setTimeout(() => {
                setshowalert(false)
            }, 2000);
            setisLoading(false)
        }
    }
    const sendotp = async () => {
        setmailing(true)
        if (email) {
            const res = await axios.post(`${URL}/user/sendmail`, { email })
            if (res.data.success) {
                setcotp(res.data.otp)
                setshowalert(true)
                setaletrtmsg('OTP sent')
                setaletrttype('success')
                setTimeout(() => {
                    setshowalert(false)
                }, 5000);
                setTimeout(() => {
                    setmailing(false)
                }, 30000);
            } else {
                setmailing(false)
            }
        } else {
            setcotp(otp)
            setshowalert(true)
            setaletrtmsg('Please enter email address to send OTP')
            setaletrttype('error')
            setTimeout(() => {
                setshowalert()
            }, 5000);
            setmailing(false)
        }
    }
    return (
        <>
            <Alert sx={{ position: 'fixed', top: '7%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: showalert? 100: -1 , opacity: showalert ? 1 : 0, transition: 'opacity 0.4s,z-index 1s', fontSize: { xs: '0.8rem', md: '1rem' }, minWidth: { xs: '80vw', md: 'inherit' }, alignItems: 'center' }} severity={alerttype}>{alertmsg}</Alert> 
            <Stack sx={{ alignItems: 'center', gap: {xs:'10px',md:'20px'}, }}>
                <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>REGISTRATIOPN </span>FORM</Typography>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Full Name:</Typography>
                    <input key='email' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={name} onChange={(e) => { setname(e.target.value) }} />
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Username:</Typography>
                    <input key='email' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={username} onChange={(e) => { setusername(e.target.value) }} />
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Email:</Typography>
                    <input key='email' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={email} onChange={(e) => { setemail(e.target.value) }} />
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ position: 'relative', flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>OTP:</Typography>
                    <input key='email' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={otp} onChange={(e) => { setotp(e.target.value) }} />
                    <Button sx={{ position: 'absolute', right: '0%', bottom: "5%", textTransform: 'capitalize' }} onClick={sendotp} disabled={mailing}>
                        <Typography sx={{ fontSize: { xs: '12px', md: '16px', fontWeight: 'bold' } }}>Send</Typography>
                    </Button>
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ position: 'relative', flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Password:</Typography>
                    <input key="password" type={showp ? 'text' : 'password'} style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    <IconButton sx={{ position: 'absolute', right: { xs: '0px', sm: '1%', md: '0%' }, bottom: "2%", textTransform: 'capitalize' }} onClick={() => setshowp(prev => !prev)}>
                        <RemoveRedEyeOutlinedIcon sx={{ color: '#e50914' }} />
                    </IconButton>
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ position: 'relative', flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Confirm Password:</Typography>
                    <input key="cpassword" type={showcp ? 'text' : 'password'} style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                    <IconButton sx={{ position: 'absolute', right: { xs: '0px', sm: '1%', md: '0%' }, bottom: "2%", textTransform: 'capitalize' }} onClick={() => setshowcp(prev => !prev)}>
                        <RemoveRedEyeOutlinedIcon sx={{ color: '#e50914' }} />
                    </IconButton>
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Refereed by:</Typography>
                    <input key='referedby' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={referedby} onChange={(e) => { setreferedby(e.target.value) }} />
                </Stack>
                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: { xs: '100%', md: '90%' } }}>
                    <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={handleclick} disabled={isLoading}>
                        {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }}>REGISTER</Typography>}
                        {isLoading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                    </Button>
                    <Link href="/forgot" style={{ textDecoration: 'none' }}><Typography sx={{ color: 'rgba(244,67,54,1)', '&:hover': { color: 'white' }, cursor: 'pointer' }}>Retrive password?</Typography></Link>
                </Stack>
            </Stack>
        </>
    );
}

export default Register;