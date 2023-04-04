import { Box, Button, CircularProgress, Stack, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
const Profile = () => {
    const [email, setemail] = useState()
    const [otp, setotp] = useState()
    const [referedby, setreferedby] = useState()
    const [password, setpassword] = useState()
    const [cpassword, setcpassword] = useState()
    const md = useMediaQuery('(min-width:800px)');
    const [isLoading, setisLoading] = useState(false)
    const handleclick = () => {
        console.log(email)
    }
    return (
        <>
            <Stack sx={{ backgroundColor: '#242f3d', borderRadius: '10px', padding: "20px", alignItems: 'center', gap: '20px', margin: { xs: "0px 20px 10px", md: '0px' }, '& input': { fontSize: { xs: '0.75rem', md: '1rem' } } }}>
                <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>Edit </span>Profile</Typography>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "12px", md: '16px' } }}>Email:</Typography>
                    <input key='email' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray',  padding: '10px', outline: 'none', width: '97%', borderRadius: '5px' }} value={email} onChange={(e) => { setemail(e.target.value) }} />
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Country:</Typography>
                    <input key='referedby' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray',  padding: '10px', outline: 'none', width: '97%', borderRadius: '5px', fontWeight: '600' }} value={referedby} onChange={(e) => { setreferedby(e.target.value) }} />
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Payment Method:</Typography>
                    <select name="cars" id="cars" style={{ background: 'transparent', color: 'white', border: '1px solid gray', padding: '10px', outline: 'none', width: '100%', borderRadius: '5px', fontWeight: '600' }}>
                        <option value="volvo" style={{ backgroundColor: '#242f3d' }}>Volvo</option>
                        <option value="saab" style={{ backgroundColor: '#242f3d' }}>Saab</option>
                        <option value="mercedes" style={{ backgroundColor: '#242f3d' }}>Mercedes</option>
                        <option value="audi" style={{ backgroundColor: '#242f3d' }}>Audi</option>
                    </select>
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Payment Account:</Typography>
                    <input key='referedby' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray',  padding: '10px', outline: 'none', width: '97%', borderRadius: '5px', fontWeight: '600' }} value={referedby} onChange={(e) => { setreferedby(e.target.value) }} />
                </Stack>

                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', width: { xs: '100%', md: '90%' } }}>
                    <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={handleclick} disabled={isLoading}>
                        {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' }, textTransform: 'capitalize' }}>Save Changes</Typography>}
                        {isLoading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                    </Button>
                </Stack>
            </Stack>
            <Stack sx={{ backgroundColor: '#242f3d', borderRadius: '10px', padding: "20px", alignItems: 'center', gap: '20px', margin: { xs: "0px 20px 10px", md: '0px' }, '& input': { fontSize: { xs: '0.75rem', md: '1rem' } } }}>
            <Typography sx={{ marginTop: '20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>Change </span>Password</Typography>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Password:</Typography>
                    <input key='password' type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray',  padding: '10px', outline: 'none', width: '97%', borderRadius: '5px', fontWeight: '600' }} value={password} onChange={(e) => { setpassword(e.target.value) }} />
                </Stack>
                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                    <Typography sx={{ width: { xs: '100%', md: '30%' }, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Confirm Password:</Typography>
                    <input key="cpassword" type="text" style={{ background: 'transparent', color: 'white', border: '1px solid gray',  padding: '10px', outline: 'none', width: '97%', borderRadius: '5px', fontWeight: '600' }} value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                </Stack>
                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', width: { xs: '100%', md: '90%' } }}>
                    <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={handleclick} disabled={isLoading}>
                        {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' }, textTransform: 'capitalize' }}>Change</Typography>}
                        {isLoading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}

export default Profile;