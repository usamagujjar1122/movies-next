import { Stack, Typography, useMediaQuery } from "@mui/material"
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Link from "next/link";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
const EarnSide = ({open,selected,setselected}) => {
    const matches = useMediaQuery('(min-width:800px)');
    return (
        <>
                <Box sx={{ flex:1,width: '100%',zIndex:2, maxWidth: 260,  backgroundColor: '#242f3d',marginRight:'20px',position:{xs:'absolute',  md:'relative'},left:{xs:open?'0%': '-85%',sm:open?'0%': '-60%',md:'0%'},transition:'left 0.5s',minHeight:'100vh'}}>
                <Link href="/make-money/earn" style={{ textDecoration: 'none',textAlign:'center',justifyContent:'center' }}><Typography sx={{ fontSize: { xs:'1.25rem',md: '2rem' }, color: 'white', fontWeight: 'bold', margin: '20px 20px 0px',  cursor: 'pointer' }}>Earn<span style={{ color: '#e50914' }}>4All</span></Typography></Link>
                    <nav aria-label="main mailbox folders">
                        <List  sx={{ '& span': {fontSize:{xs:'0.75rem !important',md:"1rem !important"}},'& svg': {fontSize:{xs:'1.25rem !important',md:"1.5rem !important"}} }}> 
                            <ListItem disablePadding className={selected==1?'active' : ''} sx={{'&.active':{color:"red",'& svg':{color:'red'}}}} onClick={()=>{setselected(1)}}>
                                <ListItemButton sx={{'&>.MuiListItemIcon-root':{minWidth:{xs:"36px",md:"56px"}}}}>
                                    <ListItemIcon>
                                        <DashboardOutlinedIcon sx={{color:'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding className={selected===2?'active' : ''} sx={{'&.active':{color:"red",'& svg':{color:'red'}}}} onClick={()=>{setselected(2)}}>
                                <ListItemButton sx={{'&>.MuiListItemIcon-root':{minWidth:{xs:"36px",md:"56px"}}}}>
                                    <ListItemIcon>
                                        <Groups2OutlinedIcon sx={{color:'white'}} />
                                    </ListItemIcon>
                                    <ListItemText primary="Team" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                    <Divider />
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Trash" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="#simple-list">
                                    <ListItemText primary="Spam" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </Box>
        </>
    );
}

export default EarnSide;