import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://skillfond.ru/">
        Skillfond
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 30,
  height: 30,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mr: 1,
};

const rightLink = {
  fontSize: 18,
  color: '#fff',
};

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'primary.main' }}
    >
      <Container 
        sx={{ 
          my: 5, 
          display: 'flex', 
          }}
      >
        <Grid 
          container 
          spacing={5}
          sx={{ 
            display: 'flex', 
            alignItems: 'flex-end',
            justifyContent: 'space-between'
            }}
        >
          <Grid item sx={{ color: 'white' }}>
            <Copyright />
          </Grid>
          <Link href="mailto:hello@skillfond.ru" sx={rightLink} >
            hello@skillfond.ru
          </Link>
          <Grid item sx={{ display: 'flex' }}>
            <Box component="a" href="https://www.facebook.com/skillfond/" sx={iconStyle}>
              <img
                src="/images/facebookIcon.png"
                alt="Facebook"
              />
            </Box>
            <Box component="a" href="https://www.instagram.com/skillfond/" sx={iconStyle}>
              <img
                src="/images/instagramIcon.png"
                alt="Instagram"
              />
            </Box>
            <Box component="a" href="https://vk.com/skillfond/" sx={iconStyle}>
              <img
                src="/images/vkIcon.png"
                alt="Vkontakte"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}