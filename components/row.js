import { IconButton, Stack, Tab, Tabs, Typography, CircularProgress, Skeleton, Grid, Modal } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';
import { useEffect, useRef, useState } from 'react';
import supabase from "../pages/api/config/supabaseClient";
import Link from 'next/link'

const Row = ({ title, type, t, setloading, cat }) => {
    const [data, setdata] = useState([])
    const [filter, setfilter] = useState([])
    const [l, setl] = useState(false)
    const [s, sets] = useState(0)
    const [e, sete] = useState(10)
    const [end, setend] = useState(false)    
    useEffect(() => {
        const loaddata = async (S, E) => {
            console.log("loadata")
            sets(S)
            sete(E)
            const { data, error } = await supabase
                .from('movies')
                .select()
                .ilike('genera', t ? '%%' : `%${title.toLowerCase()}%`)
                .ilike('type', t ? `${type}` : '%%')
                .range(S, E - 1)
            if (data) {
                setdata(prev => prev.concat(data))
                setl(false)
                if (data.length < 10) {
                    setend(true)
                }
                if (title == "Anime") {
                    setloading(false)
                }
            }
            if (error) {
                console.log(error)
            }
        }
        loaddata(s, e)
    }, [])
    useEffect(() => {
        setfilter(data.length > 0 ? data.filter(item => item.genera.includes(cat)) : [])
    }, [cat, data])
    const setRatio = (width) => {
        return width*2
    }
    return (
        <>
            <Stack sx={{ marginBottom: { xs: '0px', md: '0px' } }}>
                <Typography sx={{ fontWeight: 'bold', padding: { xs: '10px 0px 0px 0px', md: '20px 0px 0px 10px' }, fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem', lg: '1,75' } }}>{title}</Typography>
                <Tabs
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    sx={{ margin: '0px 0px', '& .MuiButtonBase-root': { width: '30px', '&>svg': { fontSize: '40px' } }, '& .infinite-scroll-component': { display: 'flex' } }}
                    value={"-1"}
                    onScroll={() => { handleScroll(e) }}
                >
                    {filter && filter.length > 0 &&
                        <Stack direction={"row"} >

                            {filter.map((item, index) => (
                                <Link style={{ color: 'white' }} href={{ pathname: `${item.name.replaceAll(' ','-')}`}}>
                                    <Stack className="hovermr" sx={{ overflow: 'hidden', aspectRatio: '9/14', position: 'relative', borderRadius: '10px', margin: { xs: '3px', md: '5px' }, width: { xs: '25vw ', sm: '22vw', md: '20vw', lg: '14vw' },minHeight:{xs: '39vw ', sm: '34vw', md: '31vw', lg: '21.5vw'},'&:hover': { '& img': { transform: 'scale(1.25)' }, '&>div': { opacity: '1' } }, backgroundColor: 'gray' }} value={index + 1} key={index} label={'item' + (index + 1)} >
                                        <Stack sx={{ overflow: 'hidden', minHeight: '100%',minWidth:'100%', position: 'relative' }}><img src={item.image} alt="" style={{ borderRadius: '5px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', height: '100%' }} /></Stack>
                                        <Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: "rgba(0,0,0,0.6)", width: '101%', height: '101%', borderRadius: '5px', justifyContent: 'space-between', alignItems: 'center', opacity: '0', transition: 'opacity 0.25s', display: { xs: 'none', md: 'flex' }, cursor: 'pointer' }} >
                                            <Typography sx={{ width: '90%', overflowWrap: 'anywhere', textAlign: 'center', padding: '5px', fontSize: { xs: '0.75rem', md: '1rem' },whiteSpace:'break-spaces' }}>{item.name}</Typography>
                                            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '5px', minWidth: '95%' }}>
                                                <Stack direction="row" sx={{ gap: '10px', justifyContent: 'center', width: '100%' }}>
                                                    <IconButton sx={{ border: '1px solid gray', borderRadius: '25px', width: 'fit-content !important' }} ><PlayArrowIcon sx={{ color: 'white', fontSize: { xs: '14px !important', md: '1rem !important' } }} /> </IconButton>
                                                    <IconButton sx={{ border: '1px solid gray', borderRadius: '25px', width: 'fit-content !important' }} ><DownloadIcon sx={{ color: 'white', fontSize: { xs: '14px !important', md: '1rem !important' } }} /> </IconButton>
                                                </Stack>
                                            </Stack>
                                        </Stack>

                                    </Stack>
                                </Link>

                            )
                            )}
                            <Stack sx={{ display: end ? 'none' : 'flex', position: 'relative', width: { xs: '20vw ', sm: '18vw', md: '18vw', lg: '10vw' } }}>
                                <Typography sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: 'rgb(229, 9, 20)', fontWeight: 'bold', padding: { xs: '5px', md: '10px' }, background: 'rgba(0,0,0,0.25)', borderRadius: '5px', fontSize: { xs: '0.5rem !important', md: '1rem !important' }, cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={() => { setl(true); loaddata(s + 10, e + 10) }}> <Typography sx={{ color: 'white', marginRight: { xs: '2px', md: '5px' }, fontWeight: 'bold' }}> Load </Typography> more {l && <CircularProgress sx={{ marginLeft: '10px', color: '#e50914', width: { xs: '12px !important', md: '22px !important' }, height: { xs: '12px !important', md: "22px !important" } }} />} </Typography>
                            </Stack>
                        </Stack>
                    }
                    {filter.length === 0 &&
                        <Stack sx={{ position: 'relative', borderRadius: '5px', margin: '5px', minWidth: { xs: '25vw', sm: '22vw', md: '20vw', lg: '14vw', '&:hover': { '&>img': { transform: 'scale(2)' }, '&>div': { opacity: '1' } } }, overflow: 'hidden' }} >
                            <Skeleton variant="rectangular" sx={{ bgcolor: '#222', width: { xs: '25vw', sm: '22vw', md: '20vw', lg: '14vw', bgcolor: 'grey.900' }, height: { xs: '32vw', sm: '28vw', md: '25vw', lg: '17vw' } }} />
                            <Typography sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: { xs: '8px', md: '12px' }, fontWeight: 'bold', color: 'white', }}>Nothing found</Typography>

                        </Stack>
                    }
                    {/* <Stack sx={{ position: 'relative', borderRadius: '5px', margin: '5px', width: { xs: '25vw', sm: '22vw', md: '20vw', lg: '14vw', '&:hover': { '&>img':{transform:'scale(2)'},'&>div': { opacity: '1' } } },overflow:'hidden' }} >
                            <Skeleton variant="rectangular" width={"100%"} height={"100%"} sx={{ bgcolor: 'grey.900' }}/>
                        </Stack> */}
                </Tabs>
            </Stack >
        </>
    );
}

export default Row;