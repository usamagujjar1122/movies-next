import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Stack, ThemeProvider, Typography } from '@mui/material';
import theme from './theme';
import Referal from './Referals';
const Team = () => {
    const referals = [
    ]
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
            <Stack sx={{maxWidth:{xs:'100vw',md:'100%'}}}>
            <Stack sx={{ maxWidth: { xs: '100%',md:'100%'}, bgcolor: '#242f3d',margin:"0px 10px",borderRadius:"5px",'& .css-19kzrtu':{padding:'10px 10px 10px !important'} }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    aria-label="scrollable force tabs example"
                    textColor="primary" 
                    indicatorColor="primary"
                    sx={{'& button':{color:'white'},'& button.Mui-selected':{fontWeight:'bold'},'& .MuiTabs-flexContainer': { justifyContent: {md:'space-around'} } }}
                >
                    <Tab label="LVL1 (100)" sx={{minWidth:'30px'}} />
                    <Tab label="LVL2 (0)" />
                    <Tab label="LVL3 (0)" />
                    <Tab label="LVL4 (0)" />
                    <Tab label="LVL5 (0)" />
                    <Tab label="LVL6 (0)" />
                    <Tab label="LVL7 (0)" />
                </Tabs>
                <TabPanel value={value} index={0} sx={{'& .MuiBox-root':{padding:'0px !important'}}}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} sx={{}} >
                    <Referal referals={referals}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Item Seven
                </TabPanel>
            </Stack>
            </Stack>
        </ThemeProvider>
        </>
    );
}

export default Team;