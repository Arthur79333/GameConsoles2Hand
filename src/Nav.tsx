import { useNavigate } from "react-router-dom";
import "./Nav.css";

export function Nav()
{
    const navigate = useNavigate();
    
    return(
        <div className="Nav">
            <div className="hover" onClick={() => {navigate(`/home`)}}>Home</div>
            <div className="hover" onClick={() => {navigate(`/consoles/products`)}}>Consoles</div>
            <div className="hover"onClick={() => {navigate(`/games/products`)}}>Games</div>
            <div className="hover"onClick={() => {navigate(`/accessories/products`)}}>Accessories</div>
            <div className="hover"onClick={() => {navigate(`/subscriptions/products`)}}>Subscriptions</div>
            <div id="divAddProduct"onClick={() => {navigate(`/addProduct`)}}>Add Product</div>
        </div>
    )
}
