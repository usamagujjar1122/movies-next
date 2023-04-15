import { Alert, Box, Button, LinearProgress, Grid, Input, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import Buttonn from "./Button";
import axios from "axios";
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import { URL } from "./url";

const Membership = ({setselected}) => {
    const [user, setUser] = useState()
    const [discount, setDiscount] = useState()
    const [refs, setRefs] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const myFun = async () => {
            const res = await axios.post(`${URL}/user/loaduser`, { token: localStorage.getItem('e4a') })
            if (res.data.success) {
                switch (res.data.data.vip) {
                    case 0:
                        setDiscount(0)
                        break;
                    case 1:
                        setDiscount(20)
                        break;
                    case 2:
                        setDiscount(50)
                        break;
                    default:
                        break;
                }
                setUser(res.data.data)
                setRefs(res.data.refs)
                setLoading(false)
            }
        }
        myFun()
    }, [])
    return (
        <>
            {loading && <>
             <Stack sx={{ minWidth: '100%', minHeight: '100vh', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <LinearProgress color="error" />
                    </Stack>
             </>}
            {user && !loading && <>
            <Stack sx={{marginBottom:'20px',minHeight:'90vh'}}>
                <Stack sx={{ margin: { xs: "0px 10px", md: '0px 20px 0px 0px' } }}>
                    <Grid container sx={{ alignItems: 'center' }} spacing={2} >
                        <Grid item xs={12} md={4}>
                            <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                                <AttachMoneyOutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                                <Stack>
                                    <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>Balance</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{user.balance}</Typography>
                                    <Typography sx={{ fontSize: "0.85rem" , cursor: 'pointer', '&:hover': { color: '#e50914' }}} onClick={() => setselected(2)}>Deposit</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack direction="row" sx={{ alignItems: 'center', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 10px', md: "26px 10px" } }}>
                                <CardMembershipOutlinedIcon sx={{ color: '#e50914', fontSize: "3rem" }} />
                                <Stack>
                                    <Typography sx={{ color: 'gray', fontSize: "0.75rem" }}>VIP Level</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{user.vip}</Typography>
                                    <Typography sx={{ fontSize: "0.85rem" }}>Upgrade Now</Typography>
                                </Stack>

                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
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
                </Stack>
                <Typography sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, fontWeight: 'bold', textAlign: 'center', margin: '20px 0px' }}>Upgrade <span style={{ color: '#e50914' }}> Now </span></Typography>
                <Stack sx={{ margin: { xs: "0px 10px", md: '0px 20px 0px 0px' } }}>
                    <Grid container sx={{ alignItems: 'center' }} spacing={2} >
                        <Grid item xs={12} md={4}>
                            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 20px', md: "26px 20px" } }}>
                                <Typography sx={{ color: '#e50914', fontSize: "2rem", fontWeight: 'bold' }} >VIP1</Typography>
                                <Buttonn price={20} level={1} vip={user.vip} />
                                {/* <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>$10</Typography> */}
                            </Stack>
                        </Grid>
                        {/* <Grid item xs={12} md={4}>
                            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 20px', md: "26px 20px" } }}>
                                <Stack sx={{gap:'0px'}}>
                                <Typography sx={{ color: '#e50914', fontSize: "2rem", fontWeight: 'bold' }} >VIP2</Typography>
                                <Typography sx={{fontSize:'0.75rem'}}>Extra 10% bonus on direct referals</Typography>
                                </Stack>
                                <Buttonn price={user.vip<2 ? 50-discount : 50} level={2} vip={user.vip}/> */}
                        {/* <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>$10</Typography> */}
                        {/* </Stack>
                        </Grid> */}
                        {/* <Grid item xs={12} md={4}>
                            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: '20px', backgroundColor: '#242f3d', borderRadius: "10px", padding: { xs: '16px 20px', md: "26px 20px" } }}>
                            <Stack sx={{gap:'0px'}}>
                                <Typography sx={{ color: '#e50914', fontSize: "2rem", fontWeight: 'bold' }} >VIP3</Typography>
                                <Typography sx={{fontSize:'0.75rem'}}>Extra 15% bonus on direct referals</Typography>
                                </Stack>
                                <Buttonn price={user.vip<3 ? 80-discount : 80} level={3} vip={user.vip}/> */}
                        {/* <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>$10</Typography> */}
                        {/* </Stack>
                        </Grid> */}

                    </Grid>
                </Stack>
                </Stack>
            </>}
        </>
    );
}

export default Membership;