import { Stack, Typography, Button, useMediaQuery, Box } from "@mui/material";
import Link from 'next/link';
import { useState, useEffect } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DownloadIcon from '@mui/icons-material/Download';
import supabase from "./api/config/supabaseClient";
import Head from "next/head";
export default function Movie({ item }) {
    const matches = useMediaQuery('(min-width:800px)');
    const [single, setSingle] = useState(item ? item.id.split(',')[0] : null)
    const [itemId, setitemId] = useState(item ? item.id.split(',')[0] : null)
    const [id, setId] = useState(item ? item.id.split(',')[0].split('&')[0] : null)
    const [title, settitle] = useState(item ? item.id.split(',')[0].split(',')[0].split('#')[1] : null)
    const [currentServer, setcurrentServer] = useState(item ? item.server.split(',')[0] : null)
    useEffect(() => {
        setSingle(item && item.id.split(',')[0]);
        setitemId(item && item.id.split(',')[0]);
        setId(item && item.id.split(',')[0].split('&')[0])
        settitle(item && item.id.split(',')[0].split(',')[0].split('#')[1]);
        setcurrentServer(item && item.server.split(',')[0])
        console.log(title)
    }, [item])
    const setbg = () => {
        if (item && item.genera.includes('anime')) {
            return 'url(img/anime.jpg)'
        } else if (item && item.genera.includes('cartoon')) {
            return 'url(img/cartoon.jpg)'
        } else if (item.type === "movie") {
            return 'url(img/movie.jpg)'
        } else {
            return 'url(img/series.jpg)'
        }
    }
    const switchServer = (ser) => {
        if (ser === currentServer) {

        } else {
            if (ser === "StreamSB") {
                setitemId(item.id)
                setcurrentServer("StreamSB")
                setSingle(item.id.split(',')[0])
                setId(item.id.split('&')[0])
                settitle(item.id.split(',')[0].split('#')[1])
            } else if (ser === "Streamtape") {
                setitemId(item.id2)
                setcurrentServer("Streamtape")
                setSingle(item.id2.split(',')[0])
                setId(item.id2.split('&')[0])
                settitle(item.id2.split(',')[0].split('#')[1])
            }
        }
    }
    useEffect(() => {

    }, [id])
    return (
        <div>
            <Head>
                <title>{`${item.name} || Watch Online and Download for FREE`}</title>
                <meta name="description" content={`${item.name} wacth online and download in 480p, 720p, 1080p and hd for free...`} />
                <meta property="og:title" content={`${item.name} || Wacth Online and Free Download `} />
                <meta property="og:description" content={`${item.name} wacth online and download in 480p, 720p, 1080p and hd for free...`} />
                <meta property="og:url" content={`https://e4a.live/${item.name}`} />
                <meta
                    name="keywords"
                    content={`${item.name} watch online,${item.name} full movie free download in hindi,${item.name} full movie free download in english,${item.name} full movie free download in hd,${item.name} full movie hd, ${item.name} download, ${item.name} e4a, E4A, entertainment4all, e4a live, entertainment4all live, download movies,download webseries,download anime,  watch movies online,watch anime online, match webseries online`}
                />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main >
                {item &&
                    <>

                        <Stack sx={{ backgroundImage: setbg(), backgroundSize: 'cover', backgroundPosition: 'center', overflowX: 'hidden' }}>
                            <Stack sx={{ background: 'rgba(0,0,0,0.8)' }}>
                                <Stack direction="row" sx={{ padding: { xs: "10px", md: '10px' }, justifyContent: 'space-between' }}>
                                    <Stack direction='row' sx={{ gap: '10px', alignItems: 'center', '& p': { fontWeight: 'bold' } }}>
                                        <Link href="/" style={{ textDecoration: 'none', display: matches ? 'flex' : 'none' }}><Typography sx={{ whiteSpace: 'nowrap', fontSize: { xs: '1rem', md: '2rem' }, color: 'white', fontWeight: 'bold', margin: { xs: '5px', md: '20px' }, cursor: 'pointer' }}>Entertainment<span style={{ color: '#e50914' }}>4All</span></Typography></Link>
                                        <Link href="/" style={{ textDecoration: 'none', display: matches ? 'none' : 'flex' }}><Typography sx={{ whiteSpace: 'nowrap', fontSize: { xs: '1rem', md: '2rem' }, color: 'white', fontWeight: 'bold', margin: { xs: '5px', md: '20px' }, cursor: 'pointer' }}>E<span style={{ color: '#e50914' }}>4</span>A</Typography></Link>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" sx={{justifyContent:'center',padding:{xs:'0px 20px',md:'0px'},gap:{xs:'5px',md:'10px'},margin:{xs:'0px 5px 10px 5px',md:'0px 10px 10px 10px'},'&>p' :{fontSize:{xs:'0.75rem !important',md:'1rem !important'}} }}>
                                    <Typography sx={{fontWeight:'bold'}}>Title: </Typography>
                                    <Typography sx={{textAlign:'left',color:'gray'}}>
                                        {item.name} full {item.type} free download in hd, 720p, 1080p, and watch online for free
                                    </Typography>
                                </Stack>
                                <Stack direction="row" sx={{ margin: { xs: '0px', md: '0px 50px', lg: '0px 150px' }, gap: '20px', display: { xs: 'none', md: 'flex' } }}>
                                    <Stack sx={{  flex: { md: 2, lg: 1 } }}><img src={item.image} alt="" style={{ width: '100%' }} /></Stack>
                                    <Stack sx={{ flex: 5 }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>{item.name}</Typography>
                                        <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                                            <Stack direction="row" sx={{ gap: '5px', color: 'white' }}>
                                                <Typography sx={{ fontWeight: 'bold' }}>Genera:</Typography>
                                                <Typography sx={{whiteSpace:'break-spaces'}}>{item.genera}</Typography>
                                            </Stack>
                                            <Stack direction="row" sx={{ gap: '20px' }}>
                                                <Stack direction="row" sx={{ gap: '5px', alignItems: 'center' }}>
                                                    <AccessTimeIcon sx={{ color: '#e50914', fontSize: '20px', fontWeight: 'bold' }} />
                                                    <Typography>{item.duration}</Typography>
                                                </Stack>
                                                <Stack direction="row" sx={{ gap: '5px', alignItems: 'center' }}>
                                                    <CalendarMonthIcon sx={{ color: '#e50914', fontSize: '20px', fontWeight: 'bold' }} />
                                                    <Typography>{item.date.slice(0, 4)}</Typography>
                                                </Stack>
                                                <a href={currentServer === "StreamSB" ? id.replace('/e/', '/d/') : id.replace('/e/', '/v/')} target="_blank" style={{ color: 'white' }}>
                                                    <Stack direction="row" sx={{ gap: '5px', alignItems: 'center', cursor: 'pointer' }} >
                                                        <DownloadIcon sx={{ color: '#e50914', fontSize: '20px', fontWeight: 'bold' }} />
                                                        <Typography>Download</Typography>
                                                    </Stack>
                                                </a>
                                            </Stack>
                                        </Stack>
                                        <Stack direction="row" sx={{ gap: '5px', color: 'white' }}>
                                            <Typography sx={{ fontWeight: 'bold' }}>Language:</Typography>
                                            <Typography sx={{}}>{item.language}</Typography>
                                        </Stack>
                                        <Stack sx={{ marginTop: { xs: '10px', md: '20px' } }}>
                                            <Typography sx={{}}> <span style={{ fontWeight: 'bold' }}> Description : </span> <span style={{ color: 'gray' }}> {item.description} </span></Typography>
                                        </Stack>
                                        <Stack sx={{ marginTop: '6px' }}>
                                            <Typography sx={{ color: 'gray', padding: '5px', fontWeight: "bold", fontSize: { xs: '0.6rem !important', md: '0.75rem !important' } }}> <span style={{ color: '#e50914' }}> Note:</span> Click 2-3 times on video player to start the video. It may take upto 15 seconds to load the video.</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack sx={{ display: { xs: 'flex', md: 'none' }, margin: '0px 20px' }}>
                                    <Stack direction="row" sx={{ gap: '10px' }}>
                                        <Stack sx={{ flex: 1,minWidth:'15vw' }}><img src={item.image} alt="" style={{ maxWidth: '100%' }} /></Stack>
                                        <Stack sx={{ flex: 3, maxWidth:'82vw','& p': { fontSize: { xs: '0.7rem', sm: '1rem' } } }}>
                                            <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem !important' }}>{item.name}</Typography>
                                            <Stack direction="row" sx={{ gap: '5px', color: 'white' }}>
                                                <Typography sx={{ fontWeight: 'bold' }}>Genera:</Typography>
                                                <Typography sx={{whiteSpace:'break-spaces'}}>{item.genera}</Typography>
                                            </Stack>
                                            <Stack direction="row" sx={{ gap: '5px', color: 'white' }}>
                                                <Typography sx={{ fontWeight: 'bold' }}>Language:</Typography>
                                                <Typography sx={{}}>{item.language}</Typography>
                                            </Stack>
                                            <Stack direction="row" sx={{ gap: '10px', '& p': { fontSize: '0.6rem' }, mt: '10px' }}>
                                                <Stack direction="row" sx={{ gap: '5px', alignItems: 'center' }}>
                                                    <AccessTimeIcon sx={{ color: '#e50914', fontSize: '14px', fontWeight: 'bold' }} />
                                                    <Typography>{item.duration}</Typography>
                                                </Stack>
                                                <Stack direction="row" sx={{ gap: '5px', alignItems: 'center' }}>
                                                    <CalendarMonthIcon sx={{ color: '#e50914', fontSize: '14px', fontWeight: 'bold' }} />
                                                    <Typography>{item.date.slice(0, 4)}</Typography>
                                                </Stack>
                                                <a href={id.replace('/e/', '/v/')} target="_blank" style={{ color: 'white' }}>
                                                    <Stack direction="row" sx={{ gap: '5px', alignItems: 'center', cursor: 'pointer' }} >
                                                        <DownloadIcon sx={{ color: '#e50914', fontSize: '14px', fontWeight: 'bold' }} />
                                                        <Typography>Download</Typography>
                                                    </Stack>
                                                </a>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack sx={{ marginTop: '6px', marginTop: '5px' }}>
                                        <Typography sx={{ fontSize: '0.75rem' }}> <span style={{ fontweight: 'bold' }}> Description : </span> <span style={{ color: 'gray', fontSize: '10px' }}> {item.description} </span></Typography>
                                    </Stack>
                                    <Stack sx={{ marginTop: '6px' }}>
                                        <Typography sx={{ color: 'gray', padding: '5px', fontWeight: "bold", fontSize: { xs: '0.6rem !important', md: '0.75rem !important' } }}> <span style={{ color: '#e50914' }}> Note:</span> Click 2-3 times on video player to start the video. It may take upto 15 seconds to load the video.</Typography>
                                    </Stack>

                                </Stack>
                                {item && item.type === "movie" && <>
                                    <Stack direction={matches ? "row" : 'column'} sx={{ padding: { xs: '20px 0px', md: '50px', lg: '50px 150px' }, gap: { xs: '0px', md: '20px' } }}>
                                        {/* <Stack sx={{ aspectRatio: '8/5', flex: 2, width: { xs: "100%", md: '50%' } ,'&>iframe':{border:'none'}}}><iframe src={"https://drive.google.com/file/d/" + id + "/preview"} style={{ aspectRatio: '8/5', width: "100%" }} allow="autoplay" allowFullScreen sandbox="allow-same-origin allow-scripts" ></iframe></Stack> */}
                                        <div style={{ flex: 2, width: { xs: "100%", md: '50%' }, aspectRatio: '8/5', position: "relative" }}>
                                            <iframe src={id} frameborder="0" width="100%" height="100%" allowFullScreen style={{ background: 'black', width: "100%", height: "100%", position: "absolute", left: "0px", top: "0px", overflow: "hidden" }}></iframe>
                                        </div>
                                        <Stack sx={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '5px', paddingBottom: '20px' }}>
                                            <Typography sx={{ fontWeight: 'bold', color: 'white', padding: '10px', paddingTop: '20px' }}>Languages:</Typography>
                                            <Box sx={{ display: 'flex', margin: '0px 20px', flexWrap: 'wrap' }}>
                                                {itemId.split('&').map((itemm, index) => (
                                                    <Button sx={{ background: 'gray', marginBottom: '10px', marginRight: "10px", width: 'fit-content', '&:hover': { background: 'gray' }, color: 'white', fontSize: { xs: "0.6rem", md: '1rem' } }} onClick={() => { setId(itemm) }}>{item.language.split(',')[index]}</Button>
                                                ))
                                                }
                                            </Box>
                                            <Typography sx={{ fontWeight: 'bold', color: 'white', padding: '10px ' }}>Servers:</Typography>
                                            <Box sx={{ display: 'flex', margin: '0px 20px', flexWrap: 'wrap' }}>
                                                {item.server.split(',').map((itemm, index) => (
                                                    <Button sx={{ marginBottom: '10px', marginRight: '10px', background: 'gray', '&:hover': { background: 'gray' }, color: 'white', fontSize: { xs: "0.6rem", md: '1rem' } }} onClick={() => { switchServer(itemm) }} >{item.server.split(',')[index]}</Button>
                                                ))}
                                            </Box>
                                        </Stack>

                                    </Stack>
                                </>
                                }
                                {item && item.type === "series" && <>
                                    <Stack direction={matches ? "row" : 'column'} sx={{ padding: { xs: '20px 0px', md: '50px', lg: '50px 150px' }, gap: { xs: '0px', md: '20px' }, '& p': { fontSize: { xs: '0.75rem', md: '1rem' } } }}>
                                        <div style={{ flex: 2, width: "100%", aspectRatio: '8/5', position: "relative" }}>
                                            <iframe src={id} frameborder="0" width="100%" height="100%" allowFullScreen style={{ background: 'black', width: "100%", height: "100%", position: "absolute", left: "0px", top: "0px", overflow: "hidden" }}></iframe>

                                        </div>
                                        <Stack sx={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '5px', paddingBottom: '20px' }}>

                                            <Typography sx={{ fontWeight: 'bold', color: 'white', padding: '10px ' }}>Languages:</Typography>

                                            <Box sx={{ display: 'flex', margin: '0px 20px', flexWrap: 'wrap' }}>
                                                {single.split('#')[0].split('&').map((itemm, index) => (
                                                    <Button sx={{ marginBottom: '10px', marginRight: '10px', background: 'gray', '&:hover': { background: 'gray' }, color: 'white', fontSize: { xs: "0.6rem", md: '1rem' } }} onClick={() => { setId(itemm) }} >{item.language.split(',')[index]}</Button>
                                                ))
                                                }
                                            </Box>
                                            <Typography sx={{ fontWeight: 'bold', color: 'white', padding: '10px ' }}>Servers:</Typography>
                                            <Box sx={{ display: 'flex', margin: '0px 20px', flexWrap: 'wrap' }}>
                                                {item.server.split(',').map((itemm, index) => (
                                                    <Button sx={{ marginBottom: '10px', marginRight: '10px', background: 'gray', '&:hover': { background: 'gray' }, color: 'white', fontSize: { xs: "0.6rem", md: '1rem' } }} onClick={() => { switchServer(itemm) }} >{item.server.split(',')[index]}</Button>
                                                ))}
                                            </Box>
                                            <Typography sx={{ fontWeight: 'bold', color: 'white', padding: '10px' }}>Episodes:</Typography>
                                            <Stack sx={{ gap: '10px', margin: "5px 0px" }}>
                                                {itemId.split(',').map((itemm, index) => {
                                                    return (
                                                        <Typography sx={{ color: title === itemm.split('#')[1] ? '#e50914' : 'white', '&:hover': { color: '#e50914' }, cursor: 'pointer', marginLeft: '20px', '&:active': { transform: 'scale(0.95)' }, transition: 'transform 0.2s' }} onClick={() => { { setId(itemm.split('#')[0].split('&')[0]) } { setSingle(itemm) } { settitle(itemm.split('#')[1]) } }}>Episode {+" " + index + 1} : <span >{itemm.split('#')[1]}</span></Typography>
                                                    )
                                                })}
                                            </Stack>
                                        </Stack>

                                    </Stack>
                                </>
                                }
                            </Stack>
                        </Stack>
                    </>
                }
            </main>
        </div>
    )
}

export async function getStaticProps({ params = {} } = {}) {
    const { data, error } = await supabase
        .from('movies')
        .select()
        .eq('name', params.movie.replaceAll('-', ' '))

    if (data) {
        return {
            props: {
                item: data[0],
            }
        }
    }
}

export async function getStaticPaths() {
    const { data, error } = await supabase
        .from('movies')
        .select()

    if (data) {
        const paths = data.map((item, index) => {
            const path = item.name.replaceAll(' ', '-')
            return {
                params: {
                    movie: `${path}`,
                }
            };
        });
        return {
            paths,
            fallback: false,
        };
    }

}