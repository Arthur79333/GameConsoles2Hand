import "./Gallery.css"
import { Card } from "./Card"
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from './Product';
import { useParams } from "react-router-dom";
import internal from "stream";


export function Gallery(props:{categoryId: number/* deviceType: int, condition: string*/ }) {

    const [allProducts, setAllProducts] = useState<Product[]>([]);

    useEffect(() => {
      console.log(window.location.href);
      
        fetch(`https://localhost:7039/api/GetProductsByCategoryId/${props.categoryId}`)
        //fetch(`https://localhost:7039/api/Products`)
        .then((response) => {return response.json()})
        
        .then((data) => {console.log(data);
        
            setAllProducts(data as unknown as Product[])})
      
    }, [])

    
    return (
        <div id="divGallery">
            
            {allProducts.map((curr, i) => (
                <Card product={curr} key={i} />
            ))}
        </div>
    )
}

/*
let newProduct: Product = {id: 1, categoryID: 1, deviceTypeID:1, condition: "new", title: "PS5 for sale", prodDescription: "sdsdsdsdsds", price: 2000, imgUrl: "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/PGC62_Z_P_4948872415217_1.png", userID: 1}

  const [allProducts, setAllProducts] = useState<Product[]>([newProduct,newProduct,newProduct,newProduct, newProduct, newProduct]);

  */