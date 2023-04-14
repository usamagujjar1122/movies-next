import { Alert, Box, Button, LinearProgress,CircularProgress, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { URL } from "./url";
const Profile = () => {
    const [showalert, setshowalert] = useState(false)
    const [alertmsg, setaletrtmsg] = useState('')
    const [alerttype, setaletrttype] = useState('error')
    const [name, setname] = useState()
    const [user, setuser] = useState()
    const [otp, setotp] = useState()
    const [country, setcountry] = useState()
    const [password, setpassword] = useState()
    const [opassword, setopassword] = useState()
    const [cpassword, setcpassword] = useState()
    const md = useMediaQuery('(min-width:800px)');
    const [isLoading, setisLoading] = useState(true)
    const [isLoading1, setisLoading1] = useState(false)
    // const updateprofile = async () => {
    //     try {
    //         setisLoading(true)
    //         const res = await axios.post(`${URL}/user/updateprofile`, { token: localStorage.getItem('e4a'), name: name, country: country })
    //         if (res.data.success) {
    //             setshowalert(true)
    //             setaletrtmsg(res.data.message)
    //             setaletrttype('success')
    //             setTimeout(() => {
    //                 setshowalert(false)
    //             }, 5000);
    //             setisLoading(false)
    //         }
    //     } catch (error) {
    //         setshowalert(true)
    //         setaletrtmsg(error.response.data.message)
    //         setaletrttype('error')
    //         setTimeout(() => {
    //             setshowalert(false)
    //         }, 5000);
    //         setisLoading(false)
    //     }
    // }
    const updatepassword = async () => {
        try {
            setisLoading1(true)
            const res = await axios.post(`${URL}/user/updatepassword`, { token: localStorage.getItem('e4a'), password, cpassword, opassword })
            if (res.data.success) {
                setshowalert(true)
                setaletrtmsg(res.data.message)
                setaletrttype('success')
                setTimeout(() => {
                    setshowalert(false)
                }, 5000);
                setisLoading1(false)
            }
        } catch (error) {
            setshowalert(true)
            setaletrtmsg(error.response.data.message)
            setaletrttype('error')
            setTimeout(() => {
                setshowalert(false)
            }, 5000);
            setisLoading1(false)
        }
    }
    useEffect(() => {
        const myFun = async () => {
            const res = await axios.post(`${URL}/user/loaduser`, { token: localStorage.getItem('e4a') })
            if (res.data.success) {
                setname(res.data.data.name)
                setcountry(res.data.data.country)
                setuser(res.data.data)
                setisLoading(false)
            }
        }
        myFun()
    }, [])
    return (
        <>
            {isLoading && <>
                <Stack sx={{ minWidth: '100%', minHeight: '100vh', backgroundColor: 'rgba(0,0,0,0.25)' }}>
                        <LinearProgress color="error" />
                    </Stack>
            </>}
            {!isLoading && user &&
                <>
                    <Alert sx={{ position: 'fixed', top: '7%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: showalert ? 100 : -1, opacity: showalert ? 1 : 0, transition: 'opacity 0.4s,z-index 1s', fontSize: { xs: '0.8rem', md: '1rem' }, minWidth: { xs: '80vw', md: 'inherit' }, alignItems: 'center' }} severity={alerttype}>{alertmsg}</Alert>
                    {/* <Stack sx={{ backgroundColor: '#242f3d', borderRadius: '10px', padding: { xs: '10px', md: "20px" }, alignItems: 'center', gap: '20px', margin: { xs: "0px 10px 10px", md: '0px 20px 0px 0px' }, '& input': { fontSize: { xs: '0.75rem', md: '1rem' } } }}>
                        <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>Edit </span>Profile</Typography>
                        <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Full Name:</Typography>
                            <Box sx={{ border: '1px solid gray', width: '100%', borderRadius: '5px', }}>
                                <input key="country" type="text" style={{ background: 'transparent', color: 'white', border: 'none', padding: '10px', outline: 'none', width: '95%', fontWeight: '600' }} value={name} onChange={(e) => { setname(e.target.value) }} />
                            </Box>
                        </Stack>
                        <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Country:</Typography>
                            <Box sx={{ border: '1px solid gray', width: '100%', borderRadius: '5px', }}>
                                <input key="country" type="text" style={{ background: 'transparent', color: 'white', border: 'none', padding: '10px', outline: 'none', width: '95%', fontWeight: '600' }} value={country} onChange={(e) => { setcountry(e.target.value) }} />
                            </Box>
                        </Stack> */}
                    {/* <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Payment Method:</Typography>
                            <select name="cars" id="cars" style={{ background: 'transparent', color: 'white', border: '1px solid gray', padding: '10px', outline: 'none', width: '100%', borderRadius: '5px', fontWeight: '600' }}>
                                <option value="volvo" style={{ backgroundColor: '#242f3d' }}>USDT TRC20</option> */}
                    {/* <option value="saab" style={{ backgroundColor: '#242f3d' }}>Saab</option>
                                <option value="mercedes" style={{ backgroundColor: '#242f3d' }}>Mercedes</option>
                                <option value="audi" style={{ backgroundColor: '#242f3d' }}>Audi</option> */}
                    {/* </select>
                        </Stack> */}
                    {/* <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Payment Account:</Typography>
                            <Box sx={{ border: '1px solid gray', width: '100%', borderRadius: '5px', }}>
                                <input key="country" type="text" style={{ background: 'transparent', color: 'white', border: 'none', padding: '10px', outline: 'none', width: '95%', fontWeight: '600' }} value={trc20} onChange={(e) => { settrc20(e.target.value) }} />
                            </Box>
                        </Stack> */}

                    {/* <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', width: { xs: '100%', md: '90%' } }}>
                            <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={updateprofile} disabled={isLoading}>
                                {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' }, textTransform: 'capitalize' }}>Save Changes</Typography>}
                                {isLoading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                            </Button>
                        </Stack>
                    </Stack> */}
                    <Stack sx={{ minHeight: '90vh' }}>
                        <Stack sx={{ backgroundColor: '#242f3d', borderRadius: '10px', padding: { xs: '10px', md: "20px" }, alignItems: 'center', gap: '20px', margin: { xs: "0px 10px 10px", md: '0px 20px 0px 0px' }, '& input': { fontSize: { xs: '0.75rem', md: '1rem' } } }}>
                            <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>Change </span>Password</Typography>
                            <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Old Password:</Typography>
                                <Box sx={{ border: '1px solid gray', width: '100%', borderRadius: '5px', }}>
                                    <input key="country" type="password" style={{ background: 'transparent', color: 'white', border: 'none', padding: '10px', outline: 'none', width: '95%', fontWeight: '600' }} value={opassword} onChange={(e) => { setopassword(e.target.value) }} />
                                </Box>
                            </Stack>
                            <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>New Password:</Typography>
                                <Box sx={{ border: '1px solid gray', width: '100%', borderRadius: '5px', }}>
                                    <input key="country" type="password" style={{ background: 'transparent', color: 'white', border: 'none', padding: '10px', outline: 'none', width: '95%', fontWeight: '600' }} value={password} onChange={(e) => { setpassword(e.target.value) }} />
                                </Box>
                            </Stack>
                            <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Confirm Password:</Typography>
                                <Box sx={{ border: '1px solid gray', width: '100%', borderRadius: '5px', }}>
                                    <input key="country" type="password" style={{ background: 'transparent', color: 'white', border: 'none', padding: '10px', outline: 'none', width: '95%', fontWeight: '600' }} value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                                </Box>
                            </Stack>
                            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', width: { xs: '100%', md: '90%' } }}>
                                <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={updatepassword} disabled={isLoading}>
                                    {!isLoading1 && <Typography sx={{ fontSize: { xs: '12px', md: '16px' }, textTransform: 'capitalize' }}>Change</Typography>}
                                    {isLoading1 && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </>}
        </>
    );
}

export default Profile;