import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Box, Container, Typography } from '@mui/material';
import { IImages } from "../../types"

const CardImage: React.FC<IImages>= ({
  url,
  title,
}) => {

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mt: 7, mb: 5, pr: 1, pl: 1 }}>
            <CardMedia
                component="img"
                height="500"
                image={url}
                alt={title}
             />
             <Typography
                align="center"
                sx={{ mt: 3 }}
             >
                {title}
             </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default CardImage;