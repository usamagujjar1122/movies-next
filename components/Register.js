import { Box, Button, CircularProgress, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import supabase from "./supabaseClient";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
const Register = () => {
    const [email, setemail] = useState()
    const [name, setname] = useState()
    const [showp, setshowp] = useState(false)
    const [showcp, setshowcp] = useState(false)
    const [username, setusername] = useState()
    const [otp, setotp] = useState()
    const [referedby, setreferedby] = useState()
    const [password, setpassword] = useState()
    const [cpassword, setcpassword] = useState()
    const md = useMediaQuery('(min-width:800px)');
    const [isLoading, setisLoading] = useState(false)
    const handleclick = () =>{
        console.log()
    }
    return (
        <>
            <Stack sx={{ alignItems: 'center', gap: '20px', }}>
                <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>REGISTRATIOPN </span>FORM</Typography>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Full Name:</Typography>
                    <input key='email' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={name} onChange={(e) => { setname(e.target.value) }} />
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Username:</Typography>
                    <input key='email' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={username} onChange={(e) => { setusername(e.target.value) }} />
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Email:</Typography>
                    <input key='email' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={email} onChange={(e) => { setemail(e.target.value) }} />
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{position:'relative', flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>OTP:</Typography>
                    <input key='email' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={otp} onChange={(e) => { setotp(e.target.value) }} />
                    <Button sx={{position:'absolute',right:'0%',bottom:"5%",textTransform:'capitalize'}}>send</Button>
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ position:'relative',flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Password:</Typography>
                    <input key="password" type={showp? 'text': 'password'} style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    <IconButton sx={{position:'absolute',right:{xs:'0px',sm:'1%',md:'0%'},bottom:"2%",textTransform:'capitalize'}} onClick={()=>setshowp(prev=>!prev)}>
                        <RemoveRedEyeOutlinedIcon sx={{color:'#e50914'}} />
                    </IconButton>
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ position:'relative',flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Confirm Password:</Typography>
                    <input key="cpassword" type={showcp ? 'text': 'password'} style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                    <IconButton sx={{position:'absolute',right:{xs:'0px',sm:'1%',md:'0%'},bottom:"2%",textTransform:'capitalize'}} onClick={()=>setshowcp(prev=>!prev)}>
                        <RemoveRedEyeOutlinedIcon sx={{color:'#e50914'}} />
                    </IconButton>
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
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