import "./Card.css";

export const Card = ({product}) => {
const {name, price, image} = product;

    return(
        <div className="cart">
            <img src={image} alt={name} />
            <p className="prodcutName">{name}</p>
            <p className="productPrice">${price}</p>
            <button>Remove</button>
        </div>
    )
}