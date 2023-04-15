import { Alert, Box, Button, CircularProgress, Stack, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { URL } from "../../components/url";

const Forgot = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [cpassword, setcpassword] = useState()
    const [final, setfinal] = useState(false)
    const [cotp, setcotp] = useState()
    const [otp, setotp] = useState()
    const md = useMediaQuery('(min-width:900px)');
    const [loading, setloading] = useState(false)
    const [showalert, setshowalert] = useState(false)
    const [alertmsg, setaletrtmsg] = useState('')
    const [alerttype, setaletrttype] = useState('error')
    const router = useRouter()
    const sendotp = async () => {
        setloading(true)
        try {
            const res = await axios.post(`${URL}/user/forgot`, { email })
            if (res.data.success) {
                setcotp(res.data.otp)
                setshowalert(true)
                setaletrtmsg('OTP sent')
                setaletrttype('success')
                setloading(false)
                setTimeout(() => {
                    setshowalert(false)
                }, 5000);
            }
        } catch (error) {
            setcotp()
            setshowalert(true)
            setaletrtmsg(error.response.data.message)
            setaletrttype('error')
            setloading(false)
            setTimeout(() => {
                setshowalert()
            }, 5000);
        }
    }
    const confirmotp = () => {
        setloading(true)
        if (otp == cotp) {
            setshowalert(true)
            setaletrtmsg('Please enter your new password')
            setaletrttype('success')
            setloading(false)
            setfinal(true)
            setTimeout(() => {
                setshowalert(false)
            }, 5000);
        } else {
            setshowalert(true)
            setaletrtmsg('Invalid OTP')
            setaletrttype('error')
            setloading(false)
            setTimeout(() => {
                setshowalert(false)
            }, 5000);
        }
    }

    const reset = async () => {
        setloading(true)
        try {
            const res = await axios.post(`${URL}/user/reset`, { password, cpassword,email })
            if (res.data.success) {
                setshowalert(true)
                setaletrtmsg(res.data.message)
                setaletrttype('success')
                setTimeout(() => {
                    setshowalert(false)
                }, 5000);
                // window.location = ('https://e4a.live/earn/signup')
                router.push('/earn/signup')
            }
        } catch (error) {
            setshowalert(true)
            setaletrtmsg(error.response.data.message)
            setaletrttype('error')
            setloading(false)
            setTimeout(() => {
                setshowalert()
            }, 5000);
        }

    }
    useEffect(() => {
        setcotp()
    }, [email])
    // useEffect(() => {
    //     console.log(otp, cotp)
    // }, [otp])
    return (

        <>
            <Alert sx={{ position: 'fixed', top: '7%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: showalert ? 100 : -1, opacity: showalert ? 1 : 0, transition: 'opacity 0.4s,z-index 1s', fontSize: { xs: '0.8rem', md: '1rem' }, minWidth: { xs: '80vw', md: 'inherit' }, alignItems: 'center' }} severity={alerttype}>{alertmsg}</Alert>
            <Stack sx={{ backgroundColor: '#17212b !important', minHeight: '100vh' }}>
                <Stack sx={{ padding: { xs: "10px", md: "30px" }, borderRadius: '10px', minHeight: { xs: '90vh', md: '80vh' }, maxHeight: { xs: '90vh', md: '80vh' }, overflowY: 'scroll', backgroundColor: '#2a3842', alignItems: 'center', '&::-webkit-scrollbar': { display: 'none' }, width: { xs: '90%', md: '60%' }, margin: 'auto' }}>
                    <Stack sx={{ width: '100%', alignItems: 'center', gap: { xs: '10px', md: '20px' }, padding: '0px' }}>
                        <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>RESET </span>PASSWORD</Typography>
                        {!final && <>
                            <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Email:</Typography>
                                <input key="lemail" type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={email} onChange={(e) => { setemail(e.target.value) }} />
                            </Stack>
                            {cotp &&
                                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>OTP:</Typography>
                                    <input key="otp" type="number" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={otp} onChange={(e) => { setotp(e.target.value) }} />
                                </Stack>
                            }
                            {!cotp &&
                                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', width: { xs: '100%', md: '90%' } }}>
                                    <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={sendotp} disabled={loading}>
                                        {!loading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }}>Send OTP</Typography>}
                                        {loading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                                    </Button>
                                </Stack>
                            }
                            {cotp &&
                                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', width: { xs: '100%', md: '90%' } }}>
                                    <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={confirmotp} disabled={loading}>
                                        {!loading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }}>Confirm OTP</Typography>}
                                        {loading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                                    </Button>
                                </Stack>
                            }
                        </>}
                        {final &&
                            <>
                                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>New password:</Typography>
                                    <input key="emil" type="password" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={password} onChange={(e) => { setpassword(e.target.value) }} />
                                </Stack>
                                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Confirm password:</Typography>
                                    <input key="email" type="password" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                                </Stack>
                                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', width: { xs: '100%', md: '90%' } }}>
                                    <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={reset} disabled={loading}>
                                        {!loading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }}>RESET</Typography>}
                                        {loading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                                    </Button>
                                </Stack>
                            </>}
                    </Stack>

                </Stack>
            </Stack>
        </>
    );
}

export default Forgot;