import { useNavigate } from "react-router-dom";
import "./Card.css"
import { Product } from './Product';

export function Card(props: { product: Product }) {
    const { product } = props;

    const navigate = useNavigate();

    return (
        <div id="divCard" onClick={() => { navigate(`/consoles/products/${props.product.id}`) }}>
            <img src={product.imageFileName} alt="" />
            <h3>{product.title}</h3>
            <h4>price: {product.price}$</h4>
        </div>
    )
}
