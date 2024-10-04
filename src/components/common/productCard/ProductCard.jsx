import * as React from 'react'
import "./productCard.css"
import {Card, Button, CardContent,Typography, CardActions ,CardMedia } from '@mui/material';


const ProductCard = ({title, price, descripcion, category, img}) => {
    return (
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <CardMedia
        component="img"
        height="194"
        image={img}
        alt="asd"
    />
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {category}
        </Typography>
        <Typography variant="h5" component="div">
        {title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{descripcion}</Typography>
        <Typography variant="body2">
            {price}
            <br />
            
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Learn More</Button>
        </CardActions>
    </Card>

    )
}

export default ProductCard