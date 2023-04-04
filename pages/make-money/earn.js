import { Stack } from "@mui/material";
import EarnNav from "../../components/earnNav";
import EarnSide from "../../components/earnSide";
import EarnMain from "../../components/earnMain";
import { useState } from "react";
const Earn = () => {
    const [open ,setopen] = useState(false)
    const [selected,setselected] = useState(1)
    return ( 
        <>
        <Stack sx={{backgroundColor:"rgba(0,0,0,0.5)",minWidth:'100vw',minHeight:'100vh',position:'absolute',display:{xs:open?'block':'none', md:'none'}}} onClick={()=>{setopen(false)}}></Stack>
        <Stack direction="row" sx={{backgroundColor:'#17212b',minHeight:'100vh'}}>
            <EarnSide open={open} selected={selected} setselected={setselected}/>
            <Stack sx={{flex:4,gap:"20px"}}>
                <EarnNav setopen={setopen}/>
                <EarnMain />
            </Stack>
        </Stack>
    </>
     );
}
 
export default Earn;