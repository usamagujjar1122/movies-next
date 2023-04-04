import { Avatar, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
const EarnNav = ({setopen}) => {
    return ( 
        <>
            <Stack direction="row" sx={{width:'100%',justifyContent:'space-between',backgroundColor:{xs:'#242f3d',md:'inherit'}}}>
                <Stack direction="row" sx={{padding:{xs:'10px',md:"20px 50px"},justifyContent:'space-between',width:'100%',alignItems:'center'}}>
                    <IconButton onClick={()=>{setopen(prev=>!prev)}} sx={{display:{xs:"flex",md:'none'}}}>
                        <MenuOutlinedIcon sx={{color:'white'}}/>
                    </IconButton>
                    <Typography sx={{fontWeight:'bold'}}>Dashboard</Typography>
                    <Stack direction="row">
                    <Avatar></Avatar>
                    </Stack>
                </Stack>
            </Stack>
        </>
     );
}
 
export default EarnNav;