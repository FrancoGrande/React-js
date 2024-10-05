import * as React from 'react'
import "./productCard.css"
import {Card, Button, CardContent,Typography, CardActions ,CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';


const ProductCard = ({title, price, descripcion, category, img, id}) => {
    return (
    <Card className='card' sx={{ minWidth: 275 }}>
        <CardContent className='contenido'>
        <CardMedia 
        component="img"
        height="300"

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
        <Link to= {`/productdetails/${id}`}>
        <Button className='botonVerDetalles' variant='contained' size="small">Ver detalles</Button>
        </Link>
        </CardActions>
    </Card>

    )
}

export default ProductCard