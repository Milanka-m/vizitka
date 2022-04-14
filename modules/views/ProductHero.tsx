import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

interface ProductHeroProps {
  handleClickOpen: () => void
}

const backgroundImage =
  '/images/island.webp';

const ProductHero: React.FC<ProductHeroProps> = ({ handleClickOpen }) => {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9',
        backgroundPosition: 'center',
      }}
    >
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography 
        color="inherit" 
        variant="h4" 
        component="span"
        sx={{ 
          mb: 5,
          maxWidth: 500
        }}
        >
        Подарите любимым праздник
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        component="h1"
        sx={{ 
          mb: 4,
          mt: { sx: 4, sm: 10 } 
        }}
      >
        До конца месяца действует акция
      </Typography>
      <Button
        id="fast-start"
        onClick={handleClickOpen}
        color="secondary"
        variant='outlined'
        size="large"
        sx={{ 
          minWidth: 200, 
          borderRadius: 2 
        }}
      >
        Подробнее
      </Button>
    </ProductHeroLayout>
  )
}

export default ProductHero