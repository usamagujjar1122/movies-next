import { Box, Button, CircularProgress, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const Register = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [cpassword, setcpassword] = useState()
    const [isLoading, setisLoading] = useState(false)
    const md = useMediaQuery('(min-width:800px)');
    const handleclick = () => {
        console.log(password)
    }



    // -------------------------TABS-------------------------- //
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <ThemeProvider theme={theme}>
            <Stack sx={{ backgroundColor: '#17212b !important', minHeight: '100vh' }}>
                <Stack sx={{ '& .css-19kzrtu':{padding:'0px'},padding: { xs: "10px", md: "30px" }, borderRadius: '10px', backgroundColor: '#2a3842', alignItems: 'center', width: { xs: '90%', md: '60%' }, margin: 'auto' }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ '& .MuiTabs-flexContainer': { justifyContent: 'space-around' } }} textColor="primary" indicatorColor="primary">
                                <Tab label="Register" sx={{ color: 'white' }} {...a11yProps(0)} />
                                <Tab label="Login" sx={{ color: 'white' }} {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0} >
                            {/* ---------------------------Register-------------------- */}
                            <Stack sx={{ alignItems: 'center', gap: '20px', }}>
                                <Typography sx={{marginTop:'20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>REGISTRATIOPN </span>FORM</Typography>
                                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                    <Typography sx={{ width: {xs:'100%',md:'30%'}, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Email:</Typography>
                                    <input type="text" style={{background:'transparent',color:'white',border:'1px solid gray', width: '70%', padding: '10px',  outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={email} onChange={(e) => { setemail(e.target.value) }} />
                                </Stack>
                                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                    <Typography sx={{ width: {xs:'100%',md:'30%'}, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Password:</Typography>
                                    <input type="text" style={{background:'transparent',color:'white',border:'1px solid gray', width: '70%', padding: '10px',  outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={password} onChange={(e) => { setpassword(e.target.value) }} />
                                </Stack>
                                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                    <Typography sx={{ width: {xs:'100%',md:'30%'}, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Confirm Password:</Typography>
                                    <input type="text" style={{background:'transparent',color:'white',border:'1px solid gray', width: '70%', padding: '10px',  outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                                </Stack>
                                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: { xs: '100%', md: '90%' } }}>
                                    <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={handleclick} disabled={isLoading}>
                                        {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }}>REGISTER</Typography>}
                                        {isLoading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                                    </Button>
                                    <Link href="/forgot" style={{ textDecoration: 'none' }}><Typography sx={{ color: 'rgba(244,67,54,1)', '&:hover': { color: 'white' }, cursor: 'pointer' }}>Retrive password?</Typography></Link>
                                </Stack>
                            </Stack>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            {/* ---------------------------Login-------------------------- */}
                            <Stack sx={{ alignItems: 'center', gap: '20px', }}>
                                <Typography sx={{marginTop:'20px', color: 'white', fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' }, whiteSpace: 'nowrap' }}><span style={{ color: '#e50914' }}>LOGIN </span>FORM</Typography>
                                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                    <Typography sx={{ width: {xs:'100%',md:'30%'}, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Email:</Typography>
                                    <input type="text" style={{background:'transparent',color:'white',border:'1px solid gray', width: '70%', padding: '10px',  outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={email} onChange={(e) => { setemail(e.target.value) }} />
                                </Stack>
                                <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                                    <Typography sx={{ width: {xs:'100%',md:'30%'}, color: 'white', fontSize: { xs: "14px", md: '16px' } }}>Password:</Typography>
                                    <input type="text" style={{background:'transparent',color:'white',border:'1px solid gray', width: '70%', padding: '10px',  outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={password} onChange={(e) => { setpassword(e.target.value) }} />
                                </Stack>
                                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: { xs: '100%', md: '90%' } }}>
                                    <Button sx={{ background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(229,9,20,1),rgba(244,67,54,1))" }, fontWeight: 'bold' }} onClick={handleclick} disabled={isLoading}>
                                        {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }}>LOGIN</Typography>}
                                        {isLoading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                                    </Button>
                                    <Link href="/forgot" style={{ textDecoration: 'none' }}><Typography sx={{ color: 'rgba(244,67,54,1)', '&:hover': { color: 'white' }, cursor: 'pointer',fontSize:{xs:"0.9rem",md:"1rem"} }}>Retrive password?</Typography></Link>
                                </Stack>
                            </Stack>
                        </TabPanel>
                    </Box>

                </Stack>
            </Stack>
        </ThemeProvider>
    );
}

export default Register;