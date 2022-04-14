import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Grid, 
    Typography 
} from '@mui/material';
import React from 'react';
import { IProducts } from "../../types"

interface ICardProps {
    card: object
    handleClickOpen: (param: any) => void;
}

type ICard = IProducts & ICardProps

const ProductPriceItem: React.FC<ICard> = ({
    card,
    idButton,
    title,
    description,
    poster,
    newPrice,
    oldPrice,
    handleClickOpen
}) => {


    return (
        <Grid item xs={12} md={4}>
           <Card 
                sx={{
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between'}}
            >
                <CardMedia
                    component="img"
                    image={poster}
                    alt={title}
                    title={title}
                    sx={{height: 220}}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="text"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ mt: 4, mb: 4 }}
                    >
                        {description}
                    </Typography>
                    <Typography 
                        variant="subtitle1"
                        component="text"
                        sx={{ mr: 1 }}
                    >
                        {newPrice}
                    </Typography>
                    <Typography 
                         color="secondary"
                         variant="subtitle1"
                         component="text"
                         sx={{ textDecoration: 'line-through'}}
                    >
                        {oldPrice}
                    </Typography>
                </CardContent>
                <CardActions>
                <Button
                    id={idButton}
                    onClick={() => handleClickOpen(card)}
                    color="secondary"
                    variant='outlined'
                    size="large"
                    sx={{ minWidth: 120, mb: '10px' }}
                >
                    Подробнее
                </Button>
                </CardActions>
            </Card>
           
        </Grid>
    );
};

export default ProductPriceItem;