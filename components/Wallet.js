import { Alert, Box, Button, CircularProgress, Grid, Input, Stack, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";
import axios from "axios";
const Wallet = () => {
    const [showalert, setshowalert] = useState(false)
    const [alertmsg, setaletrtmsg] = useState('')
    const [alerttype, setaletrttype] = useState('error')
    const [image, setImage] = useState()
    const [method, setmethod] = useState('trc20')
    const [wmethod, setwmethod] = useState('trc20')
    const [waddress, setwaddress] = useState()
    const [trxID, settrxID] = useState()
    const md = useMediaQuery('(min-width:800px)');
    const [isLoading, setisLoading] = useState(false)
    const [isLoading1, setisLoading1] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleimage = (e) => {
        setLoading(true)
        const file = e.target.files[0];
        const storageRef = ref(storage, "e4a" + "/" + file.name);
        const upload = uploadBytesResumable(storageRef, file);
        upload.on(
            "state_change",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // setProgress(progress);
            },
            (error) => {
                console.log(error);
                setLoading(false)
            },
            async () => {
                try {
                    const url = await getDownloadURL(storageRef);
                    setImage(url);
                    setLoading(false)
                    //   setShoplogoupload(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false)
                }
            }
        );
    };

    const handledeposit = async () => {
        setisLoading(true)
        try {
            const res = await axios.post('http://localhost:5000/user/deposit', { token: localStorage.getItem('e4a'), trxID, image,method })
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
            setshowalert(true)
            setaletrtmsg(error.response.data.message)
            setaletrttype('error')
            setTimeout(() => {
                setshowalert(false)
            }, 5000);
            setisLoading(false)
        }
    }

    const handlewithdraw = async () => {
        try {
            setisLoading1(true)
            const res = await axios.post('http://localhost:5000/user/withdraw', { token: localStorage.getItem('e4a'), waddress,wmethod })
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
    return (
        <>
            <Alert sx={{ position: 'fixed', top: '7%', left: '50%',transform:'translate(-50%,-50%)',zIndex:1000, opacity: showalert ? 1 : 0, transition: 'opacity 0.4s',fontSize:{xs:'0.8rem',md:'1rem'},minWidth:{xs:'80vw',md:'inherit'},alignItems:'center' }} severity={alerttype}>{alertmsg}</Alert>
            <Stack sx={{ margin: { xs: "0px 20px", md: '0px' } }}>
                <Grid container sx={{ alignItems: 'center' }} spacing={2} >
                    <Grid item xs={12} md={4}>
                        <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                            <AttachMoneyOutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                            <Stack>
                                <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>Balance</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>0</Typography>
                                <Typography sx={{ fontSize: "0.85rem" }}>Deposit</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                            <AddCardOutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                            <Stack>
                                <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>Total Deposit</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>0</Typography>
                                <Typography sx={{ fontSize: "0.85rem" }}>Deposit</Typography>

                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                            <CreditScoreOutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                            <Stack>
                                <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>Total Widthdrawl</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>0</Typography>
                                <Typography sx={{ fontSize: "0.85rem" }}>Deposit</Typography>

                            </Stack>
                        </Stack>
                    </Grid>

                </Grid>
            </Stack>
            <Stack sx={{ backgroundColor: '#242f3d', borderRadius: '10px', padding: { xs: '10px', md: "20px" }, alignItems: 'center', gap: '20px', margin: { xs: "0px 10px 10px", md: '0px 20px 0px 0px' }, '& input': { fontSize: { xs: '0.75rem', md: '1rem' } } }}>
                <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>Recharge </span>Balance</Typography>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Payment Method:</Typography>
                    <select name="cars" id="cars" style={{ background: 'transparent', color: 'white', border: '1px solid gray', padding: '10px', outline: 'none', width: '100%', borderRadius: '5px', fontWeight: '600' }} value={method} onChange={(e)=>setmethod(e.target.value)}>
                        <option value="trc20" style={{ backgroundColor: '#242f3d' }}>USDT (TRC20)</option>
                    </select>
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Transaction ID:</Typography>
                    <Box sx={{ border: '1px solid gray', width: '100%', borderRadius: '5px', }}>
                        <input key="country" type="text" style={{ background: 'transparent', color: 'white', border: 'none', padding: '10px', outline: 'none', width: '95%', fontWeight: '600' }} value={trxID} onChange={(e) => { settrxID(e.target.value) }} />
                    </Box>
                </Stack>
                <label htmlFor="icon-button-file2" style={{ cursor: 'pointer', zIndex: '2' }}>
                    <Input
                        accept="image/*"
                        id="icon-button-file2"
                        type="file"
                        capture="environment"
                        sx={{ display: "none" }}
                        onChange={(e) => handleimage(e)}
                    />
                    <Stack
                        direction="row"
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        alignItems="center"
                        justifyContent="center"
                        marginTop="20px"

                    >
                        {/* <Button sx={{ color: "white !important", backgroundColor: '#009603', '&:hover': { backgroundColor: '#009603' } }} disabled>{loading ? <CircularProgress sx={{ color: 'white', width: "28px !important", height: '28px !important', padding: "0px 16px" }} /> : <Typography sx={{ textTransform: 'capitalize' }}>SELECT</Typography>}</Button>
                                <Button sx={{ color: "white !important", backgroundColor: '#009603', '&:hover': { backgroundColor: '#009603' }, display: image ? 'flex' : 'none', marginLeft: "20px", padding: "6px", borderRadius: '4px', zIndex: '2 !important' }} onClick={handleclick}>
                                    {loading ?
                                        <CircularProgress sx={{ color: 'white', width: "20px !important", height: '20px !important', padding: "0px 20px" }} />
                                        :
                                        <Typography>UPLOAD</Typography>}
                                </Button> */}

                        <Box sx={{ position: 'relative', border: '1px solid gray', width: '200px', height: "250px", margin: 'auto', backgroundColor: "#333", position: 'relative' }}>
                            {!image && !loading &&
                                <Typography sx={{ fontWeight: 'bold', color: 'white !important', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', display: image ? 'none' : 'block', textAlign: 'center', whiteSpace: 'nowrap' }}>ScreenShot</Typography>
                            }
                            {loading &&
                                <CircularProgress sx={{ color: '#e50914', position: 'absolute', top: '40%', left: '45%', transform: 'translate(-50%,-50%)' }} />
                            }
                            <img src={image && image} alt="" style={{ maxWidth: '400px', maxHeight: '250px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                        </Box>
                    </Stack>
                </label>
                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', width: { xs: '100%', md: '90%' } }}>
                    <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={handledeposit} disabled={isLoading}>
                        {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' }, textTransform: 'capitalize' }}>Deposit</Typography>}
                        {isLoading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                    </Button>
                </Stack>
            </Stack>

            {/* ----------------------------------------------------------------------------------------------- */}

            <Stack sx={{ backgroundColor: '#242f3d', borderRadius: '10px', padding: "20px", alignItems: 'center', gap: '20px', margin: { xs: "0px 10px 10px", md: '0px 20px 0px 0px' }, '& input': { fontSize: { xs: '0.75rem', md: '1rem' } } }}>
                <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>Withdraw </span>Funds</Typography>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Payment Method:</Typography>
                    <select name="cars" id="cars" style={{ background: 'transparent', color: 'white', border: '1px solid gray', padding: '10px', outline: 'none', width: '100%', borderRadius: '5px', fontWeight: '600' }} value={wmethod} onChange={(e)=>setwmethod(e.target.value)}>
                        <option value="volvo" style={{ backgroundColor: '#242f3d' }}>USDT (TRC20)</option>
                    </select>
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Wallet Address:</Typography>
                    <Box sx={{ border: '1px solid gray', width: '100%', borderRadius: '5px', }}>
                        <input key="country" type="text" style={{ background: 'transparent', color: 'white', border: 'none', padding: '10px', outline: 'none', width: '95%', fontWeight: '600' }} value={waddress} onChange={(e) => { setwaddress(e.target.value) }} />
                    </Box>
                </Stack>
                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', width: { xs: '100%', md: '90%' } }}>
                    <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={handlewithdraw} disabled={isLoading}>
                        {!isLoading1 && <Typography sx={{ fontSize: { xs: '12px', md: '16px' }, textTransform: 'capitalize' }}>Withdraw</Typography>}
                        {isLoading1 && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}

export default Wallet;