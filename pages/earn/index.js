import { IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import EarnMain from "../../components/earnMain";
import EarnNav from "../../components/earnNav";
import EarnSide from "../../components/earnSide";
import SignUPP from './signup';
import Head from "next/head";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Link from "next/link";
const Earn = () => {
    const [open, setopen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [selected, setselected] = useState(1)
    const [token, setToken] = useState()
    const MAINTAIN = process.env.MAINTAIN
    useEffect(() => {
        setToken(localStorage.getItem('e4a'))
        setLoading(false)
    }, [])

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
                {MAINTAIN && <>
                    <Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>Under<span style={{ color: '#e50914' }}> Maintainance...</span> </Typography>
                    </Stack>
                    <Link href="/">
                        <IconButton sx={{ width: '40px' , height: '40px' , zIndex: 100, position: 'fixed', bottom: { xs: '10%' }, right: { xs: '10%', md: '5%' }, background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", boxShadow: "10px 10px 50px 10px rgba(0,0,0,1)" }}>
                            <LiveTvIcon sx={{ color: 'white', width: '26px' , height: '26px' , transform: 'translateY(-2px)' }} />
                        </IconButton>
                    </Link>
                </>}
                {token && <>
                    <Stack direction="row" sx={{ backgroundColor: '#17212b', minHeight: '100%', position: 'relative' }}>
                        <Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: "rgba(0,0,0,0.5)", width: '100vw', maxWidth: '100%', height: '100%', position: 'absolute', display: { xs: open ? 'block' : 'none', md: 'none' } }} onClick={() => { setopen(false) }}></Stack>

                        {!MAINTAIN &&
                            <>
                                <EarnSide open={open} selected={selected} setselected={setselected} setopen={setopen} />
                                <Stack sx={{ flex: 4, gap: "20px" }}>
                                    <EarnNav setopen={setopen} selected={selected} />
                                    <EarnMain selected={selected} setselected={setselected} />
                                    <Link href="/">
                                        <IconButton sx={{ width: '40px', height: '40px' , zIndex: 100, position: 'fixed', bottom: { xs: '10%' }, right: { xs: '10%', md: '5%' }, background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", boxShadow: "10px 10px 50px 10px rgba(0,0,0,1)" }}>
                                            <LiveTvIcon sx={{ color: 'white', width: '26px' , height: '26px' , transform: 'translateY(-2px)' }} />
                                        </IconButton>
                                    </Link>
                                </Stack>
                            </>
                        }
                    </Stack>
                </>}
                {!token && !loading && <SignUPP />}
            </main>
        </>

    );
}

export default Earn;