import { IconButton, Stack, Typography, useMediaQuery } from "@mui/material"
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
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CloseIcon from '@mui/icons-material/Close';
const EarnSide = ({open,selected,setselected,setopen}) => {
    const matches = useMediaQuery('(min-width:800px)');
    return (
        <>
                <Box sx={{position:'relative', flex:1,width: '100%',zIndex:2, maxWidth: 260,  backgroundColor: '#242f3d',marginRight:'20px',position:{xs:'absolute',  md:'relative'},left:{xs:open?'0%': '-85%',sm:open?'0%': '-60%',md:'0%'},transition:'left 0.2s',minHeight:'100vh'}}>
                <IconButton sx={{position:'absolute',right:'0%',top:'2%',display:{xs:'flex',md:'none'}}} onClick={()=>setopen(false)}>
                    <CloseIcon sx={{color:'#e50914'}}/>
                </IconButton>
                <Link href="/make-money/earn" style={{ textDecoration: 'none',textAlign:'center',justifyContent:'center' }}><Typography sx={{ fontSize: { xs:'1.25rem',md: '2rem' }, color: 'white', fontWeight: 'bold', margin: '20px 20px 0px',  cursor: 'pointer' }}>Earn<span style={{ color: '#e50914' }}>4All</span></Typography></Link>
                    <nav aria-label="main mailbox folders">
                        <List  sx={{ '& span': {fontSize:{xs:'0.9rem !important',md:"1rem !important"}},'& svg': {fontSize:{xs:'1.25rem !important',md:"1.5rem !important"}} }}> 
                            <ListItem disablePadding className={selected==1?'active' : ''} sx={{'&.active':{color:"red",'& svg':{color:'red'}}}} onClick={()=>{setselected(1);setopen(false)}}>
                                <ListItemButton sx={{'&>.MuiListItemIcon-root':{minWidth:{xs:"36px",md:"56px"}}}}>
                                    <ListItemIcon>
                                        <DashboardOutlinedIcon sx={{color:'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding className={selected===2?'active' : ''} sx={{'&.active':{color:"red",'& svg':{color:'red'}}}} onClick={()=>{setselected(2);setopen(false)}}>
                                <ListItemButton sx={{'&>.MuiListItemIcon-root':{minWidth:{xs:"36px",md:"56px"}}}}>
                                    <ListItemIcon>
                                        <Groups2OutlinedIcon sx={{color:'white'}} />
                                    </ListItemIcon>
                                    <ListItemText primary="Team" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding className={selected===3?'active' : ''} sx={{'&.active':{color:"red",'& svg':{color:'red'}}}} onClick={()=>{setselected(3);setopen(false)}}>
                                <ListItemButton sx={{'&>.MuiListItemIcon-root':{minWidth:{xs:"36px",md:"56px"}}}}>
                                    <ListItemIcon>
                                        <AttachMoneyOutlinedIcon sx={{color:'white'}} />
                                    </ListItemIcon>
                                    <ListItemText primary="Wallet" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding className={selected===4?'active' : ''} sx={{'&.active':{color:"red",'& svg':{color:'red'}}}} onClick={()=>{setselected(4);setopen(false)}}>
                                <ListItemButton sx={{'&>.MuiListItemIcon-root':{minWidth:{xs:"36px",md:"56px"}}}}>
                                    <ListItemIcon>
                                        <SettingsOutlinedIcon sx={{color:'white'}} />
                                    </ListItemIcon>
                                    <ListItemText primary="Settings" />
                                </ListItemButton>
                            </ListItem>
                           
                        </List>
                    </nav>
                    <Divider />
                    <nav aria-label="secondary mailbox folders">
                       
                    </nav>
                </Box>
        </>
    );
}

export default EarnSide;