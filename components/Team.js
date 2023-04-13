import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { LinearProgress, Stack, ThemeProvider, Typography } from '@mui/material';
import theme from './theme';
import Referal from './Referals';
import axios from 'axios';
import { URL } from './url';
const Team = () => {
    const [isLoading,setisLoading] = React.useState(true)
    const [refs,setrefs] = React.useState()
    React.useEffect(()=>{
        const myFun = async () => {
            const res = await axios.post(`${URL}/user/referals`, {token : localStorage.getItem('e4a')})
            if(res.data.success){
            setrefs(res.data.data)
            setisLoading(false)
            }
        }
        myFun()
    },[])
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
        <ThemeProvider theme={theme}>
            {isLoading && <>
                <Stack sx={{ minWidth: '100%', minHeight: '100vh', backgroundColor: 'rgba(0,0,0,0.25)' }}>
                        <LinearProgress color="error" />
                    </Stack>
                </>}
            {!isLoading && refs && 
            <Box sx={{position:'relative',marginBottom:{xs:'10px',md:'20px'}}}>
            <Stack sx={{ maxWidth:{xs:'90vw',sm:'93vw',md:'100%'},margin:'0px auto',minHeight:'88vh',marginRight:{md:'20px'}, bgcolor: '#242f3d',borderRadius:"5px",'& .css-19kzrtu':{padding:'10px 5px !important'} }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    aria-label="scrollable force tabs example"
                    textColor="primary" 
                    indicatorColor="primary"
                    sx={{maxWidth:{xs:'100vw',md:'75vw'},'& button':{color:'white'},'& button.Mui-selected':{fontWeight:'bold'},'& .MuiTabs-flexContainer': { justifyContent: {lg:'center'},left:'0%' } }}
                >
                    <Tab label={`Lv1 (${refs[0].length})`} sx={{minWidth:'30px'}} />
                    <Tab label={`Lv2 (${refs[1].length})`} />
                    <Tab label={`Lv3 (${refs[2].length})`} />
                    <Tab label={`Lv4 (${refs[3].length})`} />
                    <Tab label={`Lv5 (${refs[4].length})`} />
                    <Tab label={`Lv6 (${refs[5].length})`} />
                    <Tab label={`Lv7 (${refs[6].length})`} />
                    <Tab label={`Lv8 (${refs[7].length})`} />
                </Tabs>
                <TabPanel value={value} index={0} sx={{'&>div':{padding:'0px !important'}}}>
                <Referal referals={refs[0]}/>
                </TabPanel>
                <TabPanel value={value} index={1} sx={{}} >
                <Referal referals={refs[1]}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                <Referal referals={refs[2]}/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                <Referal referals={refs[3]}/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                <Referal referals={refs[4]}/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                <Referal referals={refs[5]}/>
                </TabPanel>
                <TabPanel value={value} index={6}>
                <Referal referals={refs[6]}/>
                </TabPanel>
                <TabPanel value={value} index={7}>
                <Referal referals={refs[7]}/>
                </TabPanel>
            </Stack>
            </Box>
            }
        </ThemeProvider>
        </>
    );
}

export default Team;