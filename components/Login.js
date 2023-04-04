import { Box, Button, CircularProgress,  Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const md = useMediaQuery('(min-width:800px)');
    const [isLoading, setisLoading] = useState(false)
    const handleclick = () =>{
        console.log(email)
    }
    return (

        <>
            <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>LOGIN </span>FORM</Typography>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Email:</Typography>
                    <input key="lemail" type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={email} onChange={(e) => { setemail(e.target.value) }} />
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Password:</Typography>
                    <input key="lpassword" type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={password} onChange={(e) => { setpassword(e.target.value) }} />
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