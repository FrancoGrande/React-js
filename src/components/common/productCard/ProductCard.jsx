import * as React from 'react'
import "./productCard.css"
import {Card, Button, CardContent,Typography, CardActions ,CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';



const ProductCard = ({title, price, descripcion, category, img, id}) => {
    return (

        <div className="card w-96 shadow-xl">
            <figure>
                <img
                src={img}
                alt="asd" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p>${price}</p>

                <div className="card-actions justify-end">

                <Link to= {`/productdetails/${id}`}>
                <Button className="btn btn-primary">Ver detalles</Button>
                </Link>

                
                </div>
            </div>
        </div>



    )
}

export default ProductCard