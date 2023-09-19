import "./Registration.css"
import React, { useState } from 'react'
import axios, { Axios } from "axios";

export function Registration(){

    const [formDataObj, SetFormDataObj] = useState({fname: "", lname: "", email: "", password: "", cpassword: "", telNo: "", city: ""})

    let passwordIsOk = false;

    function submitClicked(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        let myInputs = document.querySelectorAll(":invalid:not(form)");
        myInputs.forEach((curr) => {curr.classList.add("myInvalid");});

        axios.post("https://cyberfighters.herokuapp.com/qa-exercises/new-customer-registers");
    }

    function inputChanged(e: React.FormEvent<HTMLInputElement>)
    {
        let inputElement = e.target as HTMLInputElement;

        let inputElementName = inputElement.getAttribute("name") as string;
        
        SetFormDataObj({...formDataObj, [inputElementName]: (inputElement.value)});

        console.log(inputElement.validity.valid);

        if(inputElement.validity.valid)
        {
            inputElement.classList.remove("myInvalid");
        }

        if(inputElement.validity.valid)
        {           
            inputElement.nextElementSibling?.classList.add("myvisible");       
        }
        else
        {
            inputElement.nextElementSibling?.classList.remove("myvisible");
        }

    }
    
    function inputFieldBlurred(e: React.FormEvent<HTMLInputElement>){

        let theInputElement:HTMLInputElement = (e.target as HTMLInputElement);

        if(theInputElement.validity.valid)
        {           
           theInputElement.nextElementSibling?.classList.add("myvisible");       
        }
        else
        {
            theInputElement.nextElementSibling?.classList.remove("myvisible");
        }
    }
    
    function checkPasswordValidation(e: React.FormEvent<HTMLInputElement>)
    {
        let inputElement = e.target as HTMLInputElement;

        let inputElementName = inputElement.getAttribute("name") as string;
        
        SetFormDataObj({...formDataObj, [inputElementName]: (inputElement.value), cpassword: ""});

        

        //document.querySelector('#inConfirmPass').value = "";
        //document.querySelector('#inConfirmPass').nextElementSibling.classList.remove("myvisible");
        inputElement.nextElementSibling?.classList.remove("myvisible");

        let hasUpperCase = false;
        let hasLowerCase = false;
        let hasNumber = false;
        let hasSpecialChar = false;
        let passwordIsLongEnough = false;

        let strPassword = (e.target as HTMLInputElement).value;


        for(let i = 0; i<strPassword.length; i++)
        {
            if(strPassword[i] >= 'A' && strPassword[i] <= 'Z')
            {
                hasUpperCase = true;           
                continue;
            }
            
            if(strPassword[i] >= 'a' && strPassword[i] <= 'z')
            {
                hasLowerCase = true;
                continue;
            }

            if(strPassword[i] >= '0' && strPassword[i] <= '9')
            {
                hasNumber = true;
                continue;
            }

            if(strPassword[i] >= '!' && strPassword[i] <= '/')
            {
                hasSpecialChar = true;
                continue;
            }
        }

        if(strPassword.length >= 8)
        {
            passwordIsLongEnough = true;
        }

        if(hasUpperCase){
            document.querySelector('#spanHasUpperCase')?.classList.add("myvisible");
        }
        else{
            document.querySelector('#spanHasUpperCase')?.classList.remove("myvisible");
        }

        if(hasLowerCase){
            document.querySelector('#spanHasLowerCase')?.classList.add("myvisible");
        }
        else{
            document.querySelector('#spanHasLowerCase')?.classList.remove("myvisible");
        }

        if(hasNumber){
            document.querySelector('#spanHasNumber')?.classList.add("myvisible");
        }
        else{
            document.querySelector('#spanHasNumber')?.classList.remove("myvisible");
        }

        if(hasSpecialChar){
            document.querySelector('#spanHasHasSpecialChar')?.classList.add("myvisible");
        }
        else{
            document.querySelector('#spanHasHasSpecialChar')?.classList.remove("myvisible");
        }

        if(passwordIsLongEnough){
            document.querySelector('#spanPasswordIsLongEnough')?.classList.add("myvisible");
        }
        else{
            document.querySelector('#spanPasswordIsLongEnough')?.classList.remove("myvisible");
        }

        if(hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && passwordIsLongEnough){
            document.querySelector('#spanPasswordOk')?.classList.add("myvisible");
            passwordIsOk = true;
        }
        else{
            document.querySelector('#spanPasswordOk')?.classList.remove("myvisible");
            passwordIsOk = false;
        }

        console.log("passOK: " + passwordIsOk);
        
    }

    function confirmPassword(e: React.FormEvent<HTMLInputElement>)
    {
        let inputElement = e.target as HTMLInputElement;

        let inputElementName = inputElement.getAttribute("name") as string;
        
        SetFormDataObj({...formDataObj, [inputElementName]: (inputElement.value)});

        let strPassword = formDataObj.password;
        let strConfirm = inputElement.value;

        if(strConfirm === "")
        {
            (document.querySelector('#lblErrorConfirmPass') as HTMLLabelElement).style["display"] = "none";  
        }

        console.log(strPassword + " " + strConfirm);
        
        let passwordsMatch = false;

    
        for(let i = 0; i<strConfirm.length; i++)
        {
            if(strPassword[i] !== strConfirm[i])
            {
                (document.querySelector('#lblErrorConfirmPass') as HTMLLabelElement).style["display"] = "block";
                passwordsMatch = false;
                break;
            }
    
            else
            {
                (document.querySelector('#lblErrorConfirmPass') as HTMLLabelElement).style["display"] = "none";  
                passwordsMatch = true;          
            }
        }    
    
        console.log("passOK: " + passwordIsOk + " match: " + passwordsMatch);
        
        if(strConfirm.length === strPassword.length && passwordIsOk && passwordsMatch)
        {
            inputElement.nextElementSibling?.classList.add("myvisible");
        }
        else
        {
            inputElement.nextElementSibling?.classList.remove("myvisible");
        }        
    }
    
    return(

        <form className="regForm" onSubmit={(e) => {submitClicked(e)}}>
    
            <label>Name</label>

            <input id="fname" className="name" type="text" value = {formDataObj.fname}placeholder="First" name="fname"  required onInput= {(e) => {inputChanged(e)}} onBlur= {(e) => {inputFieldBlurred(e)}} />
            <span id="spanFnameOk"className="material-symbols-outlined">
                done
                </span>

            <input className="name" type="text" value = {formDataObj.lname}placeholder="Last" name="lname" required onInput= {(e) => {inputChanged(e)}} onBlur= {(e) => {inputFieldBlurred(e)}} />
            <span id="spanLnameOk"className="material-symbols-outlined">
                done
                </span>

            <label>Choose your username (Email)</label>
            <input id="email" className="wideInput" type="email" value = {formDataObj.email}name="email" required onInput= {(e) => {inputChanged(e)}} onBlur= {(e) => {inputFieldBlurred(e)}}/>
            <span id="spanEmailOk"className="material-symbols-outlined" >
                done
                </span>

            <label>Create a password</label>
            <input id="inCreatePassword" className="wideInput" type="password" value = {formDataObj.password} name="password" required onInput=
            {(e) => {checkPasswordValidation(e)}} />
            <span id="spanPasswordOk"className="material-symbols-outlined">
                done
                </span>

            <ul id="ulPasswordValidation">
                <li>At least one uppercase letter<span id="spanHasUpperCase" className="material-symbols-outlined">
                done
                </span></li>
                <li>At least one lowercase letter<span id="spanHasLowerCase"className="material-symbols-outlined">
                done
                </span></li>
                <li>At least one number<span id="spanHasNumber" className="material-symbols-outlined">
                done
                </span></li>
                <li>At least one special character<span id="spanHasHasSpecialChar"className="material-symbols-outlined">
                done
                </span></li>
                <li>At least 8 characters long<span id= "spanPasswordIsLongEnough" className="material-symbols-outlined">
                done
                </span></li>
            </ul>      

            <label>Confirm your password</label>
            <input id="inConfirmPass" className="wideInput" type="password" value = {formDataObj.cpassword} name="cpassword" required onInput= {(e) => {confirmPassword(e)}} />
            <span id="spanConfirmPassOk"className="material-symbols-outlined">
                done
                </span>

            <label  id="lblErrorConfirmPass">Error: Passwords don't match</label>

           

            <label>Mobile phone</label>
            <input className="wideInput" id="telId" name="telNo" value = {formDataObj.telNo} type="tel" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onInput= {(e) => {inputChanged(e)}} onBlur= {(e) => {inputFieldBlurred(e)}}/> 
            <span id="spanMobileOk"className="material-symbols-outlined">
                done
                </span>



            <label>City</label>
            <input id="city" className="city" type="text" value = {formDataObj.city} name="city" required onInput= {(e) => {inputChanged(e)}} onBlur= {(e) => {inputFieldBlurred(e)}} />
            <span id="spanFnameOk"className="material-symbols-outlined">
                done
                </span>

            <div id="divSubmit">
            <input id="submit" type="submit" value="Submit" />
            </div>
        </form> 
    );    
}


