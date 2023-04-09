import { Divider, Stack, Typography } from "@mui/material";

const Referal = ({ referals }) => {
    return (
        <>
            <Stack direction="row" sx={{maxWidth:'100vw'}}>
                <Typography sx={{ flex: 1,textAlign:'center',color:'gray',padding:"10px 0px" }}>{'Name'}</Typography>
                <Typography sx={{ flex: 1,textAlign:'center' ,color:'gray',padding:"10px 0px"}}>{'Balance'}</Typography>
                <Typography sx={{ flex: 1 ,textAlign:'center',color:'gray',padding:"10px 0px"}}>{'Active'}</Typography>
            </Stack>
            <Divider sx={{color:'gray'}}/>
            {referals.length>0 && referals.map(referal => (
                <>
                    <Stack direction="row" sx={{maxWidth:'100vw'}}>
                        <Typography sx={{ flex: 1,textAlign:'center',fontSize:{xs:"0.8rem !important",md:'1rem !important'},padding:"10px 0px" }}>{referal.name}</Typography>
                        <Typography sx={{ flex: 1,textAlign:'center',fontSize:{xs:"0.8rem !important",md:'1rem !important'},padding:"10px 0px" }}>${referal.balance}</Typography>
                        <Typography sx={{ flex: 1,textAlign:'center',fontSize:{xs:"0.8rem !important",md:'1rem !important'},padding:"10px 0px" }}>{referal.active?'Yes' : 'No'}</Typography>
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