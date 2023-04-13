import { Divider, Stack, Typography } from "@mui/material";

const Referal = ({ referals }) => {
    return (
        <>
            <Stack direction="row" sx={{maxWidth:'100vw'}}>
                <Typography sx={{ flex: 1,textAlign:'center',color:'gray',padding:"10px 0px",fontSize:{xs:'0.8rem',sm:'1rem'} }}>{'Name'}</Typography>
                <Typography sx={{ flex: 1,textAlign:'center' ,color:'gray',padding:"10px 0px",fontSize:{xs:'0.8rem',sm:'1rem'}}}>{'Balance'}</Typography>
                <Typography sx={{ flex: 1 ,textAlign:'center',color:'gray',padding:"10px 0px",fontSize:{xs:'0.8rem',sm:'1rem'}}}>{'Membership'}</Typography>
                <Typography sx={{ flex: 1 ,textAlign:'center',color:'gray',padding:"10px 0px",fontSize:{xs:'0.8rem',sm:'1rem'}}}>{'Active'}</Typography>
            </Stack>
            <Divider sx={{color:'gray'}}/>
            {referals.length>0 && referals.map(referal => (
                <>
                    <Stack direction="row" sx={{maxWidth:'100vw'}}>
                        <Typography sx={{ flex: 1,textAlign:'center',fontSize:{xs:"0.75rem !important",md:'1rem !important'},padding:"10px 0px" }}>{referal.username}</Typography>
                        <Typography sx={{ flex: 1,textAlign:'center',fontSize:{xs:"0.75rem !important",md:'1rem !important'},padding:"10px 0px" }}>${referal.balance}</Typography>
                        <Typography sx={{ flex: 1,textAlign:'center',fontSize:{xs:"0.75rem !important",md:'1rem !important'},padding:"10px 0px" }}>VIP <span style={{color:''}}>{referal.vip} </span></Typography>
                        <Typography sx={{ flex: 1,textAlign:'center',fontSize:{xs:"0.75rem !important",md:'1rem !important'},padding:"10px 0px",color:referal.active?'green' : 'red' }}>{referal.active?'Yes' : 'No'}</Typography>
                    </Stack>
                    <Divider sx={{color:'gray'}}/>
                </>
            ))}
            {referals.length===0 && 
                <>
                    <Typography sx={{textAlign:'center',color:'silver',padding:"10px 0px"}}>
                        Zero referals
                    </Typography>
                </>
            }
        </>
    );
}

export default Referal;