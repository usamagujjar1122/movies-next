import { IconButton, Stack,  Tabs, Typography,  Skeleton, } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';

import Link from "next/link";
export default function Row({ data, title }){
    
    return (
        <>
            <Stack sx={{marginBottom:{xs:'0px',md:'0px'}}}>
                <Typography sx={{ fontWeight: 'bold',  padding:{xs:'10px 0px 0px 0px', md:'20px 0px 0px 10px'},fontSize:{xs:'1rem',sm:'1.2rem',md:'1.5rem',lg:'1,75'} }}>{title}</Typography>
                <Tabs
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    sx={{ margin: '0px 0px','& .MuiButtonBase-root':{width:'30px','&>svg':{fontSize:'40px'}} }}
                    value={"-1"}
                >   
                    {data && data.length>0 && data.map((item, index) => (
                        <Link style={{color:'white'}} href = {{pathname:'/video', query: item }}><Stack sx={{overflow:'hidden', aspectRatio:'9/14', position: 'relative', borderRadius: '10px', margin: {xs:'3px',md:'5px'}, width: { xs: '25vw ', sm: '22vw', md: '20vw', lg: '14vw', '&:hover': { '& img':{transform:'scale(1.25)'},'&>div': { opacity: '1' } } } }} value={index+1} key={index}  label={'item'+(index+1)} >
                            <Stack sx={{overflow:'hidden',minHeight:'100%',position:'relative'}}><img onLoad={()=>{"loaded"}} src={item.image} alt="" style={{ borderRadius: '5px',transition:'transform 0.5s',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',height:'100%' }} /></Stack>
                            <Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: "rgba(0,0,0,0.6)", width: '101%', height: '101%', borderRadius: '5px', justifyContent: 'space-between', alignItems: 'center', opacity: '0', transition: 'opacity 0.25s',display:{xs:'none',md:'flex'},cursor:'pointer' }} >
                                <Typography sx={{ whiteSpace: 'break-spaces', padding:'5px',fontSize:{xs:'0.75rem',md:'1rem'} }}>{item.name}</Typography>
                                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '5px', minWidth: '95%' }}>
                                    <Stack direction="row" sx={{ gap: '10px',justifyContent:'center',width:'100%' }}>
                                        <IconButton sx={{ border: '1px solid gray', borderRadius: '25px',width:'fit-content !important' }} ><PlayArrowIcon sx={{ color: 'white', fontSize:{xs:'14px !important',md:'1rem !important'} }} /> </IconButton>
                                        <IconButton sx={{ border: '1px solid gray', borderRadius: '25px',width:'fit-content !important' }} ><DownloadIcon sx={{ color: 'white',fontSize:{xs:'14px !important',md:'1rem !important'} }} /> </IconButton>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        </Link>
                    )
                    )}

                    {data && data.length===0 &&
                            <Stack sx={{ position: 'relative', borderRadius: '5px', margin: '5px', minWidth: { xs: '25vw', sm: '22vw', md: '20vw', lg: '14vw', '&:hover': { '&>img':{transform:'scale(2)'},'&>div': { opacity: '1' } } },overflow:'hidden' }} >
                                    <Skeleton variant="rectangular" sx={{width:{ xs: '25vw', sm: '22vw', md: '20vw', lg: '14vw',bgcolor: 'grey.900'},height:{ xs: '32vw', sm: '28vw', md: '25vw', lg: '17vw'} }}  />
                                    <Typography sx={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',fontSize:{xs:'8px',md:'12px'},fontWeight:'bold',color:'gray',}}>Nothing found</Typography>
                            </Stack>
                    }
                        {/* <Stack sx={{ position: 'relative', borderRadius: '5px', margin: '5px', width: { xs: '25vw', sm: '22vw', md: '20vw', lg: '14vw', '&:hover': { '&>img':{transform:'scale(2)'},'&>div': { opacity: '1' } } },overflow:'hidden' }} >
                            <Skeleton variant="rectangular" width={"100%"} height={"100%"} sx={{ bgcolor: 'grey.900' }}/>
                        </Stack> */}
                </Tabs>
            </Stack>
        </>
    );
}
