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

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ 
        display: 'flex', 
        bgcolor: 'secondary.light', 
        overflow: 'hidden',
        color: 'black' 
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 10,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/images/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -120,
            opacity: 0.7,
          }}
        />
        <Typography 
          variant="h4" 
          marked="center" 
          component="span" 
          sx={{
            textAlign: 'center', 
            mb: 8, maxWidth: 800, 
            color: 'black' 
            }}
        >
          Как мы работаем?
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="/images/icon.webp"
                  alt="suitcase"
                  sx={image}
                />
                <Typography 
                  variant="h5"
                  component="span"
                >
                  Наши специалисты помогут точно 
                  определить, какой тур подойдёт именно Вам
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="/images/icon-1.webp"
                  alt="graph"
                  sx={image}
                />
                <Typography 
                  variant="h5"
                  component="span"
                >
                  Наши специалисты помогут точно 
                  определить, какой тур подойдёт именно Вам
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="/images/icon-2.webp"
                  alt="clock"
                  sx={image}
                />
                <Typography 
                  variant="h5"
                  component="span"
                >
                  Наши специалисты помогут точно 
                  определить, какой тур подойдёт именно Вам
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;