import { IconButton, Stack, Typography, LinearProgress, Grid, Modal, useMediaQuery, AppBar, CircularProgress } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';
import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Row from "../components/row";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import supabase from "./api/config/supabaseClient";
import Link from 'next/link'
import Head from "next/head";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Home = () => {
    const catagories = [
        'Action', 'Romantic', 'Drama', 'Comedy', 'Horror', 'Mystery', 'Crime', 'Adventure', 'sex', 'TV Shows', 'Sports', 'Thriller', 'Family', 'Documentry'
    ]
    const matches = useMediaQuery('(min-width:800px)');
    const [loading, setloading] = useState(true)
    const [cat, setcat] = useState('')
    const [filter, setfilter] = useState([])
    const [searchsm, setsearchsm] = useState(null)
    const [openm, setOpenm] = useState(false);
    const [reload, setreload] = useState(false);
    const [show, setshow] = useState('flex');
    const handleOpen = () => setOpenm(true);
    const handleClose = () => setOpenm(false);
    const [openf, setOpenf] = useState(false);
    const [l, setl] = useState(false);
    const handleOpen2 = () => setOpenf(true);
    const handleClose2 = () => setOpenf(false);
    const defferInput1 = useDeferredValue(searchsm)
    const myLongAsyncFunction = async () => {
        setfilter([])
        setl(true)
        const { data, error } = await supabase
            .from('movies')
            .select()
            .ilike('name', `%${searchsm}%`)
        if (data) {
            setfilter(data)
            setl(false)
            return 1
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setshow('none')
        }, 15000);
    }, [])
    const filterr = useMemo(() => myLongAsyncFunction(), [defferInput1])
    return (
        <>
            <Head>
                <title>{`Entertainment4All || Watch Online and Download`}</title>
                <meta name="description" content={``} />
                <meta property="og:title" content={`E4A". Watch Movies, Wes-Series, Anime and cartoon online and download for free... `} />
                <meta property="og:description" content={`E4A". Watch Movies, Wes-Series, Anime and cartoon online and download for free... `} />
                <meta property="og:url" content={`https://e4a.live`} />
                <meta
                    name="keywords"
                    content={` e4a, E4A, entertainment4all, e4a live, entertainment4all live, download movies,download webseries,download anime,  watch movies online,watch anime online, match webseries online`}
                />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                {loading &&
                    <>
                        <AppBar sx={{ zIndex: '100', backgroundColor: '#141414', zIndex: 5, minHeight: '100vh' }}>
                            <LinearProgress color="error" />
                            <Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: 'bold' }}>Please  <span style={{ color: '#e50914' }}> wait...</span> </Typography>
                                <Typography sx={{ display: reload ? 'flex' : 'none', fontWeight: '600' }}>  <span style={{ color: '#e50914', marginRight: "5px" }}> </span> Reload to continue</Typography>
                            </Stack>
                        </AppBar>
                    </>
                }
                {
                    <>
                        <Link href="/earn">
                            <IconButton sx={{ display: show, width: '40px', height: '40px', zIndex: 100, position: 'fixed', bottom: { xs: '10%' }, right: { xs: '10%', md: '5%' }, background: "linear-gradient(to right,rgba(229,9,20,1),rgba(244,67,54,1))", boxShadow: "10px 10px 50px 10px rgba(0,0,0,1)" }}>
                                <AttachMoneyIcon sx={{ color: 'white', width: '32px', height: '32px' }} />
                            </IconButton>
                        </Link>
                        <Stack direction="row" sx={{ justifyContent: 'space-between', position: 'absolute', top: '0%', zIndex: 4, width: '100%', background: 'url(img/nav-shadow.png)' }} >
                            <Stack direction='row' sx={{ gap: '10px', alignItems: 'center', '& p': { fontWeight: 'bold' } }}>
                                <Link href="/" style={{ textDecoration: 'none', display: matches ? 'flex' : 'none' }}><Typography sx={{ fontSize: { xs: '1rem', md: '1.5rem', lg: '2rem' }, color: 'white', fontWeight: 'bold', marginRight: '20px', margin: { xs: '10px', md: '20px' }, cursor: 'pointer' }}>Entertainment<span style={{ color: '#e50914' }}>4All</span></Typography></Link>
                                <Link href="/" style={{ textDecoration: 'none', display: matches ? 'none' : 'flex' }}><Typography sx={{ fontSize: { xs: '1rem', md: '1.5rem', lg: '2rem' }, color: 'white', fontWeight: 'bold', marginRight: '20px', margin: { xs: '10px', md: '20px' }, cursor: 'pointer' }}>E<span style={{ color: '#e50914' }}>4</span>A</Typography></Link>
                                <Stack direction="row" sx={{ alignItems: 'center', position: { xs: 'absolute', md: 'relative' }, display: { xs: 'none', md: 'flex' } }}>
                                    <Typography sx={{ marginRight: '10px' }}>Filter : </Typography>
                                    <Stack direction="row" sx={{ alignItems: 'center', position: 'relative', justifyContent: 'space-between', border: '1px solid white', cursor: 'pointer', padding: '5px 10px', minWidth: '100px', '&:hover': { '&>div': { display: 'block' } } }} >
                                        <Typography sx={{ textAlign: 'center' }}>{cat.length > 0 ? cat : "all"}</Typography>
                                        <ArrowDropDownIcon sx={{ color: 'white' }} />
                                        <Stack sx={{ width: '300%', border: '1px solid white', background: 'rgba(0,0,0,0.8)', position: 'absolute', top: '100%', left: '0%', display: 'none' }}>
                                            <Grid container>
                                                {catagories && catagories.map((item, index) => (
                                                    <Grid item xs={4} key={index}>
                                                        <Typography sx={{ padding: '10px', '&:hover': { color: '#e50914', cursor: 'pointer' } }} onClick={() => { setcat(item) }}>{item}</Typography>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Stack>
                                    </Stack>
                                </Stack>

                            </Stack>
                            <Stack direction="row" sx={{ justifyContent: 'space-between', border: '1px solid white', alignItems: 'center', borderRadius: '25px', padding: '0px 20px', width: "40%", margin: { xs: '10px', md: '20px' }, opacity: openm ? 0 : 1, display: { xs: 'none', md: 'flex' }, transform: openm && "scaleX(3) translateX(-200px)", transition: 'opacity 0.5s, transform 0.5s', cursor: 'pointercd' }} onClick={handleOpen}>
                                <Typography sx={{ color: 'white' }}>Search...</Typography>
                                <SearchIcon />
                            </Stack>
                            <Stack direction="row" sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton sx={{ display: { xs: 'flex', md: 'none' }, borderRadius: '25px', opacity: openm ? 0 : 1 }} onClick={handleOpen}><SearchIcon sx={{ color: 'white' }} /></IconButton>
                                <IconButton sx={{ display: { xs: 'flex', md: 'none' }, borderRadius: '25px', opacity: openm ? 0 : 1 }} onClick={handleOpen2}><FilterAltIcon sx={{ color: 'white' }} /></IconButton>
                            </Stack>
                        </Stack>

                        <Stack>

                            <Stack sx={{ position: 'relative', minHeight: { xs: '40vh', md: '100vh' }, background: 'url(img/bg3.jpg)', backgroundSize: 'cover', backgroundPosition: 'top' }}>
                                <Stack sx={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'rgba(0,0,0,0.2)', width: '100%', height: '100%' }}> <Typography sx={{ color: 'white', position: 'absolute', top: { xs: '50%', md: '20%' }, left: '50%', transform: 'translate(-50%,-50%)', fontSize: { xs: '1rem', md: '1.5rem', lg: '2rem' }, color: 'white', fontWeight: 'bold', textAlign: 'center', whiteSpace: 'nowrap' }}> Watch online<span style={{ color: '#e50914' }}>  &  </span> download</Typography></Stack>
                            </Stack>
                            <Stack sx={{ position: { xs: 'relative', md: 'absolute' }, bottom: '0%', maxWidth: '100%', margin: { xs: '0px 5px', md: '0px 0px' } }}>
                                <Row title="Trending" t={false} cat={cat.toLowerCase()} />
                            </Stack>
                        </Stack>
                        <Stack sx={{ margin: { xs: '0px 5px', md: '0px 0px' } }}>
                            <Row title="Movies" type='movie' t={true} cat={cat.toLowerCase()} />
                            <Row title="Series" type='series' t={true} cat={cat.toLowerCase()} />
                            <Row title="Anime" t={false} setloading={setloading} cat={cat.toLowerCase()} />
                        </Stack>
                        <Modal
                            open={openm}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{ overflowY: "scroll" }}
                        >
                            <Stack sx={{ alignItems: 'center', minHeight: '100vh', background: 'rgba(0,0,0,0.8)' }}>
                                <Stack direction="row" sx={{ border: '1px solid white', alignItems: 'center', borderRadius: '25px', width: "95%", marginBottom: '16px', margin: { md: '50px 0px', xs: '20px 0px' }, opacity: openm ? 1 : 0, transition: 'opacity 05s' }}>
                                    <input autoFocus type="text" style={{ marginLeft: '10px', background: 'none', border: 'none', outline: 'none', padding: '10px 5px', color: 'white', width: '100%' }} placeholder="Search" value={searchsm} onChange={e => setsearchsm(e.target.value)} />
                                    <CloseIcon sx={{ color: 'white', marginRight: '10px', cursor: 'pointer' }} onClick={handleClose} />
                                </Stack>
                                {l && <CircularProgress sx={{ margin: '0px auto', color: '#e50914', width: { xs: '12px !important', md: '22px !important' }, height: { xs: '12px !important', md: "22px !important" } }} />}
                                <Stack>
                                    {defferInput1 && !l && filter.length > 0 &&
                                        <>
                                            <Grid container sx={{ justifyContent: 'center' }} spacing={0}>
                                                {filter.map((item, index) => (
                                                    <Link style={{ color: 'white' }} href={{ pathname: `${item.name.replaceAll(' ', '-')}` }}>
                                                        <Stack className="hovermr" sx={{ overflow: 'hidden', aspectRatio: '9/14', position: 'relative', borderRadius: '10px', minHeight: { xs: '39vw ', sm: '34vw', md: '31vw', lg: '21.5vw' }, margin: { xs: '3px', md: '5px' }, width: { xs: '25vw ', sm: '22vw', md: '20vw', lg: '14vw', '&:hover': { '& img': { transform: 'scale(1.25)' }, '&>div': { opacity: '1' } } }, backgroundColor: 'gray' }} value={index + 1} key={index} label={'item' + (index + 1)} >
                                                            <Stack sx={{ width: { xs: '25vw ', sm: '22vw', md: '20vw', lg: '14vw' }, minHeight: { xs: '39vw ', sm: '34vw', md: '31vw', lg: '21.5vw' }, overflow: 'hidden', height: '100%', position: 'relative', backgroundImage: `url(${item.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img src={item.image} alt="" style={{ borderRadius: '5px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', height: '100%' }} /></Stack>
                                                            <Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: "rgba(0,0,0,0.6)", width: '101%', height: '101%', borderRadius: '5px', justifyContent: 'space-between', alignItems: 'center', opacity: '0', transition: 'opacity 0.25s', display: { xs: 'none', md: 'flex' }, cursor: 'pointer' }} >
                                                                <Typography sx={{ width: '90%', overflowWrap: 'anywhere', textAlign: 'center', padding: '5px', fontSize: { xs: '0.75rem', md: '1rem' }, whiteSpace: 'break-spaces' }}>{item.name}</Typography>
                                                                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '5px', minWidth: '95%' }}>
                                                                    <Stack direction="row" sx={{ gap: '10px', justifyContent: 'center', width: '100%' }}>
                                                                        <IconButton sx={{ border: '1px solid gray', borderRadius: '25px', width: 'fit-content !important' }} ><PlayArrowIcon sx={{ color: 'white', fontSize: { xs: '14px !important', md: '1rem !important' } }} /> </IconButton>
                                                                        <IconButton sx={{ border: '1px solid gray', borderRadius: '25px', width: 'fit-content !important' }} ><DownloadIcon sx={{ color: 'white', fontSize: { xs: '14px !important', md: '1rem !important' } }} /> </IconButton>
                                                                    </Stack>
                                                                </Stack>
                                                            </Stack>

                                                        </Stack>
                                                    </Link>
                                                ))}
                                            </Grid>
                                        </>
                                    }
                                </Stack>
                                {searchsm && filter.length === 0 && !l && <Typography sx={{ textAlign: 'center', color: 'white' }}>No results found</Typography>}
                            </Stack>

                        </Modal>
                        <Modal
                            open={openf}
                            onClose={handleClose2}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Stack sx={{ minWidth: '100vw', minHeight: '100vh', color: 'white', background: 'rgba(0,0,0,0.8)' }}>
                                <Grid container sx={{ margin: '30px 0px' }}>
                                    {catagories && catagories.map((item, index) => (
                                        <Grid item xs={12} key={index}>
                                            <Typography sx={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', '&:hover': { color: '#e50914', cursor: 'pointer' } }} onClick={() => { setcat(item); setOpenf(false) }}>{item}</Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                                <IconButton sx={{ display: { xs: 'flex', md: 'none' }, position: "absolute", bottom: '5%', left: '50%', transform: 'translateX(-50%)', borderRadius: '25px', opacity: openm ? 0 : 1 }} onClick={handleClose2}><CloseIcon sx={{ color: 'white' }} /></IconButton>
                            </Stack>
                        </Modal>
                    </>
                }
                <script type="text/javascript"> var infolinks_pid = 3398769; var infolinks_wsid = 0; </script> <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
            </body>
        </>
    );
}

export default Home;