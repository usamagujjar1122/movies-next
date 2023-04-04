import { Avatar, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useEffect, useState } from "react";
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
                settitle('Account Settings')
                break;
            default:
                break;
        }
    },[selected])
    return ( 
        <>
            <Stack direction="row" sx={{width:'100%',justifyContent:'space-between',backgroundColor:{xs:'#242f3d',md:'inherit'}}}>
                <Stack direction="row" sx={{padding:{xs:'10px',md:"20px 50px"},justifyContent:'space-between',width:'100%',alignItems:'center'}}>
                    <IconButton onClick={()=>{setopen(prev=>!prev)}} sx={{display:{xs:"flex",md:'none'}}}>
                        <MenuOutlinedIcon sx={{color:'white'}}/>
                    </IconButton>
                    <Typography sx={{fontWeight:'bold',fontSize:{xs:'1rem',md:"1.5rem"}}}>
                        {title}
                    </Typography>
                    <Stack direction="row">
                    <Avatar></Avatar>
                    </Stack>
                </Stack>
            </Stack>
        </>
     );
}
 
export default EarnNav;