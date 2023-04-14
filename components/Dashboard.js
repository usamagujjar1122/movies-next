import { Avatar, LinearProgress, Grid, IconButton, Stack, Typography, useMediaQuery, Alert } from "@mui/material";
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import { useEffect, useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import axios from "axios";
import { URL } from "./url";
const Dashboard = ({ setselected }) => {
    const md = useMediaQuery('(min-width:900px)');
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [refs, setRefs] = useState()
    const [showalert, setshowalert] = useState(false)
    const [alertmsg, setaletrtmsg] = useState('')
    const [alerttype, setaletrttype] = useState('error')
    useEffect(() => {
        const myFun = async () => {
            const res = await axios.post(`${URL}/user/loaduser`, { token: localStorage.getItem('e4a') })
            if (res.data.success) {
                setUser(res.data.data)
                setRefs(res.data.refs)
                setLoading(false)
            } else {
                localStorage.removeItem('e4a')
                window.location.reload()
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
    let rewards = [
        { dollar: 5, percentage: 25 },
        { dollar: 3, percentage: 15 },
        { dollar: 2, percentage: 10 },
        { dollar: 1.6, percentage: 8 },
        { dollar: 1.2, percentage: 6 },
        { dollar: 0.8, percentage: 4 },
        { dollar: 0.6, percentage: 3 },
        { dollar: 0.4, percentage: 2 },
        { dollar: 0.2, percentage: 1 },
        { dollar: 0.2, percentage: 1 },
    ]
    return (
        <>
            <Alert sx={{ position: 'fixed', top: '7%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: showalert? 100: -1 , opacity: showalert ? 1 : 0, transition: 'opacity 0.4s,z-index 1s', fontSize: { xs: '0.8rem', md: '1rem' }, minWidth: { xs: '80vw', md: 'inherit' }, alignItems: 'center' }} severity={alerttype}>{alertmsg}</Alert> 
            <Stack sx={{ margin: "0px 10px", minHeight: '100vh' }}>
                {loading && <>
                    <Stack sx={{ minWidth: '100%', minHeight: '100vh', backgroundColor: 'rgba(0,0,0,0.25)' }}>
                        <LinearProgress color="error" />
                    </Stack>
                </>}
                {user && !loading && <>
                    <Grid container sx={{ alignItems: 'center', marginBottom: '10px' }} spacing={2} >
                        <Grid item xs={12} md={3}>
                            <Stack sx={{ alignItems: 'center', gap: "10px", justifyContent: 'center' }}>
                                <Avatar src={'img/image.png'} sx={{ width: { xs: "44px" }, height: { xs: '44px' } }} />
                                <Stack direction="column">
                                    <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>{user.name}</Typography>
                                    <Typography sx={{ color: 'gray', fontSize: "0.75rem", textAlign: 'center' }}>Welcome back!</Typography>

                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                                <CardMembershipOutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                                <Stack>
                                    <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>Membership</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>VIP{user.vip}</Typography>
                                    <Typography sx={{ fontSize: "0.85rem", cursor: 'pointer', '&:hover': { color: '#e50914' } }} onClick={() => setselected(4)}>Upgrade</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                                <AttachMoneyOutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                                <Stack>
                                    <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>Balance</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{user.balance}</Typography>
                                    <Typography sx={{ fontSize: "0.85rem", cursor: 'pointer', '&:hover': { color: '#e50914' } }} onClick={() => setselected(3)}>Deposit</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                                <Groups3OutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                                <Stack>
                                    <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>Direct Referals</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{refs.length}</Typography>
                                    <Typography sx={{ fontSize: "0.85rem", cursor: 'pointer', '&:hover': { color: '#e50914' } }} onClick={() => setselected(2)}> View</Typography>

                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stack direction="row" sx={{ margin: '20px 0px', alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 20px" } }}>
                        <Stack direction={md ? "row" : 'column'} sx={{ position: 'relative', flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '5px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '20%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Referal link:</Typography>
                            <input key="lpassword" type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray', width: '70%', padding: '10px', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={`https://e4a.live/earn?ref=${user.username}`} readOnly />
                            <IconButton sx={{ position: 'absolute', right: { xs: '0px', sm: '1%', md: '0%' }, bottom: "2%", textTransform: 'capitalize' }} onClick={() => copy(`https://e4a.live/earn?ref=${user.username}`)}>
                                <ContentCopyIcon sx={{ color: '#e50914' }} />
                            </IconButton>
                        </Stack>
                    </Stack>
                    
                    <Stack sx={{ margin: {xs:'20px 0px 10px 0px',md:'20px 0px'}, alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 20px" } }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: "1.25rem", md: "1.5rem" } }}> <span style={{ color: '#e50914' }}> Referal </span> Rewards</Typography>
                        <Stack direction="row" sx={{ width: '100%' }}>
                            <Typography sx={{ flex: 1, textAlign: 'center', color: 'gray', padding: "10px 0px", fontSize: { xs: '0.8rem', sm: '1rem' } }}>{'Level'}</Typography>
                            <Typography sx={{ flex: 1, textAlign: 'center', color: 'gray', padding: "10px 0px", fontSize: { xs: '0.8rem', sm: '1rem' } }}>{'Reward (%)'}</Typography>
                            <Typography sx={{ flex: 1, textAlign: 'center', color: 'gray', padding: "10px 0px", fontSize: { xs: '0.8rem', sm: '1rem' } }}>{'Reward ($)'}</Typography>
                        </Stack>
                        {rewards.map((item, index) => (
                            <Stack direction="row" sx={{ width: '100%' }}>
                                <Typography sx={{ flex: 1, textAlign: 'center', padding: "0px 0px", fontSize: { xs: '0.8rem', sm: '1rem' } }}>Lv{index + 1}</Typography>
                                <Typography sx={{ flex: 1, textAlign: 'center', padding: "0px 0px", fontSize: { xs: '0.8rem', sm: '1rem' }, color: '#e50914' }}>{item.percentage}%</Typography>
                                <Typography sx={{ flex: 1, textAlign: 'center', padding: "0px 0px", fontSize: { xs: '0.8rem', sm: '1rem' }, color: '#e50914' }}>${item.dollar}</Typography>
                            </Stack>
                        ))}
                    </Stack>
                    <Stack sx={{ margin: {xs:'20px 0px 20px 0px',md:'20px 0px'}, alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 20px" } }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: "1.25rem", md: "1.5rem" } }}> Extra Bonus <span style={{ color: '#e50914' }}>  Offers</span></Typography>
                        <Stack  sx={{ width: '100%','&>p':{fontSize:{xs:'0.8rem',md:'1rem'}} }}>
                            <Typography>
                                <span style={{color:'#e50914',fontWeight:'bold'}}>1.</span> Add 3 direct VIP1 referals in the same day to get $5 bonus.
                            </Typography>
                            <Typography>
                                <span style={{color:'#e50914',fontWeight:'bold'}}>2.</span> Add 5 direct VIP1 referals in the same day to get $10 bonus.
                            </Typography>
                            <Typography sx={{fontSize:{xs:'1rem',md:'1.25rem !important'},marginTop:'10px'}}>
                                <span style={{color:'#e50914',fontWeight:'bold'}}>Note:</span>                            </Typography>
                            <Typography sx={{marginLeft:'10px'}}>
                                <span style={{color:'#e50914',fontWeight:'bold',marginRight:'5px'}}>|</span>To claim your bonus, please contact us at telegram @e4a_official. 
                            </Typography>
                            <Typography sx={{marginLeft:'10px'}}>
                            <span style={{color:'#e50914',fontWeight:'bold',marginRight:'5px'}}>|</span>You must add 3 / 5 VIP1 members in the same day to get your bonus.
                            </Typography>
                            <Typography sx={{marginLeft:'10px'}}>
                            <span style={{color:'#e50914',fontWeight:'bold',marginRight:'5px'}}>|</span> Day refreshes at 00:00 UTC.
                            </Typography>
                        </Stack>
                       
                    </Stack>
                </>
                }
            </Stack>


        </>
    );
}

export default Dashboard;