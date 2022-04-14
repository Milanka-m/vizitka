import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button } from '@mui/material';
import { IProducts } from "../../types"

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface ICardProps {
  handleClickOpen: () => void
}

type ICard = IProducts & ICardProps

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductCard: React.FC<ICard>= ({ 
  title,
  description,
  paragraph1,
  paragraph2,
  paragraph3,
  idButtonCard,
  poster,
  newPrice,
  oldPrice,
  handleClickOpen 
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 650 }}>
      <CardHeader
        avatar={
          <Avatar 
            src={poster}
            alt={title}
          >
          </Avatar>
        }
        title={title}
        subheader={description}
        sx={{ mr: 4 }}
      />
      <CardMedia
        component="img"
        height="240"
        image={poster}
        alt={title}
      />
      <CardContent>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Box>
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
          </Box>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Box>
        
        <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ mt: 3 }}
        >
           {paragraph1} 
        </Typography>
        <Button
            id={idButtonCard}
            onClick={handleClickOpen}
            color="secondary"
            variant='outlined'
            size="large"
            sx={{ 
              minWidth: 120, 
              mt: 3 
            }}
        >
            Заказать
        </Button>
      </CardContent>
      <CardActions disableSpacing>
        <Typography 
          variant="body2"
          sx={{ 
          ml: 1
        }}
        >
          Читать ещё
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Описание:</Typography>
          <Typography paragraph>
            {paragraph2}
          </Typography>
          <Typography paragraph>
            {paragraph3}
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProductCard;