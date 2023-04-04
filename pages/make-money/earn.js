import { Stack } from "@mui/material";
import EarnNav from "../../components/earnNav";
import EarnSide from "../../components/earnSide";
import EarnMain from "../../components/earnMain";
import { useEffect, useState } from "react";
import SignUP from "../../components/SIgnUP";
const Earn = () => {
    const [open, setopen] = useState(false)
    const [selected, setselected] = useState(1)
    let token = null
    useEffect(()=>{
    },[])
    
    return (
        <>
                {!token && <><Stack sx={{ backgroundColor: "rgba(0,0,0,0.5)", minWidth: '100vw', minHeight: '100vh', position: 'absolute', display: { xs: open ? 'block' : 'none', md: 'none' } }} onClick={() => { setopen(false) }}></Stack>
                <Stack direction="row" sx={{ backgroundColor: '#17212b', minHeight: '100vh' }}>
                    <EarnSide open={open} selected={selected} setselected={setselected} setopen={setopen}/>
                    <Stack sx={{ flex: 4, gap: "20px" }}>
                        <EarnNav setopen={setopen} selected={selected}/>
                        <EarnMain selected={selected} />
                    </Stack>
                </Stack>
                </>}
                {token && <SignUP />}
            </>
           
    );
}

export default Earn;