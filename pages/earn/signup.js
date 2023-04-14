import { Box, Button, CircularProgress, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
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
import Head from "next/head";
import LiveTvIcon from '@mui/icons-material/LiveTv';

const SignUPP = () => {
    const [loading, setloading] = useState(true)
    const router = useRouter()
    const md = useMediaQuery('(min-width:800px)');
    React.useEffect(() => {
        if (localStorage.getItem('e4a')) {
            router.push('/earn')
        } else {
            setloading(false)
        }
    }, [])
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
            <Head>
                <title>E4A Referal Program</title>
                <meta name="description" content={`Entertainment4All is a movies platform that gives free access to latest movies to everyone. Join our referal program, invest $20 and get a chance to earn a decent amount of money...`} />
                <meta property="og:title" content='E4A Referal Program' />
                <meta property="og:description" content={`Entertainment4All is a movies platform that gives free access to latest movies to everyone. Join our referal program, invest $20 and get a chance to earn a desent amount of money...`} />
                <meta property="og:url" content={`https://e4a.live/earn`} />
                <meta
                    name="keywords"
                    content={`e4a referal program, earn money, e4a earn`}
                />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/earn.ico" />
            </Head>
            <main>

                {!loading &&
                    <ThemeProvider theme={theme}>
                        <Link href="/">
                            <IconButton sx={{ width: { xs: '28px', md: '40px' }, height: { xs: '28px', md: '40px' }, zIndex: 100, position: 'fixed', bottom: { xs: '10%' }, right: { xs: '10%', md: '5%' }, background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", boxShadow: "10px 10px 50px 10px rgba(0,0,0,1)" }}>
                                <LiveTvIcon sx={{ color: 'white', width: { xs: '18px', md: '26px' }, height: { xs: '18px', md: '26px' },transform:'translateY(-2px)' }} />
                            </IconButton>
                        </Link>
                        <Stack sx={{ backgroundColor: '#17212b !important', minHeight: '100vh' }}>
                            <Stack sx={{ '& .css-19kzrtu': { padding: '0px' }, padding: { xs: "10px", md: "30px" }, borderRadius: '10px', minHeight: { xs: '90vh', md: '80vh' }, maxHeight: { xs: '90vh', md: '80vh' }, overflowY: 'scroll', backgroundColor: '#2a3842', alignItems: 'center', '&::-webkit-scrollbar': { display: 'none' }, width: { xs: '90%', md: '60%' }, margin: 'auto' }}>
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
            </main>
        </>
    );
}

export default SignUPP;