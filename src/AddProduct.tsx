import "./AddProduct.css"
import React, { useState } from 'react'
import axios, { Axios } from "axios";

export function AddProduct(){

    const [formDataObj, SetFormDataObj] = useState({
        id: -1,
        categoryID: "select category",
        deviceTypeID: "select device type",
        condition: "",
        title: "",
        prodDescription: "",
        price: "",
        imgUrl: "",
        userID: -1 })

    

    function submitClicked(e: React.FormEvent<HTMLFormElement>)
    {
        /*
        e.preventDefault();
        let myInputs = document.querySelectorAll(":invalid:not(form)");
        myInputs.forEach((curr) => {curr.classList.add("myInvalid");});

        axios.post("https://cyberfighters.herokuapp.com/qa-exercises/new-customer-registers");
        */
    }

    return(

        <form className="addProduct" onSubmit={(e) => {submitClicked(e)}}>
    
            <h2>Add new product</h2>

            <label>Category</label>
            <select id="slcCategory" className="wideInput" name="category" value = {formDataObj.categoryID} required> 
            <option disabled value="select category">select category</option>
            <option value="Consoles">Consoles</option>
            <option value="Games">Games</option>
            <option value="Accessories">Accessories</option>
            <option value="Subscriptions">Subscriptions</option>
            </select>

            <label>Device type</label>
            <select id="slcDeviceType" className="wideInput" name="deviceType" value = {formDataObj.deviceTypeID}> 
            <option disabled value="select device type">select device type</option>
            <option value="PS4">PS4</option>
            <option value="PS5">PS5</option>
            <option value="XBOX">XBOX</option>
            <option value="PC">PC</option>
            <option value="WII">WII</option>
            <option value="SEGA">SEGA</option>
            </select>

            <label>Condition</label>
            <input id="condition" className="condition" type="text" value = {formDataObj.condition} required/>

            <label>Title</label>
            <input id="title" className="title" type="text" value = {formDataObj.title} required/>

            <label>Description</label>
            <input id="prodDescription" className="prodDescription" type="text" value = {formDataObj.prodDescription} required/>
            
            <label>Price</label>
            <input id="price" className="price" type="text" value = {formDataObj.price} required pattern="[0-9]"/>

            <label>Image</label>
            <input id="imgUrl" className="imgUrl" type="text" value = {formDataObj.imgUrl} required/>

            <div id="divSubmit">
            <input id="submit" type="submit" value="Submit" />
            </div>
        </form> 
    );    
}


