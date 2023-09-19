import { useState } from "react";
import { Product } from "./Product";
import { useParams } from "react-router-dom"

export function BigCard() {

    let pathParams = useParams();
    
    //go to the DB and bring product data

    let newProduct: Product = {id: 1, categoryId: 1, deviceType:1, condition: "new", title: "PS5 for sale", prodDescription: "sdsdsdsdsds", price: 2000, imageFileName: "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/PGC62_Z_P_4948872415217_1.png", userId: 1}


    return (
        <div id="divBigCard">
            <h3 id="test">This is bigCard. This product id is: {pathParams.product_id}</h3>
            <img src={newProduct.imageFileName} alt="" />
            <h3>{newProduct.title}</h3>
            <h4>price: {newProduct.price}$</h4>
            <label htmlFor="">{newProduct.categoryId}</label>
            <label htmlFor="">{newProduct.deviceType}</label>
            <label htmlFor="">{newProduct.condition}</label>
            <label htmlFor="">{newProduct.prodDescription}</label>
        </div>

    )
}




