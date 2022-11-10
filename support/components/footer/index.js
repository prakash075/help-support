import React from 'react';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Divider } from '@mui/material';
import { TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Logo from '../../assets/img/logocf.svg';
import Location from '../../assets/img/locate.svg';
import Support from '../../assets/img/headset.svg';
import Mail from '../../assets/img/maile.svg';
import Visa from '../../assets/img/visa.svg';
import Master from '../../assets/img/master.svg';
import Image from 'next/image';

const Footer = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Divider />
            <Grid container sx={{ marginTop: { xs: '50px', sm: '75px', md: '150px' } }}>
                <Grid container item xs={12} sm={6}>
                    <Grid item xs={12} md={4} sx={{ marginBottom: { xs: '25px', lg: '0px' } }}>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '600', lineHeight: '28px', fontSize: '18px', color: '#1B1B1B', mb: 2 }}>Discover</Typography>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', fontSize: '16px', color: '#828282', mb: 2 }}>About us</Typography>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', fontSize: '16px', color: '#828282', mb: 2 }}>Create campaign</Typography>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', fontSize: '16px', color: '#828282', mb: 2 }}>Explore campaigns</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ marginBottom: { xs: '25px', md: '0px' } }}>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '600', lineHeight: '28px', fontSize: '18px', color: '#1B1B1B', mb: 2 }}>Learn</Typography>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', fontSize: '16px', color: '#828282', mb: 2 }}>Blogs</Typography>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', fontSize: '16px', color: '#828282', mb: 2 }}>How it works</Typography>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', fontSize: '16px', color: '#828282', mb: 2 }}>Success stories</Typography>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', fontSize: '16px', color: '#828282', mb: 2 }}>FAQs</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ marginBottom: { xs: '25px', md: '0px' } }}>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '600', lineHeight: '28px', fontSize: '18px', color: '#1B1B1B', mb: 2 }}>Legal</Typography>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', fontSize: '16px', color: '#828282', mb: 2 }}>Contact us</Typography>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', fontSize: '16px', color: '#828282', mb: 2 }}>Privacy Policy</Typography>
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', fontSize: '16px', color: '#828282', mb: 2 }}>Terms & conditions</Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={6}>
                    <Grid item xs={12} md={6} sx={{ marginTop: { xs: '0px', sm: '-50px', md: '-85px' }, marginBottom: { xs: '50px', sm: '0px', padding: '5px' } }}>
                        <Image src={Logo} alt='Logo Image' />
                        <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '400', lineHeight: '21px', fontSize: '14px', color: '#333333' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, velit ultrices tortor sit odio pellentesque</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ marginTop: { xs: '0px', sm: '30px', md: '0px' } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', mb: 1.2, }}>
                            <Button sx={{ minWidth: '30px', height: '30px', backgroundColor: '#D1E231', borderRadius: '50%', padding: '2px', mr: 2, }}>
                                <Image src={Location} alt='Location Image' />
                            </Button>
                            <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '400', lineHeight: '21px', fontSize: '14px', color: '#333333' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, velit ultrices tortor sit odio pellentesque </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', mb: 1.2, }}>
                            <Button sx={{ minWidth: '30px', height: '30px', backgroundColor: '#D1E231', borderRadius: '50%', padding: '2px', }}>
                                <Image src={Support} alt='Support Image' />
                            </Button>
                            <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '500', lineHeight: '24px', fontSize: '16px', color: '#333333', ml: 2 }}>9847528521, 5425862152</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', mb: 1.2, }}>
                            <Button sx={{ minWidth: '30px', height: '30px', backgroundColor: '#D1E231', borderRadius: '50%', padding: '2px', }}>
                                <Image src={Mail} alt='Mail Image' />
                            </Button>
                            <Typography sx={{ fontFamily: 'graphik', fontStyle: 'normal', fontWeight: '500', lineHeight: '21px', fontSize: '14px', color: '#333333', ml: 2 }}>help@customercare</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: { xs: '30px', sm: '30px', md: '30px' }, marginBottom: '40px' }}>
                        <Box>
                            <Typography sx={{ fontFamily: 'sentient', fontSize: '18px', lineHeight: '28px', fontWeight: '700', fontStyle: 'normal', color: '#1B1B1B', mb: 2 }}>Stay connected, Join our newsletter</Typography>
                        </Box>
                        <Box style={{ display: 'flex' }}>
                            <TextField sx={{ width: { xs: '80%', md: '280px', lg: '350px' }, ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": { padding: '8px 10px' } }} placeholder='Urname@email.com' />
                            <Button sx={{ backgroundColor: '#D1E231 !important', boxShadow: '1px 1px 0px #4B4C43', border: '2px solid #4B4C43', width: '88px', height: '40px', padding: '1px 30px', ml: '10px', mt: -0.1 }}>
                                <ArrowForwardIcon sx={{ color: 'black' }} />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
            <Grid container item xs={12} sx={{ display: { xs: 'flex', sm: '-webkit-box' }, flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
                <Grid item xs={12} sm={7}>
                    <Typography sx={{ fontFamily: 'graphik', fontWeight: '400', fontSize: '14px', lineHeight: '21px', color: '#333333', my: 2, textAlign: { xs: 'center', sm: 'start' } }}>All Copyrights Vitreous Donor Solution Private Limited. </Typography>
                </Grid>
                <Grid item xs={12} sm={5} sx={{ mt: { xs: 3, sm: 0 }, mb: { xs: -2, sm: 0 } }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: { xs: 'center', sm: 'end' } }}>
                        <Typography sx={{ my: { xs: -0.2, sm: 2 }, fontFamily: 'graphik', fontWeight: '500', fontSize: '12px', lineHeight: '22px', color: '#828282' }}>We accept</Typography>
                        <Box sx={{ ml: 1, mt: { xs: -2, sm: 0.2 } }}>
                            <Image src={Visa} alt='visa card Image' />
                        </Box>
                        <Box sx={{ ml: 1, mt: { xs: -2, sm: 0.2 } }}>
                            <Image src={Master} alt='Master card Image' />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer;