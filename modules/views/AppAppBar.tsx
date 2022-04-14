import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { Grid } from '@mui/material';

const rightLink = {
  fontSize: 18,
  color: 'inherit',
  mb: 2,
};

const iconStyle = {
    width: 35,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

function AppAppBar() {
  return (
    <div>
      <AppBar position='static' sx={{ pt: '20px', pb: '20px', backgroundColor: '#000'}}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/*   <Box sx={{ flex: 1 }} /> */}
          <Box component="a" href="/">
            <Box
                component="img"
                src="/images/logo-skillfond.svg"
                alt="skillfond"
                sx={{ height: 75 }}
              />
          </Box>
         <Box sx={{ 
           flex: 1, 
           display: 'flex', 
           justifyContent: 'flex-end' 
           }}
          >
            <Grid item 
              sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end' 
                }}
              >
                <Link href="mailto:hello@skillfond.ru" sx={rightLink}>
                  hello@skillfond.ru
                </Link>
                <Box  sx={{ 
                 display: 'flex',
                 ml: 5
                 }}>
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
                </Box>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppAppBar;