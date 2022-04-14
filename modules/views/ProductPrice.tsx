import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import ProductPriceItem from './ProductPriceItem'
import { Grid } from '@mui/material';
import { IProducts } from "../../types"

interface ICardProps {
	initialCards?: IProducts[]
  title?: string
  handleClickOpen: (param: any) => void
}

const ProductPrice: React.FC<ICardProps> = ({ 
  initialCards, 
  title, 
  handleClickOpen
}) => {
  return (
    <Container component="section" sx={{ mt: 9, mb: 9 }}>
      <Typography 
        variant="h4" 
        marked="center" 
        align="center" 
        component="h2"
        sx={{ mt: 8, mb: 8 }}
      >
        { title }
      </Typography>
      <Grid container spacing={2}>
            {initialCards && 
              initialCards.map((item) => {
                return (
                  <ProductPriceItem 
                    card={item}
                    idButton={item.idButton}
                    title={item.title}
                    description={item.description}
                    poster={item.poster}
                    newPrice={item.newPrice}
                    oldPrice={item.oldPrice}
                    key={item.id}
                    handleClickOpen={handleClickOpen}
                  />
                )
              })}
        </Grid>    
    </Container>
  );
}

export default ProductPrice