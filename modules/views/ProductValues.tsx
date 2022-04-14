import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ 
        display: 'flex', 
        overflow: 'hidden', 
        bgcolor: 'secondary.light', 
        color: 'inherit' 
      }}
    >
      <Container 
        sx={{ 
          mt: 10, 
          mb: 8, 
          display: 'flex', 
          position: 'relative' 
        }}
      >
        <Box
          component="img"
          src="/images/productCurvyLines.png"
          alt="curvy lines"
          sx={{ 
            pointerEvents: 'none', 
            position: 'absolute', 
            top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/images/icon.webp"
                alt="suitcase"
                sx={{ height: 65 }}
              />
              <Typography 
                variant="h6"
                component="span" 
                sx={{ 
                  my: 5, 
                  color: 'inherit' 
                  }}
              >
                Преимущество
              </Typography>
              <Typography 
                variant="h5"
                component="span" 
                sx={{ mb: 3 }}>
                {
                  'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности играет важную роль в формировании систем массового участия.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/images/icon-1.webp"
                alt="graph"
                sx={{ height: 65 }}
              />
              <Typography 
                variant="h6"
                component="span" 
                sx={{ 
                  my: 5, 
                  color: 'inherit' 
                  }}>
                Преимущество
              </Typography>
              <Typography 
                variant="h5"
                component="span"
                sx={{ mb: 3 }}>
                {
                  'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности играет важную роль в формировании систем массового участия.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/images/icon-2.webp"
                alt="clock"
                sx={{ height: 65 }}
              />
              <Typography 
                variant="h6"
                component="span" 
                sx={{ 
                  my: 5, 
                  color: 'inherit' 
                  }}>
                Преимущество
              </Typography>
              <Typography 
                variant="h5" 
                component="span"
                sx={{ mb: 3 }}>
                {
                  'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности играет важную роль в формировании систем массового участия.'
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;