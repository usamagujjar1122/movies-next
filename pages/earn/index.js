import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import EarnMain from "../../components/earnMain";
import EarnNav from "../../components/earnNav";
import EarnSide from "../../components/earnSide";
import SignUPP from './signup';
import Head from "next/head";
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
        <Head>
                <title>E4A Referal Program</title>
                <meta name="description" content={`Entertainment4All is a movies platform that gives free access to latest movies to everyone. Join our referal program, invest $20 and get a chance to earn a decent amount of money...`} />
                <meta property="og:title" content='E4A Referal Program' />
                <meta property="og:description" content={`Entertainment4All is a movies platform that gives free access to latest movies to everyone. Join our referal program, invest $20 and get a chance to earn a desent amount of money...`} />
                <meta property="og:url" content={`https://e4a.live/earn`} />
                <meta
                    name="keywords"
                    content={`e4a referal program, earn money, e4a earn`}
                />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/earn.ico" />
            </Head>
            <main>
                {token && <>
                <Stack direction="row" sx={{ backgroundColor: '#17212b', minHeight: '100%',position:'relative' }}>
                <Stack sx={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)', backgroundColor: "rgba(0,0,0,0.5)", width:'100vw',maxWidth:'100%',height:'100%' ,position: 'absolute', display: { xs: open ? 'block' : 'none', md: 'none' } }} onClick={() => { setopen(false) }}></Stack>
                    
                    <EarnSide open={open} selected={selected} setselected={setselected} setopen={setopen}/>
                    <Stack sx={{ flex: 4, gap: "20px"}}>
                        <EarnNav setopen={setopen} selected={selected}/>
                        <EarnMain selected={selected} setselected={setselected}/>
                    </Stack>
                </Stack>
                </>}
                {!token && !loading && <SignUPP />}
                </main>
            </>
           
    );
}

export default Earn;