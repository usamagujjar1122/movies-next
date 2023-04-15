import { Alert, Box, Button, LinearProgress, CircularProgress, Divider, Grid, IconButton, Input, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";
import axios from "axios";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { URL } from "./url";

const Wallet = () => {
    const [showalert, setshowalert] = useState(false)
    const [deposits, setdeposits] = useState([])
    const [sdeposits, setsdeposits] = useState(false)
    const [withdraws, setwithdraws] = useState([])
    const [sdwithdraws, setswithdraws] = useState(false)
    const [alertmsg, setaletrtmsg] = useState('')
    const [alerttype, setaletrttype] = useState('error')
    const [image, setImage] = useState()
    const [user, setUser] = useState()
    const [method, setmethod] = useState('USDT (TRC20) Address')
    const [wmethod, setwmethod] = useState('USDT (TRC20) Address')
    const [waddress, setwaddress] = useState()
    const [trxID, settrxID] = useState()
    const [amount, setamount] = useState(20)
    const [trcadd, setatrcadd] = useState("TD9JuLQsJWmexYihmcJNzxgSri1PftdHAn")
    const [wamount, setwamount] = useState(10)
    const md = useMediaQuery('(min-width:800px)');
    const [isLoading, setisLoading] = useState(false)
    const [isLoading1, setisLoading1] = useState(false)
    const [loading, setLoading] = useState(false)
    const [load, setLoad] = useState(true)
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
            const res = await axios.post(`${URL}/user/deposit`, { token: localStorage.getItem('e4a'), trxID, image, method, amount })
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
            const res = await axios.post(`${URL}/user/withdraw`, { token: localStorage.getItem('e4a'), waddress, wmethod, wamount })
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
    const setclr = (status) => {
        switch (status) {
            case 'pending':
                return 'yellow';
                break;
            case 'approved':
                return 'lime'
                break;
            case 'rejected':
                return 'red'
                break;
            default:
                return 'white';
                break;
        }
    }
    useEffect(() => {
        const myFun = async () => {
            const res = await axios.post(`${URL}/user/history`, { token: localStorage.getItem('e4a') })
            if (res.data.success) {
                setdeposits(res.data.deposits)
                setwithdraws(res.data.withdraws)
            }
            const res1 = await axios.post(`${URL}/user/loaduser`, { token: localStorage.getItem('e4a') })
            if (res1.data.success) {
                setUser(res1.data.data)
                setLoad(false)
            }
        }
        myFun()
    }, [])
    const copy = async (text) => {
        await navigator.clipboard.writeText(text);
        setshowalert(true)
        setaletrtmsg('copied')
        setaletrttype('success')
        setTimeout(() => {
            setshowalert(false)
        }, 5000);
    }
    useEffect(() => {
        if (method === "USDT (TRC20) Address") {
            setatrcadd('TD9JuLQsJWmexYihmcJNzxgSri1PftdHAn')
        } else {
            setatrcadd('227994942')
        }
    }, [method])
    return (
        <>
            <Alert sx={{ position: 'fixed', top: '7%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: showalert ? 100 : -1, opacity: showalert ? 1 : 0, transition: 'opacity 0.4s,z-index 1s', fontSize: { xs: '0.8rem', md: '1rem' }, minWidth: { xs: '80vw', md: 'inherit' }, alignItems: 'center' }} severity={alerttype}>{alertmsg}</Alert>
            {load && <>
                <Stack sx={{ minWidth: '100%', minHeight: '100vh', backgroundColor: 'rgba(0,0,0,0.25)' }}>
                    <LinearProgress color="error" />
                </Stack>
            </>}
            {user && !load && <>
                <Stack sx={{ margin: { xs: "0px 10px", md: '0px 20px 0px 0px' } }}>
                    <Grid container sx={{ alignItems: 'center' }} spacing={2} >
                        <Grid item xs={12} md={4}>
                            <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                                <AttachMoneyOutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                                <Stack>
                                    <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>Balance</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{user.balance}</Typography>
                                    <Typography sx={{ fontSize: "0.85rem" }}>Deposit now</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                                <AddCardOutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                                <Stack>
                                    <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>Total Deposit</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{user.tdeposit}</Typography>
                                    <Typography sx={{ fontSize: "0.85rem" }}>Deposit now</Typography>

                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                                <CreditScoreOutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                                <Stack>
                                    <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>Total Widthdrawl</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{user.twithdraw}</Typography>
                                    <Typography sx={{ fontSize: "0.85rem" }}>Withdraw now</Typography>
                                </Stack>
                            </Stack>
                        </Grid>

                    </Grid>
                </Stack>
                <Stack sx={{ backgroundColor: '#242f3d', borderRadius: '10px', padding: { xs: '10px', md: "20px" }, alignItems: 'center', margin: { xs: "0px 10px 10px", md: '0px 20px 0px 0px' }, '& input': { fontSize: { xs: '0.75rem', md: '1rem' } } }}>
                    <Stack sx={{ gap: '20px', width: '100%', alignItems: 'center' }}>
                        <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>Recharge </span>Balance</Typography>
                        <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Payment Method:</Typography>
                            <select name="cars" id="cars" style={{ background: 'transparent', color: 'white', border: '1px solid gray', padding: '10px', outline: 'none', width: '100%', borderRadius: '5px', fontWeight: '600' }} value={method} onChange={(e) => setmethod(e.target.value)}>
                                <option value="USDT (TRC20) Address" style={{ backgroundColor: '#242f3d' }}>
                                    USDT (TRC20) Address
                                </option>
                                <option value="Binance Pay ID" style={{ backgroundColor: '#242f3d' }}>Binance Pay ID</option>
                            </select>
                        </Stack>

                        <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>{method}:</Typography>
                            <Box sx={{ position: 'relative', border: '1px solid gray', width: '100%', borderRadius: '5px', }}>
                                <input key="country" type="text" style={{ background: 'transparent', color: 'white', border: 'none', padding: '10px', outline: 'none', width: '95%', fontWeight: '600' }} value={trcadd} readOnly />
                                <IconButton sx={{ position: 'absolute', right: { xs: '0px', sm: '1%', md: '0%' }, bottom: "2%", textTransform: 'capitalize' }} onClick={() => copy(trcadd)}>
                                    <ContentCopyIcon sx={{ color: '#e50914' }} />
                                </IconButton>
                            </Box>
                        </Stack>
                        <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Amount ($):</Typography>
                            <Box sx={{ border: '1px solid gray', width: '100%', borderRadius: '5px', }}>
                                <input key="country" type="number" style={{ background: 'transparent', color: 'white', border: 'none', padding: '10px', outline: 'none', width: '95%', fontWeight: '600' }} value={amount} onChange={(e) => { setamount(e.target.value) }} />
                            </Box>
                        </Stack>
                        <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>{method === "USDT (TRC20) Address" ? "Transaction ID" : 'Your Pay ID'}:</Typography>
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
                        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: { xs: '100%', md: '90%' } }}>
                            <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={handledeposit} disabled={isLoading}>
                                {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' }, textTransform: 'capitalize' }}>Deposit</Typography>}
                                {isLoading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                            </Button>
                            <Stack onClick={() => setsdeposits(prev => !prev)} direction="row" sx={{ alignItems: 'center', color: 'rgba(244,67,54,1)', cursor: 'pointer', '& p': { fontSize: { xs: '0.8rem !important', md: '1rem !important' } } }}>
                                <Typography>Deposit Record</Typography>
                                <KeyboardArrowDownIcon sx={{ fontSize: { xs: "16px", md: '24px' } }} />
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack sx={{ width: '100%', transform: sdeposits ? 'scaleY(1)' : 'scaleY(0)', height: sdeposits ? 'auto' : '0px', transition: 'transform 0.2s, height 1s' }}>
                        <Stack direction="row" sx={{ minWidth: '100%' }}>
                            <Typography sx={{ flex: 1, textAlign: 'center', color: 'gray', padding: "10px 0px", fontSize: { xs: '0.8rem', sm: '1rem' } }}>{'Amount'}</Typography>
                            <Typography sx={{ flex: 1, textAlign: 'center', color: 'gray', padding: "10px 0px", fontSize: { xs: '0.8rem', sm: '1rem' } }}>{'Date'}</Typography>
                            <Typography sx={{ flex: 1, textAlign: 'center', color: 'gray', padding: "10px 0px", fontSize: { xs: '0.8rem', sm: '1rem' } }}>{'Time'}</Typography>
                            <Typography sx={{ flex: 1, textAlign: 'center', color: 'gray', padding: "10px 0px", fontSize: { xs: '0.8rem', sm: '1rem' } }}>{'Status'}</Typography>
                        </Stack>
                        <Divider sx={{ color: 'gray' }} />
                        {deposits.length > 0 && deposits.map(deposit => {
                            console.log(deposit)
                            return (
                                <>
                                    <Stack direction="row" sx={{ minWidth: '100%' }}>
                                        <Typography sx={{ flex: 1, textAlign: 'center', fontSize: { xs: "0.75rem !important", md: '1rem !important' }, padding: "10px 0px" }}>${deposit.amount}</Typography>
                                        <Typography sx={{ flex: 1, textAlign: 'center', fontSize: { xs: "0.75rem !important", md: '1rem !important' }, padding: "10px 0px" }}>{deposit.createdat.slice(0, 10)}</Typography>
                                        <Typography sx={{ flex: 1, textAlign: 'center', fontSize: { xs: "0.75rem !important", md: '1rem !important' }, padding: "10px 0px" }}>{deposit.createdat.slice(11, 16)} </Typography>
                                        <Typography sx={{ flex: 1, textAlign: 'center', fontSize: { xs: "0.75rem !important", md: '1rem !important' }, padding: "10px 0px", color: () => setclr(deposit.status) }}>{deposit.status}</Typography>
                                    </Stack>
                                    <Divider sx={{ color: 'gray' }} />
                                </>
                            )
                        })}
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, color: 'gray', textAlign: 'center', padding: '10px' }}>No more data</Typography>
                    </Stack>
                </Stack>

                {/* ----------------------------------------------------------------------------------------------- */}

                <Stack sx={{ backgroundColor: '#242f3d', borderRadius: '10px', padding: "20px", alignItems: 'center', gap: '20px', margin: { xs: "0px 10px 20px 0px", md: '0px 20px 20px 0px' }, '& input': { fontSize: { xs: '0.75rem', md: '1rem' } } }}>
                    <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>Withdraw </span>Funds</Typography>
                    <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                        <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Payment Method:</Typography>
                        <select name="cars" id="cars" style={{ background: 'transparent', color: 'white', border: '1px solid gray', padding: '10px', outline: 'none', width: '100%', borderRadius: '5px', fontWeight: '600' }} value={wmethod} onChange={(e) => setwmethod(e.target.value)}>
                            <option value="USDT (TRC20) Address" style={{ backgroundColor: '#242f3d' }}>USDT (TRC20)</option>
                            <option value="Binance Pay ID" style={{ backgroundColor: '#242f3d' }}>Binance Pay ID</option>
                        </select>
                    </Stack>

                    <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                        <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Amount:</Typography>
                        <Box sx={{ border: '1px solid gray', width: '100%', borderRadius: '5px', }}>
                            <input key="country" type="number" style={{ background: 'transparent', color: 'white', border: 'none', padding: '10px', outline: 'none', width: '95%', fontWeight: '600' }} value={wamount} onChange={(e) => { setwamount(e.target.value) }} />
                        </Box>
                    </Stack>

                    <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                        <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>{wmethod}:</Typography>
                        <Box sx={{ border: '1px solid gray', width: '100%', borderRadius: '5px', }}>
                            <input key="country" type="text" style={{ background: 'transparent', color: 'white', border: 'none', padding: '10px', outline: 'none', width: '95%', fontWeight: '600' }} value={waddress} onChange={(e) => { setwaddress(e.target.value) }} />
                        </Box>
                    </Stack>
                    <Stack direction="row" sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', width: { xs: '100%', md: '90%' } }}>
                        <Stack direction="row" sx={{ gap: '10px', alignItems: 'center' }}>
                            <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={handlewithdraw} disabled={isLoading}>
                                {!isLoading1 && <Typography sx={{ fontSize: { xs: '12px', md: '16px' }, textTransform: 'capitalize' }}>Withdraw</Typography>}
                                {isLoading1 && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                            </Button>
                            {wmethod === "USDT (TRC20) Address" && <Typography sx={{ fontSize: { xs: '0.75rem' } }}>(Fee: $1)</Typography>}
                        </Stack>
                        <Stack onClick={() => setswithdraws(prev => !prev)} direction="row" sx={{ alignItems: 'center', color: 'rgba(244,67,54,1)', cursor: 'pointer', '& p': { fontSize: { xs: '0.8rem !important', md: '1rem !important' } } }}>
                            <Typography>Withdraw Record</Typography>
                            <KeyboardArrowDownIcon sx={{ fontSize: { xs: "16px", md: '24px' } }} />
                        </Stack>
                    </Stack>
                    <Stack sx={{ width: '100%', transform: sdwithdraws ? 'scaleY(1)' : 'scaleY(0)', height: sdwithdraws ? 'auto' : '0px', transition: 'transform 0.2s, height 1s' }}>
                        <Stack direction="row" sx={{ minWidth: '100%' }}>
                            <Typography sx={{ flex: 1, textAlign: 'center', color: 'gray', padding: "10px 0px", fontSize: { xs: '0.8rem', sm: '1rem' } }}>{'Amount'}</Typography>
                            <Typography sx={{ flex: 1, textAlign: 'center', color: 'gray', padding: "10px 0px", fontSize: { xs: '0.8rem', sm: '1rem' } }}>{'Date'}</Typography>
                            <Typography sx={{ flex: 1, textAlign: 'center', color: 'gray', padding: "10px 0px", fontSize: { xs: '0.8rem', sm: '1rem' } }}>{'Time'}</Typography>
                            <Typography sx={{ flex: 1, textAlign: 'center', color: 'gray', padding: "10px 0px", fontSize: { xs: '0.8rem', sm: '1rem' } }}>{'Status'}</Typography>
                        </Stack>
                        <Divider sx={{ color: 'gray' }} />
                        {withdraws.length > 0 && withdraws.map(withdraw => {
                            return (
                                <>
                                    <Stack direction="row" sx={{ minWidth: '100%' }}>
                                        <Typography sx={{ flex: 1, textAlign: 'center', fontSize: { xs: "0.75rem !important", md: '1rem !important' }, padding: "10px 0px" }}>${withdraw.amount}</Typography>
                                        <Typography sx={{ flex: 1, textAlign: 'center', fontSize: { xs: "0.75rem !important", md: '1rem !important' }, padding: "10px 0px" }}>{withdraw.createdat.slice(0, 10)}</Typography>
                                        <Typography sx={{ flex: 1, textAlign: 'center', fontSize: { xs: "0.75rem !important", md: '1rem !important' }, padding: "10px 0px" }}>{withdraw.createdat.slice(11, 16)} </Typography>
                                        <Typography sx={{ flex: 1, textAlign: 'center', fontSize: { xs: "0.75rem !important", md: '1rem !important' }, padding: "10px 0px", color: () => setclr(withdraw.status) }}>{withdraw.status}</Typography>
                                    </Stack>
                                    <Divider sx={{ color: 'gray' }} />
                                </>
                            )
                        })}
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, color: 'gray', textAlign: 'center', padding: '10px' }}>No more data</Typography>
                    </Stack>
                </Stack>
            </>
            }
        </>
    );
}

export default Wallet;