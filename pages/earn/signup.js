import { Box, Button, CircularProgress, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../components/theme';
import Login from "../../components/Login";
import Register from "../../components/Register";
import { useRouter } from "next/router";

const SignUPP = () => {
    const [loading,setloading] = useState(true)
    const router = useRouter()
    const md = useMediaQuery('(min-width:800px)');
    React.useEffect(()=>{
        if(localStorage.getItem('e4a')){
            router.push('/earn')
        } else {
            setloading(false)
        }
    },[])
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
        <>
        {!loading &&
        <ThemeProvider theme={theme}>
            <Stack sx={{ backgroundColor: '#17212b !important', minHeight: '100vh' }}>
                <Stack sx={{ '& .css-19kzrtu':{padding:'0px'},padding: { xs: "10px", md: "30px" }, borderRadius: '10px',minHeight:'80vh',maxHeight:'80vh',overflowY:'scroll', backgroundColor: '#2a3842', alignItems: 'center','&::-webkit-scrollbar':{display:'none'}, width: { xs: '90%', md: '60%' }, margin: 'auto' }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ '& .MuiTabs-flexContainer': { justifyContent: 'space-around' } }} textColor="primary" indicatorColor="primary">
                                <Tab label="Register" sx={{ color: 'white' }} {...a11yProps(0)} />
                                <Tab label="Login" sx={{ color: 'white' }} {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0} >
                            {/* ---------------------------Register-------------------- */}
                            <Register />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            {/* ---------------------------Login-------------------------- */}
                            <Login />
                        </TabPanel> 
                    </Box>

                </Stack>
            </Stack>
        </ThemeProvider>
        }
        </>
    );
}

export default SignUPP;