import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import EarnMain from "../../components/earnMain";
import EarnNav from "../../components/earnNav";
import EarnSide from "../../components/earnSide";
import SignUPP from './signup';
const Earn = () => {
    const [open, setopen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [selected, setselected] = useState(1)
    const [token, setToken] = useState()
    useEffect(()=>{
        setToken(localStorage.getItem('e4a'))
        setLoading(false)
    },[])
    
    return (
        <>  
                {token && <>
                <Stack direction="row" sx={{ backgroundColor: '#17212b', minHeight: '100%',position:'relative' }}>
                <Stack sx={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)', backgroundColor: "rgba(0,0,0,0.5)", width:'100vw',maxWidth:'100%',height:'100%' ,position: 'absolute', display: { xs: open ? 'block' : 'none', md: 'none' } }} onClick={() => { setopen(false) }}></Stack>
                    
                    <EarnSide open={open} selected={selected} setselected={setselected} setopen={setopen}/>
                    <Stack sx={{ flex: 4, gap: "20px"}}>
                        <EarnNav setopen={setopen} selected={selected}/>
                        <EarnMain selected={selected} />
                    </Stack>
                </Stack>
                </>}
                {!token && !loading && <SignUPP />}
            </>
           
    );
}

export default Earn;