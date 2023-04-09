import { Avatar, CircularProgress, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import { useEffect, useState } from "react";
import axios from "axios";
const Dashboard = () => {
    const md = useMediaQuery('(min-width:900px)');
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [refs, setRefs] = useState()
    useEffect(() => {
        const myFun = async ()=> {
        const res = await axios.post('http://localhost:5000/user/loaduser', { token: localStorage.getItem('e4a') })
        if (res.data.success) {
            setUser(res.data.data)
            setRefs(res.data.refs)
            setLoading(false)
        }
    }
    myFun()
    }, [])
    return (
        <>
            <Stack sx={{ margin: "0px 10px", minHeight: '100vh' }}>
                {loading && <> <CircularProgress sx={{ position: 'absolute', top: "50%", left: '50%', transform: 'translate(-50%,-50%)' }} /> </>}
                {user && !loading &&
                    <Grid container sx={{ alignItems: 'center', marginBottom: '10px' }} spacing={2} >
                        <Grid item xs={12} md={3}>
                            <Stack sx={{ alignItems: 'center', gap: "10px", justifyContent: 'center' }}>
                                <Avatar />
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
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>VIP0</Typography>
                                    <Typography sx={{ fontSize: "0.85rem" }}>Request</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                                <AttachMoneyOutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                                <Stack>
                                    <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>Balance</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{user.balance}</Typography>
                                    <Typography sx={{ fontSize: "0.85rem" }}>Deposit</Typography>

                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                                <Groups3OutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                                <Stack>
                                    <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>Direct Referals</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{refs.length}</Typography>
                                    <Typography sx={{ fontSize: "0.85rem" }}> View</Typography>

                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                }
            </Stack>

        </>
    );
}

export default Dashboard;