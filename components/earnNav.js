import { Avatar, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useEffect, useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
const EarnNav = ({setopen,selected}) => {
    const [title,settitle] = useState('Dashboard')
    useEffect(()=>{
        switch (selected) {
            case 1:
                settitle('Dashboard')
                break;
            case 2:
                settitle('Team')
                break;
            case 3:
                settitle('Wallet')
                break;
            case 4:
                settitle('Membership')
                break; 
            case 5:
                settitle('Support')
                break;    
            case 6:
                settitle('Settings')
                break; 
            default:
                break;
        }
    },[selected])
    return ( 
        <>
            <Stack direction="row" sx={{maxWidth:'100vw',justifyContent:'space-between',backgroundColor:{xs:'#242f3d',md:'inherit'}}}>
                <Stack direction="row" sx={{padding:{xs:'10px',md:"20px 50px"},justifyContent:'space-between',width:'100%',alignItems:'center'}}>
                    <IconButton onClick={()=>{setopen(prev=>!prev)}} sx={{display:{xs:"flex",md:'none'}}}>
                        <MenuOutlinedIcon sx={{color:'white'}}/>
                    </IconButton>
                    <Typography sx={{fontWeight:'bold',fontSize:{xs:'1rem',md:"1.5rem"}}}>
                        {title}
                    </Typography>
                    <Stack direction="row" sx={{gap:"10px",cursor:'pointer'}} onClick={()=>{localStorage.removeItem('e4a');window.location.reload()}}>
                        <Typography sx={{color:'#e50914',display:{xs:"none",md:'flex'}}}>Logout</Typography>
                        <LogoutIcon sx={{color:'#e50914'}} />
                    </Stack>
                </Stack>
            </Stack>
        </>
     );
}
 
export default EarnNav;