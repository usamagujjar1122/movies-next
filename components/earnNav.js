import { Avatar, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";

const EarnNav = () => {
    const matches = useMediaQuery('(min-width:800px)');
    return ( 
        <>
            <Stack direction="row" sx={{justifyContent:'space-between',padding:"20px 50px"}}>
                <Link href="/make-money/earn" style={{ textDecoration: 'none', display: matches ? 'flex' : 'none' }}><Typography sx={{ fontSize: { xs: '1rem', md: '1.5rem', lg: '2rem' }, color: 'white', fontWeight: 'bold', marginRight: '20px',  cursor: 'pointer' }}>Earn<span style={{ color: '#e50914' }}>4All</span></Typography></Link>
                <Stack direction="row">
                        <Avatar></Avatar>
                </Stack>
            </Stack>
        </>
     );
}
 
export default EarnNav;