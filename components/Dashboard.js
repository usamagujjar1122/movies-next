import { Avatar, Grid, Stack, Typography } from "@mui/material";
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
const Dashboard = () => {
    return ( 
        <>
        <Stack sx={{margin:"0px 10px"}}>
            <Grid container sx={{alignItems:'center'}} spacing={2} >
            <Grid item xs={12} md={3}>
                <Stack sx={{alignItems:'center',gap:"10px",justifyContent:'center'}}>
                    <Avatar />
                    <Stack direction="column">
                    <Typography sx={{fontWeight:'bold',textAlign:'center'}}>Username</Typography>
                    <Typography sx={{color:'gray',fontSize:"0.75rem",textAlign:'center'}}>Welcome back!</Typography>

                </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
                <Stack direction="row" sx={{alignItems:'center',gap:'20px',backgroundColor:'#242f3d',borderRadius:"10px",padding:{xs:'16px 10px',md:"26px 10px"}}}>
                    <CardMembershipOutlinedIcon sx={{color:'#e50914',fontSize:"3rem"}} />
                    <Stack>
                        <Typography sx={{color:'gray',fontSize:"0.75rem"}}>Membership</Typography>
                        <Typography sx={{fontWeight:'bold',fontSize:'1.25rem'}}>VIP0</Typography>
                        <Typography sx={{fontSize:"0.85rem"}}>Request</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
                <Stack direction="row" sx={{alignItems:'center',gap:'20px',backgroundColor:'#242f3d',borderRadius:"10px",padding:{xs:'16px 10px',md:"26px 10px"}}}>
                    <AttachMoneyOutlinedIcon sx={{color:'#e50914',fontSize:"3rem"}} />
                    <Stack>
                        <Typography sx={{color:'gray',fontSize:"0.75rem"}}>Balance</Typography>
                        <Typography sx={{fontWeight:'bold',fontSize:'1.25rem'}}>0</Typography>
                        <Typography sx={{fontSize:"0.85rem"}}>Deposit</Typography>

                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
                <Stack direction="row" sx={{alignItems:'center',gap:'20px',backgroundColor:'#242f3d',borderRadius:"10px",padding:{xs:'16px 10px',md:"26px 10px"}}}>
                    <Groups3OutlinedIcon sx={{color:'#e50914',fontSize:"3rem"}} />
                    <Stack>
                        <Typography sx={{color:'gray',fontSize:"0.75rem"}}>Referals</Typography>
                        <Typography sx={{fontWeight:'bold',fontSize:'1.25rem'}}>50</Typography>
                        <Typography sx={{fontSize:"0.85rem"}}> View</Typography>

                    </Stack>
                </Stack>
            </Grid>
            </Grid>
            </Stack>
        </>
     );
}
 
export default Dashboard;